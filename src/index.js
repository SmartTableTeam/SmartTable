let message = 'hellos!!!!!sdsd!!'
console.log(message);
import React from 'react'
import {render} from 'react-dom'
import App from './components/app/App'
import {Router, browserHistory,hashHistory, Route} from "react-router"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes'
import store from './store'
import promise from 'redux-promise'



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  ,document.getElementById('app')
)
