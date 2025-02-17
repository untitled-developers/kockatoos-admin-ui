export default function useValidateData() {

    /**
     * Validate data against schema. Uses zod's safeParse method to validate data.
     * https://zod.dev/?id=basic-usage
     * @param schema
     * @param data
     */
    function validateData(schema, data) {
        if (!schema) {
            throw new Error('Call to validateData must include a schema')
        }
        if (!data) {
            throw new Error('Call to validateData must include data to validate')
        }
        const result = schema.safeParse(data)
        if (result.success) {
            return {
                success: true
            }
        }
        return schema.safeParse(data).error.format()
    }


    return {
        validateData
    }
}
