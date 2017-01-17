let message = 'hellos!!!!!sdsd!!'
console.log(message);
import React from 'react'
import {render} from 'react-dom'
import App from './components/app/App'
<<<<<<< HEAD
import {Router, browserHistory, Route, hashHistory} from "react-router"
=======
import {Router, browserHistory,hashHistory, Route} from "react-router"
>>>>>>> basicStart
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes'
render(
  // <App />
    <Router history={hashHistory} routes={routes}/>
  ,document.getElementById('app')
)
