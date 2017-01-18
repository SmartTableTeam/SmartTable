import React , { Component } from 'react'
import '../edit-menu-category/edit-menu-category.scss'
export default class ManageDishes extends Component {
  constructor(props){
    super(props)

    this.state = {
      haveItems:false
    }
  }
  render(){

    return (
      <div className='ManageDishes-container'>
        <div className='button-container'>
          <button className='btn btn-default btn-lg'>Add Dish</button>
        </div>
        <form>
        <input type='text' className='form-control'/>
        </form>

      </div>

    )
  }
}
