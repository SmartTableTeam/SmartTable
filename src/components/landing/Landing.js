import React from 'react'
import Nav from './components/Navigation.js'
import Login from './login/Login.js'
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
      // document.getElementById('render').className='none'.replace('')
      return (
        <div className='modal'>
          <Login/>
        </div>
      )
    }
    // document.getElementById('render').className+='none'
    return;
  }
  render(){
    return(
      <div className='LandingContainer' >
        <Nav func={this.activateRender.bind(this)} val={this.state.val}/>


        <div  className='modalContain'>
          {this.activateRender()}
        </div>
      </div>
    )
  }
}
