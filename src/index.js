import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './scss/app.scss';
import App from './App';

import store from "./redux/store";

import { Provider } from "react-redux"


console.log(store)


let add = () => {
    store.dispatch({
        type: "INCREMENT"
    })
}

store.subscribe(() => {
    console.log('Изменился', store.getState())
})

ReactDOM.render(

        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
