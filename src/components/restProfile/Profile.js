import React , { Component } from 'react'
import DashboardNav from './nav/DashboardNav.js'
import TheBox from './theBox/TheBox.js'
import './profile.scss'
import TheBoxNav from './theBox/TheBox'


export default class Profile extends Component {

  render() {
    console.log(this.props.children, "children");

    return (
      <div className='dashboardMain'>
        <DashboardNav />
        <TheBoxNav/>
        <div className="switchViewContainer">
          {this.props.children}
        </div>

      </div>
    )
  }
}
// <DashboardNav/>
// <div className='ProfileBoxContain'>
// <div className ='ProfileBox'>
//   <TheBox/>
// </div>
// </div>
// <div className='dashboardMain'>
// <TheBoxNav/>
// {this.props.children}
//
//
// </div>
