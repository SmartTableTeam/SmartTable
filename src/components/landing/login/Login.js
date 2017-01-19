import React , { Component } from 'react'
import {Link} from 'react-router'
import '../../main.scss'
import './login.scss'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(){
    var obj = {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    }
    console.log(obj);

    var myInit = {  method: "POST",
                    body: obj
    }

      if(this.state.name){
        fetch('/api/auth/login', myInit)
      }
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  render() {


    return (

      <div className='contain'>
        <form className='content'>
          <div className="login-exit click-to-close" onClick={this.props.funky}></div>

          <h2>Register</h2>

          <hr />

          <input type='text' placeholder='Company Name' onChange={this.handleNameChange}></input>
          <input type='text' placeholder='Email' onChange={this.handleEmailChange}></input>
          <input type='text' placeholder='Password' onChange={this.handlePasswordChange}></input>
          <input type='text' placeholder='Confirm Password'></input>



          <hr />

          <button  type="submit" className="sign-up" onClick={this.handleSubmit.bind(this)}>Sign Up Now</button>

        </form>
      </div>
    )
  }
}


// <input type='text' placeholder='Address'></input>
// <input type='text' placeholder='City'></input>
// <input type='text' placeholder='State'></input>
// <input type='text' placeholder='Phone'></input>
