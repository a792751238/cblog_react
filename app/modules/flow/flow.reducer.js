/**
 * Created by easterCat on 2017/11/16.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    ADD_ONE_LIST,
    SELECT_ONE_NODE, MODIFI_NODE
} from './flow.actions';

const initState = fromJS({
    list: [{
        id: 1,
        position: {
            x: 408, y: 460
        },
        text: '是你丢手机的'
    }, {
        id: 2,
        position: {
            x: 408, y: 360
        },
        text: '是你丢手机的'
    }, {
        id: 3,
        position: {
            x: 408, y: 260
        },
        text: '是你丢手机的'
    }, {
        id: 4,
        position: {
            x: 408, y: 260
        },
        text: '是你丢手机的'
    }, {
        id: 5,
        position: {
            x: 408, y: 160
        },
        text: '是你丢手机的'
    }],
    selectList: {}
});

const handles = {
    [ ADD_ONE_LIST]: (flow, action) => {

        let length = flow.get('list').size;
        let obj = {
            id: length + 1,
            position: action.payload
        };
        let new_list = flow.get('list').set(`${length}`, fromJS(obj));
        return flow.set('list', new_list);
    },
    [SELECT_ONE_NODE]: (flow, action) => {
        let lists = flow.get('list');
        console.log(lists);
        let s_list = lists.get(`${action.payload - 1}`);
        console.log(action.payload - 1);
        return flow.set('selectList', s_list);
    },
    [MODIFI_NODE]: (flow, action) => {
        let lists = flow.get('list');
        let s_list = flow.get('selectList');
        let index = lists.findIndex(i => {
            return i.get('id') === s_list.get('id')
        });
        if (index === -1) return flow;
        //修改选择的元素
        s_list = s_list.set('text', action.payload);
        return flow.set('list', lists.update(index, () => {
            return s_list
        }));
    }
};

export default createReducer(initState, handles);