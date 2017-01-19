import React from 'react'
import TheBoxNav from './components/boxNav.js'
import Table from './Table/Table.js'
import './TheBox.scss'
export default class TheBox extends React.Component{
  render(){
    return(
      <div className='theContainer'>
        <TheBoxNav/>

        <div className='theView'>
            <Table/>
        </div>
      </div>

    )
  }
  invoct(){
    console.log('Worked');
  }

}
