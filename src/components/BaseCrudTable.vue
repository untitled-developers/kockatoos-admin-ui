<template>
  <!--  <Toolbar :pt="{-->
  <!--  root: {-->
  <!--    style: {-->
  <!--      borderRadius: 0-->
  <!--    }-->
  <!--  }-->
  <!--}">-->
  <!--    <template #start>-->
  <!--      <Button icon="pi pi-plus" label="New" @click="handleAddNewButton"></Button>-->
  <!--      <slot name="actions-start"></slot>-->
  <!--    </template>-->
  <!--    <template #end>-->
  <!--      <slot name="actions-end"></slot>-->
  <!--    </template>-->
  <!--  </Toolbar>-->
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
      <Button v-if="withAdd" icon="pi pi-plus" label="New" @click="handleAddNewButton"></Button>
      <slot name="controls-start"></slot>
      <!--      <Button-->
      <!--          label="Reset Sort"-->
      <!--          @click="handleResetSort"-->
      <!--          icon="pi pi-sort-alt-slash"-->
      <!--          severity="secondary"-->
      <!--          class="mr-2">-->
      <!--      </Button>-->
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
      <IconField>
        <InputIcon class="pi pi-search"/>
        <InputText @change="handleSearchQueryChange"
                   v-model="searchQuery"
                   placeholder="Search"/>
      </IconField>
    </template>
  </Toolbar>
  <DataTable class="border border-gray-300 bg-white"
             scrollable
             :show-gridlines="false"
             filter-display="menu"
             paginator
             sort-mode="multiple"
             :row-class="rowClassHandler"
             lazy
             data-key="id"
             striped-rows
             @sort="handleSortChange"
             :selection-mode="withSelection ? 'multiple' : undefined"
             v-model:selection="selectedRecords"
             paginator-position="bottom"
             :rows="paginationQuery.rows"
             :totalRecords="paginationQuery.totalRecords"
             @page="handlePageChange"
             :multi-sort-meta="sortingQuery"
             resizable-columns
             column-resize-mode="fit"
             :rows-per-page-options="[10,  50, 100, 500]"
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

          <BaseCrudTableActionsButton v-if="withEdit"
                                      @click="handleEditButtonClick(slotProps.data)"
                                      severity="info"
                                      :text="editButtonConfig?.label ?? 'Edit'"/>
          <BaseCrudTableActionsButton v-if="withDelete"
                                      @click="handleDeleteButtonClick(slotProps.data)"
                                      severity="danger"
                                      text="Delete"/>

        </BaseCrudTableActionsDropdown>
      </template>
    </Column>
    <slot name="columns"></slot>
  </DataTable>
</template>

<script setup>
import {
  DataTable,
  Column,
  InputText,
  IconField,
  InputIcon,
  Toolbar
} from "primevue";
import Button from "primevue/button";
import {onMounted, ref} from "vue";
import useFetch from "../composables/useFetch.js";
import useDialog from "../composables/useDialog.js";
import BaseCrudTableActionsDropdown from "./BaseCrudTableActionsDropdown.vue";
import useAlerts from "../composables/useAlerts.js";
import useConfirmDialog from "../composables/useConfirmDialog.js";
import BaseCrudTableActionsButton from "./BaseCrudTableActionsButton.vue";


const props = defineProps({
  endpoint: {
    type: String,
    required: true
  },
  defaultQuery: {
    type: Object
  },
  editDialog: {
    type: Object
  },
  /**
   * Use this if you want to supply props to the edit dialog other than record.
   * **/
  editDialogProps: {
    type: Object,
    default: {}
  },
  editDialogHandlers: {
    type: Object,
    default: {}
  },
  withAdd: {
    type: Boolean,
    default: true
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
    default: true
  },
  withEdit: {
    type: Boolean,
    default: true
  },
  dialogCloseOnEdit: {
    type: Boolean,
    default: false
  },
  withDelete: {
    type: Boolean,
    default: true
  },
  rowIdentifier: {
    type: String,
    default: 'id'
  },
  //Added to accommodate for pawcuddlz as the sorting queries are different
  customSortMapper: {
    type: Function
  },
  editButtonConfig: {
    type: Object,
    default: {}
  },
})
const filters = defineModel('filters')
const selectedRecords = defineModel('selectedRecord')
const emits = defineEmits(['row-click'])

const {
  openDialog,
  closeDialog,
  updateDialogProps,
  refreshDialog
} = useDialog()

const {
  confirmDanger
} = useConfirmDialog()
const fetch = useFetch()
const isTableLoading = ref(false)
const tableData = ref([])
const paginationQuery = ref({
  rows: 10,
  totalRecords: 0,
  page: 0
})

const {
  alertError,
  alertSuccess
} = useAlerts()

const sortingQuery = ref([props.defaultSort])
const loadingRows = ref([])

const searchQuery = ref('')

function handleFilterChange() {
  fetchData()
}

const editDialogId = ref(null)

function handleAddNewButton() {
  openEditDialog()
}

function handleEditButtonClick(record) {
  openEditDialog(record)
}

function handleDeleteButtonClick(record) {
  confirmDanger({
    header: `Delete Record?`,
    message: `Are you sure you want to delete this record?`,
    onAccept: () => {
      deleteRecord(record)
    }
  })
}

async function deleteRecord(record) {
  try {
    startTableLoading()
    await fetch.delete(`${props.endpoint}/${record.id}`)
    alertSuccess('Record Deleted Successfully')
    await fetchData()
  } catch (error) {
    console.log(error)
    alertError('Error Deleting Record')
  } finally {
    stopTableLoading()
  }
}

function openEditDialog(record) {
  const dialogProps = {
    record: record ?? null
  }
  if (props.editDialogProps) {
    Object.keys(props.editDialogProps).forEach(key => {
      dialogProps[key] = props.editDialogProps[key]
    })
  }
  editDialogId.value = openDialog(props.editDialog, {
    handlers: {
      'submit': async () => {
        if (record) {
          alertSuccess('Record Updated Successfully')
        } else {
          alertSuccess('Record Created Successfully')
        }
        await fetchData()
        if (dialogProps.record && !props.dialogCloseOnEdit) {
          updateDialogProps(editDialogId.value, (oldProps) => {
            return {
              ...oldProps,
              'record': tableData.value.find(row => row.id === oldProps.record.id)
            }
          })
          refreshDialog(editDialogId.value)
        }
      },
      'next-record': (currentRecord) => {
        const currentRecordIndex = tableData.value.findIndex(row => row.id === currentRecord.id)
        if (currentRecordIndex === -1) {
          return
        }
        const nextRecordIndex = currentRecordIndex + 1
        if (nextRecordIndex >= tableData.value.length) {
          closeDialog(editDialogId.value)
          return
        }
        const nextRecord = tableData.value[nextRecordIndex]
        updateDialogProps(editDialogId.value, (oldProps) => {
          return {
            ...oldProps,
            'record': nextRecord
          }
        })
        refreshDialog(editDialogId.value)

      },
      'previous-record': (currentRecord) => {
        const currentRecordIndex = tableData.value.findIndex(row => row.id === currentRecord.id)
        if (currentRecordIndex === -1) {
          return
        }
        const previousRecordIndex = currentRecordIndex - 1
        if (previousRecordIndex < 0) {
          closeDialog(editDialogId.value)
          return
        }
        const previousRecord = tableData.value[previousRecordIndex]
        updateDialogProps(editDialogId.value, (oldProps) => {
          return {
            ...oldProps,
            'record': previousRecord
          }
        })
        refreshDialog(editDialogId.value)

      },
      ...props.editDialogHandlers
    },
    props: dialogProps
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

  if (props.customSortMapper && typeof props.customSortMapper === 'function') {
    const customMapping = props.customSortMapper(sortingQuery.value)
    if (Object.keys(customMapping).length) {
      return customMapping
    }
  }

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

function rowClassHandler(rowData) {
  const filteredRow = loadingRows.value.find(row => row[props.rowIdentifier] === rowData[props.rowIdentifier])
  if (filteredRow) {
    return 'relative after:backdrop-blur-sm after:bg-white/10  after:content-[""] after:absolute after:w-full after:top-0 after:left-0 after:h-full after:z-10'
  }
}

function startRowLoading(record) {
  loadingRows.value.push(record)
}

function stopRowLoading(record) {
  loadingRows.value = loadingRows.value.filter(row => row[props.rowIdentifier] !== record[props.rowIdentifier])
}

function handleSearchQueryChange() {
  fetchData()
}

async function getData() {
  const defaultQuery = props.defaultQuery ? props.defaultQuery : {}
  try {
    const fetchResponse = await fetch.get(`${props.endpoint}/`, {
      params: {
        ...defaultQuery,
        page: paginationQuery.value.page,
        perPage: paginationQuery.value.rows,
        searchFor: searchQuery.value,
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

function startTableLoading() {
  isTableLoading.value = true
}

function stopTableLoading() {
  isTableLoading.value = false
}

/**
 * Fetch data without showing the loading spinner
 * @returns {Promise<void>}
 */
async function silentFetchData() {
  await getData()
}


/**
 *  Update the oldRecordData data in the tableData
 * @param oldRecordData
 * @param newRecordData - The new data to update the oldRecordData
 * @returns {void}
 */
function updateRecordData(oldRecordData, newRecordData) {
  const recordIndex = tableData.value.findIndex(record => record.id === oldRecordData.id)
  if (recordIndex !== -1) {
    tableData.value[recordIndex] = newRecordData
  }
}

defineExpose({
  fetchData,
  silentFetchData,
  startRowLoading,
  stopRowLoading,
  updateRecordData
})

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>