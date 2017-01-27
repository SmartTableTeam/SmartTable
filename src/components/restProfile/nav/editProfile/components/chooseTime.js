import React from 'react'

export default class ChooseTime extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
  return(
    <div>
    <select id ={this.props.id} onChange={this.props.func.bind(this)}>
        <option  value="00:00">12:00 am</option>
        <option  value="00:30">12:30 am</option>
        <option  value="01:00">1:00 am</option>
        <option  value="01:30">1:30 am</option>
        <option  value="02:00">2:00 am</option>
        <option  value="02:30">2:30 am</option>
        <option  value="03:00">3:00 am</option>
        <option  value="03:30">3:30 am</option>
        <option  value="04:00">4:00 am</option>
        <option  value="04:30">4:30 am</option>
        <option  value="05:00">5:00 am</option>
        <option  value="05:30">5:30 am</option>
        <option  value="06:30">6:30 am</option>
        <option  value="07:00">7:00 am</option>
        <option  value="07:30">7:30 am</option>
        <option  value="08:00">8:00 am</option>
        <option  value="08:30">8:30 am</option>
        <option  value="09:00">9:00 am</option>
        <option  value="09:30">9:30 am</option>
        <option  value="10:00">10:00 am</option>
        <option  value="10:30">10:30 am</option>
        <option  value="11:00">11:00 am</option>
        <option  value="11:30">11:30 am</option>
        <option  value="12:00">12:00 pm</option>
        <option  value="12:30">12:30 pm</option>
        <option  value="13:00">1:00 pm</option>
        <option  value="13:30">1:30 pm</option>
        <option  value="14:00">2:00 pm</option>
        <option  value="14:30">2:30 pm</option>
        <option  value="15:00">3:00 pm</option>
        <option  value="15:30">3:30 pm</option>
        <option  value="16:00">4:00 pm</option>
        <option  value="16:30">4:30 pm</option>
        <option  value="17:00">5:00 pm</option>
        <option  value="17:30">5:30 pm</option>
        <option  value="18:00">6:00 pm</option>
        <option  value="18:30">6:30 pm</option>
        <option  value="19:00">7:00 pm</option>
        <option  value="19:30">7:30 pm</option>
        <option  value="20:00">8:00 pm</option>
        <option  value="20:30">8:30 pm</option>
        <option  value="21:00">9:00 pm</option>
        <option  value="21:30">9:30 pm</option>
        <option  value="22:00">10:00 pm</option>
        <option  value="22:30">10:30 pm</option>
        <option  value="23:00">11:00 pm</option>
        <option  value="23:30">11:30 pm</option>
    </select>
</div>
    )
  }
}
