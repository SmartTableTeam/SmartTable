import React , { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'WELCOME TO THE LOGIN PAGE'
    }
  }

  render() {
    return (
      <h1>{this.state.message}!!!</h1>
    )
  }
}
