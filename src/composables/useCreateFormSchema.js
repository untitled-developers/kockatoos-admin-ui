export default function useCreateFormSchema({props}) {
    function createFormSchema(baseSchema, config = {
        languages: [],
        languageSchema: {}
    }) {
        let newSchema = baseSchema
        if (baseSchema.shape['password']) {
            if (props.record) {
                newSchema = newSchema.omit({password: true})
            }
        }
        if (config.languages.length > 0) {
            config.languages.forEach(language => {
                if (!newSchema.shape[language]) {
                    newSchema = newSchema.extend({
                        [language]: config.languageSchema
                    })
                }
            })
        }
        return newSchema
    }

    return {
        createFormSchema
    }
}