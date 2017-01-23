import React from 'react'
import Nav from './NavBar/Navigation.js'
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
  }
  // componentDidMount(){
  //   this.changesIt(!this.state.val);
  // }

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

    // document.getElementById('render').className+='none'
    return;
  }
  activateRenderr(value){
    if(value!=undefined)this.setState({login:value})

    // document.getElementById('render').className+='none'
    return;
  }


  render(){
    return(
      <div className='LandingContainer' >
        <Nav signup={this.activateRender.bind(this)} login={this.activateRenderr.bind(this)} />

        <div className="signup-popup">


          { this.state.signup ? <Login funky={this.changesIt.bind(this)} /> : this.state.login ? <SignUp closeModal={this.closeLogin.bind(this)} /> : <Search /> }


        </div>
      </div>

    )
  }
}
