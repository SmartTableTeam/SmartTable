import React , { Component } from 'react'
import ProfileNav from './Nav/ProfileNav.js'
import TheBox from './theBox/TheBox.js'
export default class Profile extends Component {

  render() {
    return (
      <div className='JumboTron'>
        <ProfileNav />
        <TheBox/>
      </div>
    )
  }
}
