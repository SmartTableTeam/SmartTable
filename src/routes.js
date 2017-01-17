import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Login from './components/login/Login'
import EditMenu from './components/edit-menu/edit-menu'

export default (
  <Route path='/' component={App}>
  <IndexRoute component={Login}/>
  <Route path='/edit' component={EditMenu}/>
  </Route>

)

// <IndexRoute component={MainMenu} />
