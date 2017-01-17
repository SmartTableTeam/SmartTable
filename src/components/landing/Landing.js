import React from 'react'
import Nav from './components/Navigation.js'
import Login from '../login/Login.js'
import './landingStyle.scss'

export default class Landing extends React.Component{
  constructor(props){
    super(props)
    this.state={
      val:true
    }
  }
  activateRender(value){

    if(value!=undefined)this.setState({val:value})
    if(this.state.val){
      return (
        <div className='modal'>
          <Login/>
        </div>
      )
    }
    return <h1>False</h1>
  }
  render(){
    return(
      <div className='LandingContainer'>
        <Nav func={this.activateRender.bind(this)} val={this.state.val}/>
        <div>
          {this.activateRender()}
          {this.state.val}
        </div>
      </div>
    )
  }
}
