import React from 'react'
import './Table.scss'
import Tables from './Tables/Tables.js'
import AddTable from './AddTable/AddTable.js'
export default class Table extends React.Component{
  render(){
    return(
      <div className='mainView'>
          <Tables/>
          <AddTable/>

      </div>
    )
  }
}
