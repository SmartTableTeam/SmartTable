import React from 'react'
import {Link} from 'react-router'
export default class Nav extends React.Component{
  render(){
    return(
      <div className='navBar'>


        <div className='right'>
          <ul>
            <Link to=''>
              <li>Login</li>
            </Link>
            <li>Sign up</li>
          </ul>
        </div>

      </div>
    )
  }

}
