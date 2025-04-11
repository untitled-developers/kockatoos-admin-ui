import * as zod from 'zod'

export default function useCreateFormSchema({props}) {
    function createFormSchema(baseSchema, config = {
        languages: [],
        languageSchema: {}
    }) {
        let newSchema = baseSchema

        // Handle password omission for existing records
        if (baseSchema.shape['password'] && props.record) {
            newSchema = newSchema.omit({password: true})
        }

        // Handle languages
        if (config.languages.length > 0) {
            let languageSchemaObject = zod.object({})
            config.languages.forEach(language => {
                languageSchemaObject = languageSchemaObject.extend({
                    [language]: config.languageSchema
                })
            })
            console.log('languageSchemaObject', languageSchemaObject.shape)
            newSchema = newSchema.extend({
                languages: languageSchemaObject
            })

        }

        return newSchema
    }

    return {
        createFormSchema
    }
}