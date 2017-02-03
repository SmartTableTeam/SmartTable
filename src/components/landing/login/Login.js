import React , { Component } from 'react'
import {Link} from 'react-router'
import {hashHistory} from 'react-router'
import './Login.scss'

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      value: 'customer'
    }


    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  checkInputs(e){

    var validEmail=validateEmail(this.state.email);
    var validName=validateName(this.state.name);
    var validPassword=validatePassword(this.state.password);

    function validateEmail(email) { // anything@aol.com
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    function validatePassword(password) { // 8 characters min, 1 cap, 1 num
      var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
    }
    function validateName(name) { //6 char min
      var re = /^.{6,}$/;
      return re.test(name);
    }
    if(validEmail,validName,validPassword) {

      this.handleSubmit(e)

    }

  }



  handleSubmit(e){
    e.preventDefault();

    var obj = JSON.stringify({
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    })

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
      if(this.state.value === "business"){
        console.log("about to fetch");
        fetch('http://localhost:1701/api/account/restaurant', myInit).then((res) => {
          hashHistory.push('/profile');
        })
      } else {
       console.log("DOESNT OWRKS LOL");
      }
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

  handleRadioCustomer(){
    this.setState({
      value: 'customer'
    })
  }
  handleRadioBusiness(){
    this.setState({
      value: 'business'
    })
  }


  userOption(){
   if(this.state.value === 'customer'){
     return <div>
     <input type='text' placeholder='Your Name' onChange={this.handleNameChange}></input>
     <input type='email' placeholder='Email' onChange={this.handleEmailChange}></input>
     <input type='password' placeholder='Password' onChange={this.handlePasswordChange}></input>
     <input type='password' placeholder='Confirm Password'></input>

     <hr />

     <button  type="submit" className="sign-up" onClick={this.checkInputs.bind(this)}>Sign Up Now</button>
     </div>
   } else {
     return <div>
     <input type='text' placeholder='Business Name' onChange={this.handleNameChange}></input>
     <input type='email' placeholder='Email' onChange={this.handleEmailChange}></input>
     <input type='password' placeholder='Password' onChange={this.handlePasswordChange}></input>
     <input type='password' placeholder='Confirm Password'></input>

     <hr />

     <button  type="submit" className="sign-up" onClick={this.checkInputs.bind(this)}>Sign Up Your Business</button>
     </div>
   }
 }


  render() {

    var msg;
    if(this.state.value === 'customer'){
      msg = 'customer'
      console.log("radio is:", msg);
    } else if (this.state.value === 'business'){
      msg = 'business'
      console.log("radio is:", msg);
    } else {
      msg = "does not compute"
      console.log(msg);
    }




    return (

      <div className='contain'>
        <form className='content'>
          <div className="login-exit click-to-close" onClick={this.props.funky}></div>

          <h2>Register</h2>

          <hr />
          <label>
            <input type="radio" name="signup" defaultChecked={this.state.value} onChange={this.handleRadioCustomer.bind(this)} value="customer"/> I am a Customer
          </label>
          <label>
            <input type="radio" name="signup" onChange={this.handleRadioBusiness.bind(this)} value="business"/> I am a Business
          </label>


          {this.userOption()}

        </form>
      </div>
    )
  }
}


// <input type='text' placeholder='Address'></input>
// <input type='text' placeholder='City'></input>
// <input type='text' placeholder='State'></input>
// <input type='text' placeholder='Phone'></input>
