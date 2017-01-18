import React, { Component } from 'react'
import { connect } from 'react-redux'
class CurrentCategories extends Component {

  render(){
    console.log(this.props);
    return (
      <div className=''>
      <span>{this.props.name}</span>
      <button className='btn'>delete</button>
      <button className='btn'>edit</button>
      </div>
    )
  }
}

// // has the argument of application state
//
// function mapStateToProps(state){
//   // object that we return is going to show up as props inside of our bookDetail component
//   return {
//     book:state.ActiveCategory
//   }
// }
//
// export default connect(mapStateToProps)(CurrentCategories)
