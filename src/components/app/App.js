import React from 'react'
import './jumboStyle.scss'
import Landing from '../landing/Landing.js'
export default class App extends React.Component{

  render(){

    return(
      <div className=''>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
