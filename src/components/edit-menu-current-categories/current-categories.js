import React, { Component } from 'react'

export default class CurrentCategories extends Component {

  render(){

    return (
      <div className=''>
      <button className='btn'></button>
      <span>{this.props.name}</span>
      <span>edit</span>
      </div>
    )
  }
}
