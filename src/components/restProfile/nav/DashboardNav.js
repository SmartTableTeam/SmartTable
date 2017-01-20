import React from 'react'
import '../../main.scss'
import './dashboardnav.scss'
export default class ProfileNav extends React.Component{
  render(){
    return(
      <div className='navigationContain'>
      <h1>NAME OF COMPANY HERE</h1>
        <ul>
          <li>Account</li>
        </ul>
      </div>
    )
  }
}
