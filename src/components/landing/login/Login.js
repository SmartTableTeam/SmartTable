import React , { Component } from 'react'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'
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
  checkInputs(){
    var validEmail=validateEmail(this.state.email);
    var validName=validateName(this.state.name);
    var validPassword=validatePassword(this.state.password);

    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    function validatePassword(password) {
      var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
    }
    function validateName(name) {
      var re = /^.{6,}$/;
      return re.test(name);
    }

    if(validEmail,validName,validPassword)this.handleSubmit()

  }


  handleSubmit(){
    // e.preventDefault();
    var obj = JSON.stringify({
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    })
    console.log(obj);

    var myInit = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      })
    }

      if(this.state.name && this.state.email && this.state.password){
       fetch('http://localhost:1701/api/account/restaurant', myInit).then((res) => {
          browserHistory.push('/profile');
        })

        //needs to send to profile page from here

      } else {
        alert("please enter all fields")
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

          <button  type="submit" className="sign-up" onClick={this.checkInputs.bind(this)}>Sign Up Now</button>

        </form>
      </div>
    )
  }
}


// <input type='text' placeholder='Address'></input>
// <input type='text' placeholder='City'></input>
// <input type='text' placeholder='State'></input>
// <input type='text' placeholder='Phone'></input>
