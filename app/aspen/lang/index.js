/**
 * Created by easterCat on 2018/4/13.
 */
let LangData = null

export function getLang(path, def = '') {
    let result = LangData

    if (path === undefined) {
        return result
    }

    if (!path || typeof path !== 'string') {
        return undefined
    }

    let paths = path.split('.')

    for (let i = 0, count = paths.length; i < count; i++) {
        result = result[paths[i]]
        if (result === undefined) {
            if (def !== undefined) {
                return def
            } else {
                return undefined
            }
        }
    }

    return result
}
