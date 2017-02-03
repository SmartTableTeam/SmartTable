import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../../store'
import { bindActionCreators } from 'redux'
import { loginUser } from '../../../actions/login'
import { hashHistory } from 'react-router'
import './signup.scss'
import axios from 'axios'
class SignUp extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.login = this.login.bind(this)
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
    login(e){
      e.preventDefault()
      let user = {
        email:this.state.email,
        password:this.state.password
      }
      console.log(user);
      this.props.loginUser(user)
      .then(() => hashHistory.push('/profile'))

    }


  render(){


    return (


      <div className='contain'>
        <form className='content'>
          <div className="login-exit click-to-close" onClick={this.props.closeModal}></div>

          <h2>Login</h2>

          <hr />

          <input type='text' placeholder='Email' onChange={this.handleEmailChange.bind(this)}></input>
          <input type='password' placeholder='Password' onChange={this.handlePasswordChange.bind(this)}></input>

          <hr />

          <button  type="submit" className="sign-up" onClick={this.login}>Login</button>

        </form>
      </div>
    )
  }
}



function mapStateToProps(state) {
    console.log(state);
    console.log('State change detected!');
    return {current_user: state.current_user}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      loginUser: loginUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
