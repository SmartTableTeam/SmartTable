import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Login from './components/login/Login'
export default (
  <Route path='/' component={App}>
  <IndexRoute component={Login}/>
  </Route>

)

// <IndexRoute component={MainMenu} />
