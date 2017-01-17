import React from 'react'
import './jumboStyle.scss'
import Landing from '../landing/Landing.js'
export default class App extends React.Component{

  render(){
    console.log(this.props);
    return(
      <div className='JumboTron'>

        {this.props.children}
      </div>

    )
  }
}
  // <Landing></Landing>
