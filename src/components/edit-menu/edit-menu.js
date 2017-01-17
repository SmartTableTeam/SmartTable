import React , { Component } from "react"
import './edit-menu.scss'
import Category from  '../edit-menu-category/edit-menu-category'
export default class EditMenu extends Component {

  render(){

    return (
      // header test out bootstrap 'Category'
      <div className='edit-menu-background'>

        <header>category</header>

          <div className='row'>
            <div id='category-container'
              className='col-sm-5 col-md-5'>
              <Category />
            </div>
          </div>


      </div>
    )
  }
}
