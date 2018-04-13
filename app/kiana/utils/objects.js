/**
 * Created by easterCat on 2018/4/12.
 */
import {default as _deepEqual} from './deepEqual'
import assign from 'object-assign'

export const deepEqual = _deepEqual
export const objectAssign = assign
export function shallowEqual (objA, objB) {
    if (objA === objB) {
        return true
    }

    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
        return false
    }

    const keysA = Object.keys(objA)

    if (keysA.length !== Object.keys(objB).length) {
        return false
    }

    for (let i = 0, key; i < keysA.length; i++) {
        key = keysA[i]
        if (!objB.hasOwnProperty(key) || objA[key] !== objB[key]) {
            return false
        }
    }

    return true
}