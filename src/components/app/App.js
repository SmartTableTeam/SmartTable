import React from 'react'
import '../../style.scss'
export default class App extends React.Component{

  render(){
    return(
      <div>
        <div className='nav'>
          <h1>Reajjjctdss</h1>
        </div>

        <div>{this.props.children}</div>

      </div>

    )
  }
}
