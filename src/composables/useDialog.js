
import {useDialogStore} from '../stores/DialogStore'


export default function useDialog() {
    const dialogStore = useDialogStore()

    function openDialog(component, config = {}) {
        dialogStore.openDialog(component, {
            props: config.props || {},
            handlers: config.handlers || {}
        })
    }

    function closeDialog(component) {
        dialogStore.closeDialog(component)
    }

    return {
        openDialog,
        closeDialog
    }
}