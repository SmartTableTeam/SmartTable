import React from 'react'
import './searchHere.scss'
export default class SearchHere extends React.Component{
  render(){
    return(
       <div className='searchContain'>
          <input className='textBox' type='text' placeholder='Search a state or city'
                 ref='textInput'/>

          <div className='searchButton'>
            <div className='arrow'/>
         </div>
       </div>
    )
  }
}
