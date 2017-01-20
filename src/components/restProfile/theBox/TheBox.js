import React from 'react'
import TheBoxNav from './components/boxNav.js'
import './TheBox.scss'
export default class TheBox extends React.Component{
  render(){
    return(
      <div className='theContainer'>
        <TheBoxNav/>

        <div className='theView'>

        </div>
      </div>

    )
  }


}
