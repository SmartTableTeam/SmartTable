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
          <p className='prompt'>Texter</p>
          <input type='text'></input>
          <p className='prompt'>Texter</p>
          <input type='text'></input>
          <p className='prompt'>Texter</p>
            <input type='text'></input>
          <Link to='/profile'>
            <button>SignUp</button>
          </Link>
        </form>
      </div>
    )
  }
}
