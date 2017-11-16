/**
 * Created by easterCat on 2017/11/16.
 */
import {server} from '../../../app.config';
import {get, post, remove, update} from '../../util/netRequest';

export const ADD_ONE_LIST = 'ADD_ONE_LIST';

export function addOneList() {
    alert(123)
    return dispatch => {
        return dispatch({
            type: 'ADD_ONE_LIST',
            payload: 1
        })
    }
}