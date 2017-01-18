import React , { Component } from 'react'
import {Link} from 'react-router'
import '../../main.scss'
import './login.scss'

export default class Login extends Component {


  render() {

    return (

      <div className='contain'>
        <form className='content'>
          <div className="login-exit click-to-close" onClick={this.props.funky}></div>

          <h2>Register</h2>

          <hr />

          <input type='text' placeholder='Company Name'></input>
          <input type='text' placeholder='Email'></input>
          <input type='text' placeholder='Password'></input>
          <input type='text' placeholder='Confirm Password'></input>

          <hr />

          <Link to='/profile'>
            <button className="sign-up" onClick={this.postUser.bind(this)}>Sign Up Now</button>
          </Link>

        </form>
      </div>
    )
  }
  postUser(){

  }
}
