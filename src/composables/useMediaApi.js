import useCrudApi from './useCrudApi.js'

export default function useMediaApi(endpoint = 'api/blobs') {
    const { get, update } = useCrudApi(endpoint)
    return { get, update }
}