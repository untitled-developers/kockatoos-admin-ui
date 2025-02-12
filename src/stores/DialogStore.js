import {markRaw, ref} from 'vue'
import {defineStore} from 'pinia'


export const useDialogStore = defineStore('dialog', () => {
    const dialogsList = ref([])

    function generateRandomId() {
        return Math.random()
    }

    function openDialog(component, config = {props: {}, handlers: {}}) {
        const newDialogId = generateRandomId()
        const newDialog = {
            component: markRaw(component),
            props: {},
            id: newDialogId,
            handlers: {
                close: () => {
                    const newDialogIndex = getDialogIndexById(newDialogId)
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
        return newDialogId
    }

    function closeDialog(dialogId) {
        const newDialogIndex = getDialogIndexById(dialogId)
        dialogsList.value.splice(newDialogIndex, 1)
    }

    function getDialogIndexById(id) {
        const dialogIndex = dialogsList.value.findIndex((dialog) => dialog.id === id)
        if (dialogIndex === -1) {
            throw new Error(
                `Get Dialog Index By Id: Dialog Not Found, make sure that your dialog is opened before calling this method.`
            )
        }
        return dialogIndex
    }

    function updateDialogProps(dialogId, handler) {
        const dialogIndex = getDialogIndexById(dialogId)
        dialogsList.value[dialogIndex].props = handler(dialogsList.value[dialogIndex].props)
    }

    function refreshDialog(dialogId) {
        const dialogIndex = getDialogIndexById(dialogId)
        dialogsList.value[dialogIndex].key = generateRandomId()

    }

    return {dialogsList, openDialog, closeDialog, updateDialogProps, refreshDialog}
})
