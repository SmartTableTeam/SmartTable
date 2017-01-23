import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Profile from './components/restProfile/Profile.js'
import Landing from './components/landing/Landing.js'
<<<<<<< HEAD
import OrderQueue from './components/order-queue/order-queue.js';
=======
import OrderConfirm from './components/order-confirmation/OrderConfirm.js'
>>>>>>> master


import EditMenu from './components/edit-menu/edit-menu'

export default (
<<<<<<< HEAD
  	<Route path='/' component={App}>
  		<IndexRoute component={Landing}/>
	  	<Route path='/profile'component={ Profile }/>
	  	<Route path='/edit' component={ EditMenu }/>
	  	<Route path='/orders' component={ OrderQueue }/>
  	</Route>
=======
  <Route path='/' component={App}>
    <IndexRoute component={Landing}/>
    <Route path='/profile'component={Profile}>
      <Route path='/profile/confirm' component={OrderConfirm} />
      <Route path='/profile/edit' component={EditMenu} />
    </Route>
    <Route path='/edit' component={EditMenu}/>
    <Route path='/confirm' component={OrderConfirm} />
  </Route>
>>>>>>> master

)
