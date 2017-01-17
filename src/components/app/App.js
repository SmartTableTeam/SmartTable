import React from 'react'
import './jumboStyle.scss'
import Landing from '../landing/Landing.js'
export default class App extends React.Component{

  render(){
    return(
<<<<<<< HEAD
      <div>
        <div className='nav'>
          <h1>Nav Goes Here!</h1>
        </div>

=======
      <div className='JumboTron'>
>>>>>>> basicStart
        <div>{this.props.children}</div>



      </div>

    )
  }
}
  // <Landing></Landing>
