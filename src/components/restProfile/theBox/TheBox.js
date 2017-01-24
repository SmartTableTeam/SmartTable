import React from 'react'
import TheBoxNav from './components/boxNav.js'
import EditMenu from '../../edit-menu/edit-menu.js'
import './TheBox.scss'
export default class TheBox extends React.Component{
  render(){
    return(
      <div className='theContainer'>
        <TheBoxNav/>

        <div className='theView'>

        {this.props.children}

        </div>
      </div>

    )
  }


}
