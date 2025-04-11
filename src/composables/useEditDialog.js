export default function useEditDialog(dialogRef) {
    function startDialogLoading(options) {
        dialogRef.value.startDialogLoading(options)
    }

    function stopDialogLoading() {
        dialogRef.value.stopDialogLoading()
    }

    return {
        startDialogLoading,
        stopDialogLoading
    }
}