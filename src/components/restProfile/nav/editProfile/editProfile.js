import React from 'react'
import './editProfile.scss'
export default class editProfile extends React.Component{
  constructor(props){
    super(props)
    this.state={
        Day:'',
        Open:'',
        Close:''
    }
  }
  pushTime(event){
    event.preventDefault();
    console.log('Clicked ', event.target.value);
    console.log(event.target.Day);
    console.log(event.target.Open);
    console.log(event.target.Close);

    return;
  }
  render(){

    return(

<div className = 'Jumbo'>
  <div className='left'>
      <div className='imageContain'>
        <div className='image'>
        </div>
      </div>

    <div className="timeContain">
      <div className='time'>
        <div className='top'>
        </div>
    <div className='bot'>
        <form onSubmit={this.pushTime.bind(this)>
            <select id='Day'>
                  <option  value="MON">Monday</option>
                  <option  value="TUES">Teusday</option>
                  <option  value="WEDN">Wednesday</option>
                  <option  value="THUR">Thursday</option>
                  <option  value="FRID">Friday</option>
                  <option  value="SATU">Saturday</option>
                  <option  value="SUND">Sunday</option>
            </select>
            <select id ='Open'>
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
            <select id = 'Close'>
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
          <button onClick={this.pushTime.bind(this)}>Add Hours</button>
      </form>
    </div>
  </div>
</div>
</div>


    <div className='right'>
      <div className='innerRight'>
              <p>Update Business Details</p>
              <p>Keep up to date with your community and update!</p>
              <div className='box'>
                <h4>Insert Name</h4>
                <input className='textBox'type='text' placeholder='Enter Name of company'/>
              </div>
              <div className='box'>
                <h4>Insert Address</h4>
                <input className='textBox'type='text' placeholder='Enter Street Address'/>
              </div>
              <div className='box'>
                <h4>Insert City</h4>
                <input className='textBox'type='text' placeholder='Enter City'/>
              </div>
      <div className='box'>
          <select>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
      </div>

                <div className='box'>
                  <h4>ZIP</h4>
                  <input className='textBox'type='text' placeholder='33133'/>
                </div>
                <div className='box'>
                  <h4>Phone</h4>
                  <input className='textBox'type='text' placeholder='(305)912-0125'/>
                </div>
                <div className='box'>
                  <h4>Website</h4>
                  <input className='textBox'type='text' placeholder='Enter website URL'/>
                </div>
                <div className='box'>
                  <h4>Insert type</h4>
                  <input className='textBox'type='text' placeholder='Enter type'/>
                </div>
      </div>
    </div>
</div>
</div>


    )
  }
}
