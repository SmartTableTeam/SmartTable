import React from 'react'
import '../editProfile.scss'

export default class ChooseDay extends React.Component{

render(){
  return(
    <div className='box'>
      <select id='Day' onChange={this.props.func.bind(this)} >
                  <option  value="MON">Monday</option>
                  <option  value="TUES">Teusday</option>
                  <option  value="WEDN">Wednesday</option>
                  <option  value="THUR">Thursday</option>
                  <option  value="FRID">Friday</option>
                  <option  value="SATU">Saturday</option>
                  <option  value="SUND">Sunday</option>
            </select>
</div>
    )
  }
}
