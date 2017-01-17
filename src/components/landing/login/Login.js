import React , { Component } from 'react'
import {Link} from 'react-router'
import './Login.scss'
export default class Login extends Component {


  render() {
    console.log(this.props.function,'worked');
    return (
      <div className='contain'>
        <form className='content'>
          <p className='prompt'>Company Name</p>
          <input type='text' placeholder='Enter Company'></input>
          <p className='prompt'>Email</p>
          <input type='text' placeholder='Enter Email'></input>
          <p className='prompt'>Texter</p>
            <input type='text' placeholder='Enter Company'></input>
          <div>
            <Link to='/profile'>
              <button onClick={this.postUser.bind(this)}>SignUp</button>
            </Link>
              <button onClick={this.props.funky}>Cancel</button>
          </div>


        </form>
      </div>
    )
  }
  postUser(){

  }
}
