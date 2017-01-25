import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Profile from './components/restProfile/Profile.js'
import Landing from './components/landing/Landing.js'
<<<<<<< HEAD
import EditProfile from './components/restProfile/nav/editProfile/editProfile.js'
=======
import editMenuItem from './components/edit-menu-item/edit-menu-item'
import TableMenu from './components/TableMenu/TableMenu'
import ReactAlert from './components/react-alert/react-alert'

>>>>>>> 49d87ba9b920f1b6ec1c40dfed7a905b8df1356d
import OrderQueue from './components/order-queue/order-queue.js';

import OrderConfirm from './components/order-confirmation/OrderConfirm.js'



import EditMenu from './components/edit-menu/edit-menu'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Landing}/>
<<<<<<< HEAD
    <Route path='/profile'component={Profile}>
      <Route path='/profile/confirm' component={OrderConfirm} />
      <Route path='/profile/edit' component={EditMenu} />
    </Route>
    <Route path='/profile/editProfile' component={EditProfile} />
    <Route path='/edit' component={EditMenu}/>
=======
      <Route path='/profile'component={Profile}>
        <Route path='/profile/confirm' component={OrderConfirm} />
      </Route>
    <Route path='/editMenu' component={EditMenu}/>
    <Route path='/editMenu/editMenuItem' component={editMenuItem}/>
    <Route path='/practice' component={Profile} />
    <Route path='/TableMenu' component={TableMenu}/>
    <Route path='/Alert' component={ReactAlert}/>
>>>>>>> 49d87ba9b920f1b6ec1c40dfed7a905b8df1356d
    <Route path='/confirm' component={OrderConfirm} />
  </Route>

)
