import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Profile from './components/restProfile/Profile.js'
import Landing from './components/landing/Landing.js'
import editMenuItem from './components/edit-menu-item/edit-menu-item'
import TableMenu from './components/TableMenu/TableMenu'
import OrderQueue from './components/order-queue/order-queue.js';
import OrderConfirm from './components/order-confirmation/OrderConfirm.js'
import AlertReact from './components/react-s-alert/react-s-alert'



import EditMenu from './components/edit-menu/edit-menu'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Landing}/>
      <Route path='/profile'component={Profile}>
        <Route path='/profile/confirm' component={OrderConfirm} />
      </Route>
    <Route path='/editMenu' component={EditMenu}/>
    <Route path='/editMenu/editMenuItem' component={editMenuItem}/>
    <Route path='/practice' component={Profile} />
    <Route path='/TableMenu' component={TableMenu}/>
    <Route path='/confirm' component={OrderConfirm} />
    <Route path='/Alert' component={AlertReact} />
  </Route>

)
