export default function useValidateData() {

    function createErrorStructure(dataObj) {
        if (typeof dataObj !== 'object' || dataObj === null) {
            return {_errors: []}
        }

        return Object.entries(dataObj).reduce((acc, [key, value]) => {
            acc[key] = typeof value === 'object' && value !== null
                ? {_errors: [], ...createErrorStructure(value)}
                : {_errors: []}
            return acc
        }, {_errors: []})
    }

    function mergeErrors(baseStructure, errorFormat) {
        if (!errorFormat || typeof errorFormat !== 'object') {
            return baseStructure
        }

        const merged = {...baseStructure}

        for (const [key, value] of Object.entries(errorFormat)) {
            if (key === '_errors') {
                merged._errors = value || []
            } else if (typeof value === 'object' && value !== null) {
                merged[key] = mergeErrors(baseStructure[key] || {_errors: []}, value)
            }
        }
        return merged
    }

    /**
     * Validate data against schema. Uses zod's safeParse method to validate data.
     * https://zod.dev/?id=basic-usage
     * @param schema
     * @param data
     */
    function validateData(schema, data) {
        const result = schema.safeParse(data)
        const baseErrorState = createErrorStructure(data)
        if (result.success) {
            return baseErrorState
        } else {
            return mergeErrors(baseErrorState, result.error.format())
        }
    }

    return {
        validateData
    }
}
