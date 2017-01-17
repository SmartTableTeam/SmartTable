import React , { Component } from "react"
import './edit-menu.scss'
import ManageDishes from '../edit-menu-manage-dishes/edit-menu-manage-dishes'
import Category from  '../edit-menu-category/edit-menu-category'
export default class EditMenu extends Component {

  render(){

    return (
      // header test out bootstrap 'Category'
      <div className='edit-menu-background'>


          <div className='row'>
            <div id='category-container'
              className='col-sm-5 col-md-5'>
              <header>category</header>
              <Category />
            </div>
            <div id='edit-menu-container' className='col-sm-7 col-md-7'>
              <header>Manage Dishes</header>
              <ManageDishes />
            </div>
          </div>


      </div>
    )
  }
}
