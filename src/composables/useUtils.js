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
    const cloneDeep = object => structuredClone(object)

    return {
        get,
        set,
        cloneDeep
    }
}