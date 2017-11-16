/**
 * Created by easterCat on 2017/11/16.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    ADD_ONE_LIST,
} from './flow.actions';

const initState = fromJS({
    list: [1, 2, 3, 4, 5]
});

const handles = {
    [ ADD_ONE_LIST]: (flow, action) => {

        let length = flow.get('list').size;
        let new_list = flow.get('list').set(`${length}`, length + 1);
        return flow.set('list', new_list);
    }
};

export default createReducer(initState, handles);