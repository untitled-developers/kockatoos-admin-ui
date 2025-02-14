import useFetch from "./useFetch.js";

export default function useCrudApi(endpoint) {
    const fetch = useFetch()

    async function get(query) {
        return fetch.get(`api/${endpoint}`, {
            params: query
        });
    }

    async function create(data) {
        return fetch.post(`api/${endpoint}`, data);
    }

    async function destroy(id) {
        return fetch.delete(`api/${endpoint}/${id}`);
    }

    async function update(id, data) {
        return fetch.post(`api/${endpoint}/${id}`, data);
    }

    return {
        get,
        create,
        destroy,
        update
    }


}