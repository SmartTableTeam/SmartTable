import React from 'react'
import './dateShow.scss'
export default class displayDay extends React.Component{
  render(){
  return(
    <div className='container'>
        {this.props.day}
        {this.props.open}
        {this.props.close}
    </div>
      )
  }
}
