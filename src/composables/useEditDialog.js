import useCrudApi from "./useCrudApi.js";
import useUtils from "./useUtils.js";

export default function useEditDialog({props, emit}, modelName, endpoint) {
    const {cloneDeep} = useUtils()

    const {
        create,
        update
    } = useCrudApi(endpoint)

    function handleNextRecord() {
        if (props.record) {
            return
        }
        emit('next-record', props.record)
    }

    function handlePreviousRecord() {
        if (props.record) {
            return
        }
        emit('previous-record', props.record)
    }

    function closeDialog() {
        emit('close')
    }

    function isEditingRecord() {
        return !!props.record
    }

    function getDialogHeader() {
        if (!modelName) {
            throw new Error('getDialogHeader requires a modelName')
        }
        return isEditingRecord() ? `Edit ${modelName} #${props.record.id}` : `Create ${modelName}`
    }

    async function submitData(formData) {
        if (isEditingRecord()) {
            return await update(formData)
        }
        return await create(formData)
    }

    function populateForm(formRef, record) {
        if (!formRef?.value || !record) {
            return
        }

        const filteredData = {}
        Object.keys(formRef.value).forEach(key => {
            if (key in record) {
                filteredData[key] = cloneDeep(record[key])
            }
        })

        if (record?.id) {
            filteredData.id = record.id
        }

        Object.assign(formRef.value, filteredData)
    }


    return {
        handleNextRecord,
        handlePreviousRecord,
        closeDialog,
        isEditingRecord,
        getDialogHeader,
        submitData,
        populateForm
    }

}