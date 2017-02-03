import React from 'react'
import Nav from './Navbar/Navigation.js'
import Login from './login/Login.js'
import Search from './searchBar/Search.js'
import SignUp from './signup/SignUp.js'
import '../main.scss'
import './landing.scss'
export default class Landing extends React.Component{
  constructor(props){
    super(props)
    this.state={
      login: false,
      signup: false
    }
    this.openModal = this.openModal.bind(this)
  }
  changesIt(){
    this.setState({
      signup:false
    })
  }
  closeLogin(){
    this.setState({
      login: false
    })
  }
  activateRender(value){
    if(value!=undefined)this.setState({signup:value})
    return;
  }
  activateRenderr(value){
    if(value!=undefined)this.setState({login:value})
    return;
  }
  openModal(){
    console.log('firing');
    this.setState({login:true})
    this.setState({signup:false})
  }
  render(){
    console.log(this.state.signup);
    return(
      <div className='LandingContainer' >
        <Nav signup={this.activateRender.bind(this)} login={this.activateRenderr.bind(this)} />

        <div className="signup-popup">


          { this.state.signup ? <Login openModal={this.openModal}funky={this.changesIt.bind(this)} /> : this.state.login ? <SignUp closeModal={this.closeLogin.bind(this)} /> : <Search /> }


        </div>
      </div>

    )
  }
}
