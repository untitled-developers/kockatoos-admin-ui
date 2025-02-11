<template>
  <Toolbar :pt="{
  root: {
    style: {
      borderRadius: 0
    }
  }
}">
    <template #start>
      <Button icon="pi pi-plus" label="New" @click="handleAddNewButton"></Button>
      <slot name="actions-start"></slot>
    </template>
    <template #end>
      <slot name="actions-end"></slot>
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
      <!--      <div class="flex flex-wrap items-center" v-if="filters?.length">-->
      <!--        <Button label="Clear Filters" @click="handleClearFilters" icon="pi pi-filter-slash"-->
      <!--                severity="secondary"></Button>-->
      <!--        <FloatLabel v-for="filter in filters" :key="filter.field" variant="on" class="mx-2 my-2">-->
      <!--          <InputText-->
      <!--              v-if="filter.type === 'text'"-->
      <!--              :id="filter.field"-->
      <!--              v-model="filter.value"-->
      <!--              autocomplete="off"-->
      <!--              @change="handleFilterChange"-->
      <!--          />-->
      <!--          <Select-->
      <!--              v-else-if="filter.type === 'dropdown'"-->
      <!--              :id="filter.field"-->
      <!--              v-model="filter.value"-->
      <!--              :options="filter.options"-->
      <!--              @change="handleFilterChange"-->
      <!--              show-clear-->
      <!--              optionLabel="label"-->
      <!--              optionValue="value"-->
      <!--          />-->
      <!--          <MultiSelect-->
      <!--              v-else-if="filter.type === 'multiselect'"-->
      <!--              :id="filter.field"-->
      <!--              v-model="filter.value"-->
      <!--              :options="filter.options"-->
      <!--              @change="handleFilterChange"-->
      <!--              optionLabel="label"-->
      <!--              show-clear-->
      <!--              optionValue="value"-->
      <!--              display="chip"-->
      <!--          />-->
      <!--          <DatePicker-->
      <!--              v-else-if="filter.type === 'date'"-->
      <!--              :id="filter.field"-->
      <!--              v-model="filter.value"-->
      <!--              @update:modelValue="handleFilterChange"-->
      <!--              dateFormat="dd/mm/yy"-->
      <!--          />-->
      <!--          <label :for="filter.field">{{ filter.label }}</label>-->
      <!--        </FloatLabel>-->
      <!--      </div>-->
    </template>
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
    <Column v-if="withSelection" selectionMode="multiple" headerStyle="width: 3rem"/>
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
import useAlerts from "../composables/useAlerts.js";

const props = defineProps({
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
const emits = defineEmits(['row-click'])

const {
  openDialog
} = useDialog()

const fetch = useFetch()
const isTableLoading = ref(false)
const tableData = ref([])
const paginationQuery = ref({
  rows: 5,
  totalRecords: 0,
  page: 0
})

const {
  alertError
} = useAlerts()

const sortingQuery = ref([props.defaultSort])

const recordActionsPopover = ref()

function toggleActionsDropdown(event) {
  recordActionsPopover.value.toggle(event)
}

function handleFilterChange() {
  fetchData()
}

function handleAddNewButton() {
  openDialog(props.addDialog, {
    handlers: {
      'submit': () => {
        fetchData()
      }
    }
  })
}

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
  return sortingQuery.value.reduce((acc, sort, index) => {
    const direction = sort.order === 1 ? 'asc' : 'desc'
    return {
      ...acc,
      [`orderByFields[${index}][field]`]: sort.field,
      [`orderByFields[${index}][direction]`]: direction
    }
  }, {})
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

async function getData() {
  try {
    const fetchResponse = await fetch.get(props.endpoint, {
      params: {
        page: paginationQuery.value.page,
        perPage: paginationQuery.value.rows,
        ...mapSortToQueryParams(),
        // ...filters.value?.length && createFilterQuery(filters.value)
      }
    })
    tableData.value = fetchResponse.data.data
    paginationQuery.value.totalRecords = fetchResponse.data.total

  } catch (error) {
    console.log(error)
    alertError('Error Fetching Data')
  }
}

/**
 * Fetch data with showing the loading spinner
 * @returns {Promise<void>}
 */
async function fetchData() {
  isTableLoading.value = true
  await getData()
  isTableLoading.value = false
}

/**
 * Fetch data without showing the loading spinner
 * @returns {Promise<void>}
 */
async function silentFetchData() {
  await getData()
}

defineExpose({
  fetchData,
  silentFetchData
})

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>