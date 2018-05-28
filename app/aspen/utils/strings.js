/**
 * Created by easterCat on 2018/4/12.
 */
import objectAssign from 'object-assign'
let uid = Date.now()

export function nextUid() {
    return (uid++).toString(36)
}

export function format() {
    let args = [].slice.call(arguments)
    let str = args.shift()
    return str.replace(/{(\d+)}/g, function (match, number) {
        return args[number] !== undefined
            ? args[number]
            : match
    })
}

export function substitute(str, obj) {
    if (typeof str === 'string') {
        if (str.indexOf('{') < 0) {
            return obj[str]
        } else {
            return str.replace((/\\?\{([^{}]+)\}/g), function (match, name) {
                if (match.charAt(0) === '\\') {
                    return match.slice(1)
                }
                return (obj[name] === null || obj[name] === undefined) ? '' : obj[name]
            })
        }
    } else if (typeof str === 'function') {
        let val = str(obj)
        if (val === obj && typeof val === 'object') {
            val = objectAssign({}, obj)
        }
        return val
    }
}

export function toArray(value, sep) {
    if (value === null || value === undefined) {
        value = []
    }
    if (typeof value === 'string' && sep) {
        value = value.split(sep)
    } else if (!(value instanceof Array)) {
        value = [sep ? value.toString() : value]
    } else if (sep) {
        // if use sep, convert every value to string
        value = value.map((v) => v.toString())
    }

    return value
}