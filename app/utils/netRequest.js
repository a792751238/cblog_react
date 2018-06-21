/**
 * Created by easterCat on 2017/10/19.
 */
import axios from 'axios';
// import $ from 'jquery';
import config from '../../app.config';

export function get(url, type) {
    console.log('netRequest中的jquery', $);
    return dispatch => {
        // return $.ajax({type: 'GET', url: url, xhrFields: {withCredentials: true}})
        //     .then(
        //         function (res) {
        //             dispatch({
        //                 type: type,
        //                 payload: res
        //             });
        //         },
        //         function (err) {
        //             console.log(err);
        //         }
        //     );

        return axios.get(url)
            .then(res => {
                dispatch({
                    type: type,
                    payload: res
                });
            })
            .catch(error => {
                console.log(err);
            })
    };
}

export function post(url, data, type) {
    return dispatch => {
        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            xhrFields: {
                withCredentials: true
            }
        })
            .done(function (msg) {
                dispatch({
                    type: type,
                    payload: msg
                });
            })
            .fail(function (err) {
                console.error('登录时出现错误', err);
            })
    }
}

export function remove(url, type) {
    return dispatch => {
        return $.ajax({
            type: 'delete',
            url: url,
            xhrFields: {
                withCredentials: true
            }
        })
            .done(function (msg) {
                dispatch({
                    type: type,
                    payload: msg
                });
            })
            .fail(function (err) {
                console.log(err);
            })
    }
}

export function update(url, data, type) {
    return dispatch => {
        return $.ajax({
            type: 'put',
            url: url,
            data: data
        })
            .done(function (msg) {
                dispatch({
                    type: type,
                    payload: msg
                });
            })
            .fail(function (err) {
                console.log(err);
            })
    }
}
