import React , { Component } from 'react'
import ProfileNav from './Nav/ProfileNav.js'
import TheBox from './theBox/TheBox.js'
import './Profile.scss'
export default class Profile extends Component {

  render() {
    return (
      <div className='JumboJumbo'>
        <div className = 'ProfileNav'>
          <ProfileNav/>
        </div>
        <div className='ProfileBoxContain'>
          <div className ='ProfileBox'>
            <TheBox/>
          </div>
        </div>


      </div>
    )
  }
}
