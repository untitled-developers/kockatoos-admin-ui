import useAlerts from "./useAlerts.js";

export default function useFreezeRay() {
    const overlayId = 'transparent-overlay';
    const {alertInfo} = useAlerts();
    // Added this flag because on first click the user click event is triggered which is causing the alert to immediately display
    let ignoreFirstClick = true;

    function freezeApp() {
        if (document.getElementById(overlayId)) return;

        const overlay = document.createElement('div');
        overlay.id = overlayId;
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'transparent';
        overlay.style.zIndex = '9999';

        document.body.appendChild(overlay);

        // Disable keyboard interactions
        document.addEventListener('keydown', preventKeydown);
        // Add event listeners for user interactions
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);

        // Reset the flag after a short delay
        setTimeout(() => {
            ignoreFirstClick = false;
        }, 100);
    }

    function unfreezeApp() {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            document.body.removeChild(overlay);
        }

        // Re-enable keyboard interactions
        document.removeEventListener('keydown', preventKeydown);
        // Remove event listeners for user interactions
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);

        // Reset the flag
        ignoreFirstClick = true;
    }

    function preventKeydown(event) {
        event.preventDefault();
    }

    function handleUserInteraction(event) {
        if (ignoreFirstClick) {
            ignoreFirstClick = false;
            return;
        }
        alertInfo('Please wait while we process your request...');
    }

    return {
        freezeApp,
        unfreezeApp
    };
}