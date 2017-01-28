import React from 'react'
import '../editProfile.scss'

export default class ChooseDay extends React.Component{

render(){
  return(
    <div className='box'>
      <select id='Day' onChange={this.props.func.bind(this)} >
                  <option  value="Monday">Monday</option>
                  <option  value="Tuesday">Teusday</option>
                  <option  value="Wednesday">Wednesday</option>
                  <option  value="Thursday">Thursday</option>
                  <option  value="Friday">Friday</option>
                  <option  value="Saturday">Saturday</option>
                  <option  value="Sunday">Sunday</option>
            </select>
</div>
    )
  }
}
