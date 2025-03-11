export default function useCrudTable(crudTableRef) {
    async function fetchTableData(withLoading = true) {
        verifyCrudTableRef()
        if (withLoading) {
            await crudTableRef.value.fetchData()
        } else {
            await crudTableRef.value.silentFetchData()
        }
    }

    function startRowLoading(record) {
        verifyCrudTableRef()
        crudTableRef.value.startRowLoading(record)
    }

    function stopRowLoading(record) {
        verifyCrudTableRef()
        crudTableRef.value.stopRowLoading(record)
    }

    function verifyCrudTableRef() {
        if (!crudTableRef) {
            throw new Error('Make sure to pass the ref of the crud table')
        }
    }

    /**
     *  Update the record data in the tableData
     * @param record
     * @param newRecordData - The new data to update the record with
     * @returns {void}
     */
    function updateRecordData(record, newRecordData) {
        verifyCrudTableRef()
        crudTableRef.value.updateRecordData(record, newRecordData)
    }

    return {
        fetchTableData,
        startRowLoading,
        stopRowLoading,
        updateRecordData
    }

}