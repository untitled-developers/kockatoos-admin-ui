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
        class="flex flex-wrap gap-4 p-4 bg-white"
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
            <Image
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
import {ref, watch} from 'vue'
import {useSortable} from '@vueuse/integrations/useSortable'
import Button from "primevue/button";
import {Image} from "primevue";

const props = defineProps({
  idPath: {
    type: String,
    default: 'id'
  },
  urlPath: {
    type: String,
    required: true
  },
  namePath: {
    type: String,
    default: ''
  },
  sizePath: {
    type: String,
    default: ''
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'update:modelValue',
  'selectionChange',
  'deleteItems',
  'sortItems'
])

const galleryRef = ref(null)
const selectedItems = ref([])
const modelValue = defineModel()

/**
 * Get a value from an object using a path string
 * Supports both dot notation and bracket notation
 */
function getValueByPath(item, path) {
  if (!path) return '';

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

/**
 * Check if an item is currently selected
 */
function isSelected(item) {
  return selectedItems.value.some(selectedItem =>
      getValueByPath(selectedItem, props.idPath) === getValueByPath(item, props.idPath)
  )
}

/**
 * Toggle selection state of an item
 */
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

/**
 * Handle item sorting
 */
function handleSort(sortedList) {
  // Map items with their new sort positions
  const items = sortedList.map((item, index) => ({
    id: getValueByPath(item, props.idPath),
    sort_number: index
  }));

  // Emit event for parent to handle the API call
  emit('sortItems', items);
}

/**
 * Handle item deletion
 */
function handleDelete() {
  const ids = selectedItems.value.map(item => getValueByPath(item, props.idPath));
  const itemsToDelete = selectedItems.value;

  // Emit delete event for parent to handle the API call
  // Pass a confirmation callback to update UI only after success
  emit('deleteItems', {
    ids,
    items: itemsToDelete,
    onSuccess: () => {
      // Only update the model after successful deletion
      const updatedItems = modelValue.value.filter(item =>
          !ids.includes(getValueByPath(item, props.idPath))
      );

      // Update the model value
      emit('update:modelValue', updatedItems);

      // Clear selection
      selectedItems.value = [];
    },
    onError: (error) => {
      // Parent can handle any UI feedback for errors
      console.error('Delete operation failed:', error);
    }
  });
}

/**
 * Clear selection
 */
function clearSelection() {
  selectedItems.value = [];
}

// Watch for changes to modelValue and reset selection
watch(modelValue, () => {
  selectedItems.value = [];
});

// Initialize sortable functionality
useSortable(galleryRef, modelValue, {
  animation: 150,
  onUpdate: (event) => {
    // Create a shallow copy of the array to maintain reactivity
    const newArray = [...modelValue.value];

    // Swap items based on the indices
    const temp = newArray[event.oldIndex];
    newArray[event.oldIndex] = newArray[event.newIndex];
    newArray[event.newIndex] = temp;

    // Update model value with the new order
    emit('update:modelValue', newArray);

    // Handle sort processing
    handleSort(newArray);
  }
});

// Expose component methods and state
defineExpose({
  selectedItems,
  clearSelection
});
</script>

<style scoped>
.selected-item {
  outline: 2px solid var(--p-primary-600);
}
</style>