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

    return {
        get,
        create,
        destroy,
        update
    }


}