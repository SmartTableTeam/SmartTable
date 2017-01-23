import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Profile from './components/restProfile/Profile.js'
import Landing from './components/landing/Landing.js'
import OrderQueue from './components/order-queue/order-queue.js';


import EditMenu from './components/edit-menu/edit-menu'

export default (
  	<Route path='/' component={App}>
  		<IndexRoute component={Landing}/>
	  	<Route path='/profile'component={ Profile }/>
	  	<Route path='/edit' component={ EditMenu }/>
	  	<Route path='/orders' component={ OrderQueue }/>
  	</Route>

)
