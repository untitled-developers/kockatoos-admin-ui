import useCrudApi from "./useCrudApi.js";
import useUtils from "./useUtils.js";
import useFreezeRay from "./useFreezeRay.js";
import * as zod from "zod";
import {ref} from "vue";
import useFetch from "./useFetch.js";
import useAlerts from "./useAlerts.js";

export default function useEditDialog({props, emit} = {}, modelName, endpoint) {
    const {cloneDeep} = useUtils()
    const {freezeApp, unfreezeApp} = useFreezeRay()
    const {alertError} = useAlerts()
    const fetch = useFetch()
    const loading = ref({
        active: false,
        message: '',
        height: '',
        mode: '',
        freezeApp: false
    })
    const {
        create,
        update
    } = useCrudApi(endpoint)

    function handleNextRecord() {
        if (!props.record) {
            return
        }
        emit('next-record', props.record)
    }

    function handlePreviousRecord() {
        if (!props.record) {
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
            return await update(props.record.id, formData)
        }
        return await create(formData)
    }

    function createFormPayload(data = {}, files = {}, fields = {}) {
        const formData = new FormData()

        if (Object.keys(data).length > 0) {
            formData.append('data', JSON.stringify(data))
        }

        Object.entries(files).forEach(([key, file]) => {
            if (file) {
                const fileToUpload = file.file || file
                formData.append(key, fileToUpload)
            }
        })

        Object.entries(fields).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                formData.append(key, value)
            }
        })

        return formData
    }

    function populateForm(formRef, record) {
        if (!formRef?.value || !record) {
            return
        }

        const filteredData = {}
        Object.keys(formRef.value).forEach(key => {
            if (key in record) {
                switch (true) {
                    case record[key] === null:
                        filteredData[key] = null;
                        break;

                    case Array.isArray(record[key]):
                        filteredData[key] = cloneDeep(record[key]);
                        break;

                    case typeof record[key] === 'object':
                        filteredData[key] = cloneDeep(record[key]);
                        break;

                    case typeof record[key] === 'string':
                    case typeof record[key] === 'number':
                    case typeof record[key] === 'boolean':
                    case typeof record[key] === 'undefined':
                        filteredData[key] = record[key];
                        break;

                    default:
                        console.warn(`Unexpected type for key "${key}": ${typeof record[key]}`);
                        break;
                }
            }
        })

        if (record?.id) {
            filteredData.id = record.id
        }

        Object.assign(formRef.value, filteredData)
    }

    function freezeDialog() {
        freezeApp()
    }

    function unfreezeDialog() {
        unfreezeApp()
    }

    async function fetchLanguages(apiEndpoint = 'api/languages') {
        try {
            const response = await fetch.get(apiEndpoint);
            return response.data;
        } catch (error) {
            console.error('Error fetching languages:', error);
            alertError('Error fetching languages');
        }
    }

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

    /**
     * Start loading with predefined templates and customizable options
     * @param {Object} options - Loading options
     * @param {string} [options.template='default'] - Template type: 'blocking', or 'overlay'
     * @param {string} [options.message] - Custom loading message
     * @param {string} [options.height] - Custom height (only relevant for overlay template)
     * @param {Object} [options.customOptions] - Any additional loading options to override defaults
     */
    function startDialogLoading(options = {}) {
        const {
            template = 'blocking',
            message,
            height,
            customOptions = {}
        } = options;

        const templates = {
            // For blocking operations (form submissions, API calls, etc.)
            blocking: {
                active: true,
                message: message ?? 'Processing request',
                height: 'auto',
                mode: 'overlay',
                freezeApp: true
            },
            // For content loading within a dialog
            embedded: {
                active: true,
                message: message ?? 'Loading content',
                height: height ?? '500px',
                mode: 'replace',
                freezeApp: false
            }
        };
        const baseConfig = templates[template]
        loading.value = {
            ...baseConfig,
            ...customOptions
        };
    }

    function stopDialogLoading() {
        loading.value.active = false
        loading.value.freezeApp = false
    }

    return {
        handleNextRecord,
        handlePreviousRecord,
        closeDialog,
        createFormSchema,
        freezeDialog,
        unfreezeDialog,
        createFormPayload,
        isEditingRecord,
        getDialogHeader,
        submitData,
        populateForm,
        startDialogLoading,
        stopDialogLoading,
        loading,
    }

}