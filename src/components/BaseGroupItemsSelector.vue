<template>
  <div>
    <BaseInputContainer :label="groupListConfig.inputLabel">
      <Select :option-label="groupListConfig.optionLabel"
              v-model="selectedGroup"
              :options="groups">
        <template #option="{option}">
          <div class="flex items-center gap-x-2">
            {{ option[groupListConfig.optionLabel] }}
            <div class="bg-[--p-primary-600] text-white flex items-center justify-center size-8 rounded-md font-medium">
              {{
                getNumberOfSelectedItemsByGroup(option)
              }}
            </div>
          </div>
        </template>
      </Select>
    </BaseInputContainer>
    <div class="rounded-lg bg-white shadow my-2">
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <div v-if="selectedGroup">
            <h2 class="text-xl font-medium text-gray-900">
              {{ selectedGroup[groupListConfig.optionLabel] }}
            </h2>
            <p class="text-[--p-primary-600]">{{ filteredSelectedItems.length }} items selected</p>
          </div>
          <div v-else class="text-gray-600">
            Select A Group to add options
          </div>
        </div>
        <div class="mt-4" v-if="selectedGroup">
          <Fluid>
            <IconField>
              <InputIcon class="pi pi-search"/>
              <InputText placeholder="Search" v-model="searchQuery"/>
            </IconField>
          </Fluid>

        </div>
      </div>
    </div>
    <TransitionGroup tag="ul" name="list" role="list" class="flex flex-col bg-gray-50 gap-y-3 overflow-y-auto"
                     style="max-height: 400px; height: 400px">
      <li v-for="item in filteredItemsList"
          :key="item.id"
          @click="handleSelectItem(item)"
          class="list-item">
        <div class="p-2 px-6 bg-white shadow rounded-md flex items-center hover:bg-[--p-primary-50] cursor-pointer">
          {{ item[groupItemsLabel] }}
        </div>
      </li>
    </TransitionGroup>
  </div>
  <ul>
    <li v-for="selectedItem in filteredSelectedItems">
      <slot name="selected-item" :selected-item="selectedItem"></slot>
    </li>
  </ul>
</template>

<script setup>
import {Select} from "primevue";
import {computed, ref} from "vue";
import BaseInputContainer from "./BaseInputContainer.vue";
import {ToggleSwitch, InputText, Fluid, IconField, InputIcon} from "primevue";
import useUtils from "../composables/useUtils.js";

const props = defineProps({
  groupListConfig: {
    type: Object,
    default: () => {
      return {
        optionLabel: 'name',
        inputLabel: 'Group'
      }
    }
  },
  itemsGroupKey: {
    type: String,
    default: 'group_id'
  },
  groups: {
    type: Array,
    required: true
  },
  groupsItems: {
    type: Array,
    required: true
  },
  groupItemsLabel: {
    type: String,
    default: 'name'
  }
})
const {get} = useUtils()
const selectedGroup = ref(null)
const selectedItems = defineModel('selectedItems')
const searchQuery = ref('')

const filteredItemsList = computed(() => {
  if (!selectedGroup.value) {
    return []
  }
  return props.groupsItems.filter(item => {
    const isInSelectedGroup = get(item, props.itemsGroupKey) === selectedGroup.value?.id
    const isNotSelected = !selectedItems.value.some(selectedOption => selectedOption.id === item.id)
    const matchesSearch = searchQuery.value === '' ||
      item[props.groupItemsLabel]?.toLowerCase().includes(searchQuery.value.toLowerCase())
    return isInSelectedGroup && isNotSelected && matchesSearch
  })
})

const filteredSelectedItems = computed(() => {
  if (!selectedItems.value) {
    return []
  }
  return selectedItems.value.filter(option => {
    return get(option, props.itemsGroupKey) === selectedGroup.value?.id
  })
})

function handleSelectItem(option) {
  selectedItems.value.push(option)
}

function getNumberOfSelectedItemsByGroup(group) {
  if (!selectedItems.value) {
    return 0
  }
  return selectedItems.value.filter(item => get(item, props.itemsGroupKey) === group.id).length
}

</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.list-move {
  transition: transform 0.3s ease;
}

</style>