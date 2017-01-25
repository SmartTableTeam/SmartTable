import React from 'react'
import '../../main.scss'
import './dashboardnav.scss'
import { connect } from 'react-redux'
import store from '../../../store'
import {Link} from 'react-router'

class ProfileNav extends React.Component{
  render(){
    return(
      <div className='navigationContain'>
      <h1>{this.props.current_user.name}</h1>
      <Link to='/profile/editProfile'>
        <div className="burgerWrapper">
          <div className="bunTop"></div>
          <div className="lettuce"></div>
          <div className="burger"></div>
          <div className="bunBottom"></div>
        </div>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
    console.log(state);
    console.log('State change detected!');
    return {current_user: state.current_user}
}

export default connect(mapStateToProps)(ProfileNav)
