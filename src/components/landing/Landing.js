import React from 'react'
import Nav from './components/Navigation.js'
import './landingStyle.scss'

export default class Landing extends React.Component{

  render(){
    return(
      <div className='LandingContainer'>
        <Nav/>

      </div>
    )
  }
}
