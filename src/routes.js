import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Login from './components/login/Login'
import Landing from './components/landing/Landing.js'
export default (
  <Route path='/' component={App}>
  <IndexRoute component={Landing}/>
    <Route path='/login'component={Login}/>
  </Route>

)

// <IndexRoute component={MainMenu} />
