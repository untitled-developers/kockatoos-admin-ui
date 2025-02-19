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


    return {
        get,
        set,
        cloneDeep
    }
}