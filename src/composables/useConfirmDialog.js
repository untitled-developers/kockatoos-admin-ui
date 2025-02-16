import {useConfirm} from "primevue/useconfirm";

export default function useConfirmDialog() {
    const confirm = useConfirm();

    function confirmDialog(config) {
        if (!["danger", "success", "warning", "info"].includes(config.type)) {
            throw new Error(
                'Invalid confirm dialog type. Must be one of "danger", "success", "warning", "info"'
            );
        }

        confirm.require({
            group: "headless",
            type: config.type,
            message: config.message,
            header: config.header,
            accept: config.onAccept,
            reject: config.onReject,
            icon: config.icon,
            acceptButtonSeverity: config.acceptButtonSeverity,
            rejectButtonSeverity: config.rejectButtonSeverity,
            rejectLabel: config.rejectLabel,
            acceptLabel: config.acceptLabel,
        });
    }


    function confirmSuccess({onAccept, onReject, header, message}) {
        confirmDialog({
            message: message ?? "<p>Your action was successfully completed?</p>",
            header: header ?? "Success",
            icon: "pi pi-check-circle",
            type: "success",
            onAccept,
            onReject,
            acceptButtonSeverity: "success",
            rejectButtonSeverity: "secondary",
            rejectLabel: "Cancel",
            acceptLabel: "Confirm",
        });
    }

    function confirmDanger({onAccept, onReject, header, message}) {
        confirmDialog({
            message: message ?? "<p>Are you sure you want to do this action?</p>",
            header: header ?? "Warning",
            icon: "pi pi-exclamation-triangle",
            type: "danger",
            onAccept,
            onReject,
            acceptButtonSeverity: "danger",
            rejectButtonSeverity: "secondary",
            rejectLabel: "Cancel",
            acceptLabel: "Confirm",
        });
    }

    function confirmWarning({onAccept, onReject, header, message}) {
        confirmDialog({
            message: message ?? "<p>Are you sure you want to do this action?</p>",
            header: header ?? "Warning",
            icon: "pi pi-exclamation-triangle",
            type: "warning",
            onAccept,
            onReject,
            acceptButtonSeverity: "warn",
            rejectButtonSeverity: "secondary",
            rejectLabel: "Cancel",
            acceptLabel: "Confirm",
        });
    }

    function confirmInfo({onAccept, onReject, header, message}) {
        confirmDialog({
            message: message ?? "<p>Are you sure you want to do this action?</p>",
            header: header ?? "Warning",
            icon: "pi pi-exclamation-triangle",
            type: "info",
            onAccept,
            onReject,
            acceptButtonSeverity: "info",
            rejectButtonSeverity: "secondary",
            rejectLabel: "Cancel",
            acceptLabel: "Confirm",
        });
    }

    return {
        confirmDanger,
        confirmSuccess,
        confirmWarning,
        confirmInfo,
    };
}
