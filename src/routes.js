import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Profile from './components/restProfile/Profile.js'
import Landing from './components/landing/Landing.js'
import editMenuItem from './components/edit-menu-item/edit-menu-item'
import TestModal from './components/modal/modal'
import TableMenu from './components/TableMenu/TableMenu'
import ReactAlert from './components/react-alert/react-alert'

import OrderQueue from './components/order-queue/order-queue.js';

import OrderConfirm from './components/order-confirmation/OrderConfirm.js'



import EditMenu from './components/edit-menu/edit-menu'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Landing}/>
      <Route path='/profile'component={Profile}>
        <Route path='/profile/confirm' component={OrderConfirm} />
      </Route>
    <Route path='/editMenu' component={EditMenu}/>
    <Route path='/editMenu/editMenuItem' component={editMenuItem}/>
    <Route path='/modal' component={TestModal}/>
    <Route path='/practice' component={Profile} />
    <Route path='/TableMenu' component={TableMenu}/>
    <Route path='/Alert' component={ReactAlert}/>
    <Route path='/confirm' component={OrderConfirm} />
  </Route>

)
