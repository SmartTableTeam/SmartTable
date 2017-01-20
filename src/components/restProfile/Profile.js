import React , { Component } from 'react'
import DashboardNav from './nav/DashboardNav.js'
import TheBox from './theBox/TheBox.js'
import './profile.scss'
export default class Profile extends Component {

  render() {
    return (
      <div className='dashboardMain'>
          <DashboardNav/>
        <div className='ProfileBoxContain'>
          <div className ='ProfileBox'>
            <TheBox/>
          </div>
        </div>


      </div>
    )
  }
}
