import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({

	user: userReducer,
	product: productReducer

})

const store = createStore(allReducers, {

	product: [{name:'iPhone'}],
	user: 'Michael'

},
window.devToolsExtension && window.devToolsExtension() 

);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
