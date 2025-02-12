import {useDialogStore} from '../stores/DialogStore'


export default function useDialog() {
    const dialogStore = useDialogStore()

    function openDialog(component, config = {}) {
        return dialogStore.openDialog(component, {
            props: config.props || {},
            handlers: config.handlers || {}
        })
    }

    function closeDialog(dialogId) {
        dialogStore.closeDialog(dialogId)
    }

    function updateDialogProps(dialogId, handler) {
        dialogStore.updateDialogProps(dialogId, handler)
    }

    function refreshDialog(dialogId) {
        dialogStore.refreshDialog(dialogId)
    }

    return {
        openDialog,
        closeDialog,
        updateDialogProps,
        refreshDialog
    }
}