import {useLoaderStore} from "../stores/LoaderStore";

export default function useGlobalLoader() {
    const loaderStore = useLoaderStore()

    function startLoader(customMessage) {
        loaderStore.startLoader(customMessage)
    }

    function stopLoader() {
        loaderStore.stopLoader()
    }

    return {
        startLoader,
        stopLoader
    }
}