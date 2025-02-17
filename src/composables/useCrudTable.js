export default function useCrudTable(crudTableRef) {
    async function fetchTableData(withLoading = true) {
        verifyCrudTableRef()
        if (withLoading) {
            await crudTableRef.value.fetchTableData()
        } else {
            await crudTableRef.value.silentFetchData()
        }
    }

    function starRowLoading(record) {
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

    return {
        fetchTableData,
        starRowLoading,
        stopRowLoading
    }

}