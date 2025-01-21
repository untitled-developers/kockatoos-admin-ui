import {useToast} from 'primevue/usetoast'

export default function useAlerts() {
    const toast = useToast()

    function fireAlert(Alert) {
        toast.add({
            severity: Alert.severity,
            summary: Alert.summary,
            detail: Alert.detail,
            life: Alert.life
        })
    }

    function alertSuccess(message) {
        fireAlert({
            severity: 'success',
            summary: 'Success',
            detail: message,
            life: 3000
        })
    }

    function alertWarning(message) {
        fireAlert({
            severity: 'warn',
            summary: 'Warning',
            detail: message,
            life: 3000
        })
    }

    function alertError(message) {
        fireAlert({
            severity: 'error',
            summary: 'Error',
            detail: message,
            life: 3000
        })
    }

    function alertInfo(message ) {
        fireAlert({
            severity: 'info',
            summary: 'Info',
            detail: message,
            life: 3000
        })
    }

    return {
        alertError,
        alertInfo,
        alertSuccess,
        alertWarning
    }
}
