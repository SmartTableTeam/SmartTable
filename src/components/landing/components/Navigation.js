import React from 'react'
import {Link} from 'react-router'
export default class Nav extends React.Component{
  render(){
    console.log(this.props.func);
    return(

      <div className='navBar'>


        <div className='right'>
          <ul>

              <li onClick={this.click.bind(this)}>Login</li>

            <li>Sign up</li>
          </ul>
        </div>

      </div>
    )
  }
  click(){
    this.props.func(!this.props.val)
  }
}
