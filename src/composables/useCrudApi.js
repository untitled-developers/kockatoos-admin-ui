import useFetch from "./useFetch.js";

export default function useCrudApi(endpoint) {
    const fetch = useFetch()

    async function get(query) {
        return fetch.get(`${endpoint}`, {
            params: query
        });
    }

    async function create(data) {
        return fetch.post(`${endpoint}`, data);
    }

    async function destroy(id) {
        return fetch.delete(`${endpoint}/${id}`);
    }

    async function update(id, data) {
        return fetch.post(`${endpoint}/${id}`, data);
    }

    // Disk-only upload. `formData` is a multipart FormData (file + directory);
    // `config` is forwarded to axios so callers can pass `onUploadProgress`.
    async function upload(formData, config) {
        return fetch.post(`${endpoint}/upload`, formData, config);
    }

    return {
        get,
        create,
        destroy,
        update,
        upload
    }


}