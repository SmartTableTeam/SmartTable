import React from 'react'
import {Link} from 'react-router'

export default class Nav extends React.Component{

  render(){

    return(

      <div className='navBar'>
        <div className='right'>
          <ul>
            <li onClick={this.clickLogin.bind(this)}>Login</li>
            <li onClick={this.clickSignUp.bind(this)}>Sign up</li>
          </ul>
        </div>
      </div>
    )
  }

  clickSignUp(){
    this.props.signup(true)
    console.log("clicked signup");
  }

  clickLogin(){
    this.props.login(true)
    console.log("click login");
  }

}
