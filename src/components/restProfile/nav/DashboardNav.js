import React from 'react'
import '../../main.scss'
import './dashboardnav.scss'
export default class ProfileNav extends React.Component{
  render(){
    return(
      <div className='navigationContain'>
      <h1>NAME OF COMPANY HERE</h1>

        <div className="burgerWrapper">
          <div className="bunTop"></div>
          <div className="lettuce"></div>
          <div className="burger"></div>
          <div className="bunBottom"></div>
        </div>
      </div>
    )
  }
}
