import React from 'react'
import {Link} from 'react-router'

export default class Nav extends React.Component{

  render(){

    return(

      <div className='navBar'>
        <div className='right'>
          <ul>
            <li>Login</li>
            <li onClick={this.click.bind(this)}>Sign up</li>
          </ul>
        </div>
      </div>
    )
  }

  click(){
    this.props.func(true)
  }
}
