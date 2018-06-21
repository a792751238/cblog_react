/**
 * Created by easterCat on 2017/10/9.
 */
import './public/index.html';
import './style/app.scss';
import 'LAYUI_CSS';
import 'LAYER_CSS';
// import "babel-polyfill";
import React from 'react';
import ReactDom from 'react-dom';
import App from './modules/App';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import {logged} from './modules/user/user.actions';

Promise.all([
    store.dispatch(logged())
]).then(() => {
    console.log('已进入应用');
    ReactDom.render(
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App}/>
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('root')
    );
});

// ReactDom.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <Route path="/" component={App}/>
//         </BrowserRouter>
//     </Provider>
//     ,
//     document.getElementById('root')
// );