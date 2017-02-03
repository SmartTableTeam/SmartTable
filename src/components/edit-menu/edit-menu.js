import React , { Component } from "react"
import './edit-menu.scss'
import ManageDishes from '../edit-menu-manage-dishes/edit-menu-manage-dishes'
import Category from  '../edit-menu-category/edit-menu-category'
const DEFAULT_BACKGROUND_URL = 'https://s-media-cache-ak0.pinimg.com/originals/6b/e1/84/6be1847b56e3832a614699142d1e09d8.jpg'

export default class EditMenu extends Component {

  render(){
    let editMenuBackground = {
      border:'4px solid brown',
      boxShadow: '3px 3px 2px #888888',
      background: 'tan',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }
    return (
      <div style={editMenuBackground} className='edit-menu-background'>


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
