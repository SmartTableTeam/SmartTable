import React, { Component } from 'react'

export default class CurrentCategories extends Component {

  render(){
    return (
      <div className=''>
      <span>{this.props.name}</span>
      <button className='btn'>delete</button>
      <button className='btn'>edit</button>
      </div>
    )
  }
}
