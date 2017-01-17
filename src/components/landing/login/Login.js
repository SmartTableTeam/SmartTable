import React , { Component } from 'react'
import {Link} from 'react-router'
import './Login.scss'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'WELCOME TO THE LOGIN PAGE'
    }
  }

  render() {
    return (
      <div className='contain'>
        <form className='content'>
          <p className='prompt'>Company Name</p>
          <input type='text' placeholder='Enter Company'></input>
          <p className='prompt'>Email</p>
          <input type='text' placeholder='Enter Email'></input>
          <p className='prompt'>Texter</p>
            <input type='text' placeholder='Enter Company'></input>
          <Link to='/profile'>
            <button>SignUp</button>
          </Link>
        </form>
      </div>
    )
  }
}
