<template>
  <Toolbar :pt="{
  root: {
    style: {
      borderRadius: 0
    }
  }
}">
    <template #start>
      <h1 class="text-xl text-cyan-800 dark:text-cyan-300 font-medium py:4">
        {{ props.title }}
      </h1>
    </template>
    <template #end>
      <slot name="actions"></slot>
      <Button icon="pi pi-plus" label="New" @click="handleAddNewButton"></Button>
    </template>
  </Toolbar>
  <Toolbar :pt="{
      root: {
         style: {
            borderRadius: 0,
            paddingTop: '15px',
            paddingBottom: '15px'
    }
  }
    }">
    <template #start>
      <Button
          label="Reset Sort"
          @click="handleResetSort"
          icon="pi pi-sort-alt-slash"
          severity="secondary"
          class="mr-2">
      </Button>
      <slot name="filters-start"></slot>
      <div class="flex flex-wrap items-center" v-if="filters?.length">
        <Button label="Clear Filters" @click="handleClearFilters" icon="pi pi-filter-slash"
                severity="secondary"></Button>
        <FloatLabel v-for="filter in filters" :key="filter.field" variant="on" class="mx-2 my-2">
          <InputText
              v-if="filter.type === 'text'"
              :id="filter.field"
              v-model="filter.value as string | null"
              autocomplete="off"
              @change="handleFilterChange"
          />

          <Select
              v-else-if="filter.type === 'dropdown'"
              :id="filter.field"
              v-model="filter.value"
              :options="filter.options"
              @change="handleFilterChange"
              show-clear
              optionLabel="label"
              optionValue="value"
          />

          <MultiSelect
              v-else-if="filter.type === 'multiselect'"
              :id="filter.field"
              v-model="filter.value"
              :options="filter.options"
              @change="handleFilterChange"
              optionLabel="label"
              show-clear
              optionValue="value"
              display="chip"
          />
          <DatePicker
              v-else-if="filter.type === 'date'"
              :id="filter.field"
              v-model="filter.value as Date | Date[] | (Date | null)[] | null | undefined"
              @update:modelValue="handleFilterChange"
              dateFormat="dd/mm/yy"
          />

          <label :for="filter.field">{{ filter.label }}</label>
        </FloatLabel>

      </div>
      <slot name="filters-end"></slot>
      <slot name="controls-start"></slot>
    </template>
    Date | Date[] | (Date | null)[] | null | undefined
    <template #center>
      <slot name="controls-center"></slot>
    </template>
    <template #end>
      <slot name="controls-end"></slot>
    </template>
  </Toolbar>
  <DataTable size="large"
             scrollable
             :show-gridlines="false"
             filter-display="menu"
             paginator
             sort-mode="multiple"
             lazy
             @sort="handleSortChange"
             :selection-mode="withSelection ? 'multiple' : undefined"
             v-model:selection="selectedRecords"
             removable-sort
             paginator-position="bottom"
             :rows="paginationQuery.rows"
             :totalRecords="paginationQuery.totalRecords"
             @page="handlePageChange"
             :multi-sort-meta="sortingQuery"
             resizable-columns
             column-resize-mode="fit"
             :rows-per-page-options="[5, 20, 50, 100]"
             :loading="isTableLoading"
             :value="tableData">
    <Column v-if="withSelection" selectionMode="multiple" headerStyle="width: 3rem">
    </Column>
    <Column header=""
            aria-label="Actions"
            class="w-12"
            v-if="withRecordActions">
      <template #body="slotProps">
        <BaseCrudTableActionsDropdown>
          <slot name="record-actions" :record="slotProps.data"></slot>
        </BaseCrudTableActionsDropdown>
      </template>
    </Column>
    <slot name="columns"></slot>
  </DataTable>
</template>

<script setup>
import {
  DataTable,
  DatePicker,
  Column,
  FloatLabel,
  InputText,
  MultiSelect,
  Select,
  Toolbar
} from "primevue";
import Button from "primevue/button";
import {onMounted, ref} from "vue";
import useFetch from "../composables/useFetch.js";
import useDialog from "../composables/useDialog.js";
import BaseCrudTableActionsDropdown from "./BaseCrudTableActionsDropdown.vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  endpoint: {
    type: String,
    required: true
  },
  addDialog: {
    type: Object,
    required: true
  },
  defaultSort: {
    type: Object,
    required: false,
    default: () => ({
      field: 'id',
      order: -1 // -1 for DESC, 1 for ASC
    })
  },
  withSelection: {
    type: Boolean,
    required: false,
    default: false
  },
  withRecordActions: {
    type: Boolean,
    required: false,
    default: false
  }
})
const filters = defineModel('filters')
const selectedRecords = defineModel('selectedRecord')
const {
  openDialog
} = useDialog()
const emits = defineEmits(['row-click'])
defineExpose({
  fetchData
})
const fetch = useFetch()
const isTableLoading = ref(false)
const tableData = ref([])
const paginationQuery = ref({
  rows: 5,
  totalRecords: 0,
  page: 0
})

function handleAddNewButton() {
  openDialog(props.addDialog, {
    handlers: {
      'submit': () => {
        fetchData()
      }
    }
  })
}

function handleFilterChange() {
  fetchData()
}

const recordActionsPopover = ref()

function toggleActionsDropdown(event) {
  recordActionsPopover.value.toggle(event)
}

const sortingQuery = ref([props.defaultSort])

function handleSortChange(event) {
  if (event.multiSortMeta) {
    sortingQuery.value = event.multiSortMeta.filter(
        sort => !(sort.field === props.defaultSort.field && sort.order === props.defaultSort.order)
    )
    if (sortingQuery.value.length === 0) {
      sortingQuery.value = event.multiSortMeta
    }
    fetchData()
  }
}

function handleClearFilters() {
  if (filters.value) {
    filters.value.forEach(filter => {
      filter.value = null
    })
    fetchData()
  }
}

function handleResetSort() {
  sortingQuery.value = [props.defaultSort]
  fetchData()
}

function mapSortToQueryParams() {
  return sortingQuery.value.map(sort => {
    const direction = sort.order === 1 ? 'asc' : 'desc'
    return {
      sortBy: sort.field,
      sortAs: direction
    }
  })
}

function handlePageChange(event) {
  paginationQuery.value = {
    rows: event.rows,
    totalRecords: paginationQuery.value.totalRecords,
    page: event.page + 1
  }
  fetchData()
}

function createFilterQuery(filters) {
  const queryParams = {}

  filters
      .filter(filter => filter.value !== null && filter.value !== undefined)
      .forEach(filter => {
        let formattedValue = filter.value
        if (filter.type === 'date' && filter.value instanceof Date) {
          formattedValue = filter.value.toISOString()
        } else if (filter.type === 'multiselect' && Array.isArray(filter.value)) {
          formattedValue = filter.value.join(',')
        }
        queryParams[`filter.${filter.field}`] = `${filter.operator}:${formattedValue}`
      })

  return queryParams
}


async function fetchData() {
  try {
    isTableLoading.value = true
    const fetchResponse = await fetch.get(props.endpoint, {
      params: {
        page: paginationQuery.value.page,
        perPage: paginationQuery.value.rows,
        sortBy: mapSortToQueryParams(),
        // ...filters.value?.length && createFilterQuery(filters.value)
      }
    })
    tableData.value = fetchResponse.data.data
    paginationQuery.value.totalRecords = fetchResponse.data.total

  } catch (error) {
    console.log(error)
  } finally {
    isTableLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>