import useValidateData from "./useValidateData.js";
import {computed} from "vue";
import useUtils from "./useUtils.js";


export default function useForm(formRef, formSchema) {
    const {validateData} = useValidateData()
    const {get} = useUtils()

    if (!formRef) {
        throw new Error('useForm requires a formRef')
    }
    if (!formSchema) {
        throw new Error('useForm requires a formSchema')
    }

    const errors = computed(() => {
        return validateData(formSchema, formRef.value)
    })

    function getErrors(path) {
        if (!errors.value || errors.value.success) {
            return []
        }

        // Handle nested paths
        const fieldErrors = get(errors.value, path)

        if (!fieldErrors) {
            return []
        }

        return fieldErrors._errors || []
    }

    function hasErrors() {
        return errors.value && !errors.value.success
    }

    return {
        errors,
        getErrors,
        hasErrors
    }
}