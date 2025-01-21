import {markRaw, ref} from 'vue'
import {defineStore} from 'pinia'


export const useDialogStore = defineStore('dialog', () => {
    const dialogsList = ref([])

    function openDialog(component, config = {props: {}, handlers: {}}) {
        const newDialog = {
            component: markRaw(component),
            props: {},
            handlers: {
                close: () => {
                    const newDialogIndex = dialogsList.value.findIndex(
                        (dialog) => dialog.component === component
                    )
                    if (newDialogIndex === -1) {
                        throw new Error(
                            `Close Dialog Event Handler: Dialog  Not Found, make sure that your dialog is opened before calling this method.`
                        )
                    }
                    dialogsList.value.splice(newDialogIndex, 1)
                }
            }
        }
        if (config?.props) {
            newDialog.props = config.props
        }
        if (config.handlers) {
            newDialog.handlers = {...newDialog.handlers, ...config.handlers}
        }
        dialogsList.value.push(newDialog)
    }

    function closeDialog(component) {
        const newDialogIndex = dialogsList.value.findIndex((dialog) => dialog.component === component)
        if (newDialogIndex === -1) {
            throw new Error(
                `Close Dialog Event Handler: Dialog Not Found, make sure that your dialog is opened before calling this method.`
            )
        }
        dialogsList.value.splice(newDialogIndex, 1)
    }

    function updateDialogProps(component, handler) {
        const dialogIndex = dialogsList.value.findIndex((dialog) => dialog.component === component)
        if (dialogIndex === -1) {
            throw new Error(
                `Update Dialog Prop: Dialog Not Found, make sure that your dialog is opened before calling this method.`
            )
        }
        dialogsList.value[dialogIndex].props = handler(dialogsList.value[dialogIndex].props)
    }

    return {dialogsList, openDialog, closeDialog, updateDialogProps}
})
