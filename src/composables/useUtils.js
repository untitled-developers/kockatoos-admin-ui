import {isProxy, isRef, toRaw} from "vue";

export default function useUtils() {
    const get = (obj, path, defValue) => {

        if (!path) return undefined

        const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)

        const result = pathArray.reduce(
            (prevObj, key) => prevObj && prevObj[key],
            obj
        )

        return result === undefined ? defValue : result
    }

    // https://youmightnotneed.com/lodash#set
    const set = (obj, path, value) => {
        // Regex explained: https://regexr.com/58j0k
        const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)

        pathArray.reduce((acc, key, i) => {
            if (acc[key] === undefined) acc[key] = {}
            if (i === pathArray.length - 1) acc[key] = value
            return acc[key]
        }, obj)
    }

    // https://youmightnotneed.com/lodash#cloneDeep
    const cloneDeep = object => {
        // added this since structuredClone doesn't support objects created with ref or proxies.
        if (isRef(object)) {
            object = toRaw(object.value)
        } else if (isProxy(object) || object?.__v_raw) {
            object = toRaw(object)
        }

        try {
            return structuredClone(object)
        } catch (error) {
            if (Array.isArray(object)) {
                return object.map(item => cloneDeep(item))
            }

            if (object && typeof object === 'object') {
                return Object.keys(object).reduce((acc, key) => {
                    acc[key] = cloneDeep(object[key])
                    return acc
                }, {})
            }

            return object
        }
    }

    /**
     * Converts a JavaScript timestamp to MySQL date format (YYYY-MM-DD)
     * @param {number|Date} timestamp - JavaScript timestamp (milliseconds since epoch) or Date object
     * @returns {string} Date in MySQL format (YYYY-MM-DD)
     */
    function getFormattedDate(timestamp) {
        // Convert to Date object if timestamp is a number
        const date = timestamp instanceof Date ? timestamp : new Date(timestamp);

        // Get year, month, and day components
        const year = date.getFullYear();
        // getMonth() is zero-based, so add 1 and pad with a leading zero if needed
        const month = String(date.getMonth() + 1).padStart(2, '0');
        // pad the day with a leading zero if needed
        const day = String(date.getDate()).padStart(2, '0');

        // Return in MySQL date format: YYYY-MM-DD
        return `${year}-${month}-${day}`;
    }

    return {
        get,
        set,
        cloneDeep
    }
}