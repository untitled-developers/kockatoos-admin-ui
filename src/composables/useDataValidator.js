
import {computed} from "vue";

export default function useDataValidator(schema, data) {
    const errors = computed(() => {
        return validateData(schema, data.value)
    })
    const isDataValid = computed(() => {
        return Object.keys(errors.value).length === 0
    })


    function validateData(schema, data){
        const result = schema.safeParse(data);
        if (result.success) {
            return {}
        } else {
            return result.error.format()
        }
    }

    return {
        errors,
        isDataValid,
        validateData
    }
}