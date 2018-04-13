/**
 * Created by easterCat on 2017/11/16.
 */
import {server} from '../../../app.config';
import {get, post, remove, update} from '../../utils/netRequest';

export const ADD_ONE_LIST = 'ADD_ONE_LIST';
export const SELECT_ONE_NODE = 'SELECT_ONE_NODE';
export const MODIFI_NODE = 'MODIFI_NODE';

export function addOneList(data) {
    return dispatch => {
        return dispatch({
            type: 'ADD_ONE_LIST',
            payload: data
        })
    }
}

export function selectOneNode(id) {
    console.log(id);
    return dispatch => {
        return dispatch({
            type: 'SELECT_ONE_NODE',
            payload: id
        })
    }
}

export function modifiNode(text) {
    return dispatch => {
        return dispatch({
            type: 'MODIFI_NODE',
            payload: text
        })
    }
}