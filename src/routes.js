import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Profile from './components/restProfile/Profile.js'
import Landing from './components/landing/Landing.js'
import EditProfile from './components/restProfile/nav/editProfile/editProfile.js'
import editMenuItem from './components/edit-menu-item/edit-menu-item'
import TableMenu from './components/TableMenu/TableMenu'
import ReactAlert from './components/react-alert/react-alert'
import OrderQueue from './components/order-queue/order-queue.js';
import OrderDetails from './components/order-queue/order-queue-details.js'
import OrderConfirm from './components/order-confirmation/OrderConfirm.js'



import EditMenu from './components/edit-menu/edit-menu'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Landing}/>
    <Route path='/profile'component={Profile}>
      <Route path='/profile/orders' component={ OrderQueue }>
        <Route path='/profile/orders/:order_id' component={ OrderDetails }/>
      </Route>
      <Route path='/profile/confirm' component={OrderConfirm} />
      <Route path='/profile/edit' component={EditMenu} />
      <Route path='/profile/editProfile' component={EditProfile} />
    </Route>
    <Route path='/practice' component={Profile} />
    <Route path='/TableMenu' component={TableMenu}/>
    <Route path='/Alert' component={ReactAlert}/>
    <Route path='/editMenu' component={EditMenu}/>
    <Route path='/editMenu/editMenuItem' component={editMenuItem}/>
    <Route path='/confirm' component={OrderConfirm} />
    <Route path='/edit' component={EditMenu}/>
  </Route>
)
