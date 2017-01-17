let message = 'hellos!!!!!sdsd!!'
console.log(message);
import React from 'react'
import {render} from 'react-dom'
import App from './components/app/App'
import {Router, browserHistory,hashHistory, Route} from "react-router"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes'

render(
    <Router history={hashHistory} routes={routes}/>
  ,document.getElementById('app')
)
