import React from 'react'
import ChooseState from './ChooseState.js'
import '../editProfile.scss'
export default class BasicInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:''
    }
  }
  testFunc(event){
    event.preventDefault();
    console.log('hello');
  }
  render(){
    return(
      <form className='BasicInfo'onSubmit={this.testFunc.bind(this)}>

          <p>Business Name</p>
          <input className ='textInput'type='text' />

        <p className='pinBasic'>Address</p>
        <input className ='textInput' type='text'/>
        <p className='pinBasic'>City</p>
        <input className ='textInput' type='text'/>
        <p className='pinBasic'>State</p>
        <ChooseState/>


        <p className='pinBasic'>website</p>
        <input className ='textInput' type='text'/>


      </form>
    )
  }
}
