<template>
  <div class="py-2 px-4 bg-white flex mb-2">
    <div class="flex items-center gap-x-2 gap-2">
      <slot name="actions"></slot>
      <Button
          v-if="selectedItems.length > 0"
          label="Delete"
          severity="danger"
          icon="pi pi-trash"
          @click="handleDelete"
      ></Button>
    </div>
  </div>
  <div class="relative min-h-[100px]">
    <div
        v-if="isLoading"
        class="absolute inset-0 bg-white/50 flex items-center justify-center z-10"
    >
      <i class="pi pi-spin pi-spinner text-2xl"></i>
    </div>

    <div
        ref="galleryRef"
        class="flex flex-wrap gap-4 p-4 bg-white "
    >
      <template v-for="(item, index) in modelValue" :key="getValueByPath(item, idPath)">
        <div
            class="cursor-move touch-none"
            @click="toggleSelectItem(item)"
        >
          <div
              class="w-48 h-48 relative bg-gray-100 rounded-lg overflow-hidden group transition-all duration-100"
              :class="[isSelected(item) ? 'selected-item' : '']"
          >
            <img
                :src="getValueByPath(item, urlPath)"
                :alt="getValueByPath(item, namePath)"
                class="w-full h-full object-cover"
            />
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script setup>
import {, ref, watch} from 'vue'
import {useSortable} from '@vueuse/integrations/useSortable'
import Button from "primevue/button";

const props = defineProps({
  deleteEndpoint: {
    required: true,
    type: String
  },
  sortEndpoint: {
    required: true,
    type: String
  },
  idPath: {
    type: String,
    default: 'id'
  },
  urlPath: {
    type: String,
    required: true
  },
  namePath: {
    type: String
  },
  sizePath: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue', 'selectionChange'])
const galleryRef = ref(null)
const selectedItems = ref([])
const isLoading = ref(false)
const modelValue = defineModel()

function getValueByPath(item, path) {
  try {
    const keys = path.replace(/\[(\w+)\]/g, '.$1').split('.');

    return keys.reduce((current, key) => {
      if (current === undefined || current === null) {
        throw new Error(`Invalid path: ${path}`);
      }
      return current[key];
    }, item);

  } catch (error) {
    console.error(`Error accessing path "${path}":`, error.message);
    return undefined;
  }
}

function isSelected(item) {
  return selectedItems.value.some(selectedItem =>
      getValueByPath(selectedItem, props.idPath) === getValueByPath(item, props.idPath)
  )
}


function toggleSelectItem(item) {
  if (isSelected(item)) {
    selectedItems.value = selectedItems.value.filter(
        selectedItem => getValueByPath(selectedItem, props.idPath) !== getValueByPath(item, props.idPath)
    )
  } else {
    selectedItems.value = [...selectedItems.value, item]
  }

  emit('selectionChange', {
    selected: selectedItems.value,
    lastSelected: item
  })
}


async function handleSort(sortedList) {
  try {
    isLoading.value = true;
    sortedList.forEach((item, index) => {
      item['sort_number'] = index
    })
    const items = sortedList.map((item, index) => ({
      id: getValueByPath(item, props.idPath),
      sort_number: index
    }));

    await axios.post(props.sortEndpoint, {items});

  } catch (error) {
    console.error('Error updating sort order:', error);
  } finally {
    isLoading.value = false;
  }
}

async function handleDelete() {
  try {
    isLoading.value = true;

    const ids = selectedItems.value.map(item => getValueByPath(item, props.idPath));

    await axios.delete(props.deleteEndpoint, {
      data: {ids}
    });

    modelValue.value = modelValue.value.filter(item =>
        !ids.includes(getValueByPath(item, props.idPath))
    );
    selectedItems.value = [];
  } catch (error) {
    console.error('Error deleting items:', error);
  } finally {
    isLoading.value = false;
  }
}

function toggleLoading() {
  isLoading.value = !isLoading.value
}

watch(() => props.modelValue, () => {
  selectedItems.value = []
})

useSortable(galleryRef, modelValue.value, {
  animation: 150,
  onUpdate: (event) => {
    const temp = modelValue.value[event.oldIndex]
    modelValue.value[event.oldIndex] = modelValue.value[event.newIndex]
    modelValue.value[event.newIndex] = temp
    handleSort(modelValue.value)
  }
})

defineExpose({
  selectedItems,
  toggleLoading,
  clearSelection: () => {
    selectedItems.value = []
  }
})
</script>
<style>


</style>
