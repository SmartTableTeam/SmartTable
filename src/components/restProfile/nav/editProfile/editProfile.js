import React from 'react'
import './editProfile.scss'
import ChooseTime from './components/chooseTime.js'
import ChooseDay from './components/chooseDay.js'
var array =[]
export default class editProfile extends React.Component{
  constructor(props){
    super(props)
    this.state={
        Day:'',
        Open:'',
        Close:''
    }
  }

  logState(){
    console.log(this.state);
  }
  pushTime(event){
    event.preventDefault();
    var stateObject=function(){
      let returnObj={}
      returnObj[this.target.id]=this.target.value
      return returnObj
    }.bind(event)();

    this.setState(stateObject)
    array.push(this.state)
    if(stateObject)console.log(array);
  }

  render(){
    return(

  <div className = 'Jumbo'>
    <div className='left'>
      <div className='imageContain'>
        <div className='image'>
        </div>
      </div>
      <div className='timeContain'>
        <div className='timeInner'>
          <div className='top'>
          </div>

          <div className='bot'>

            <ChooseDay func={this.pushTime.bind(this)} />
            <ChooseTime id = 'Open' func={this.pushTime.bind(this)} />
            <ChooseTime id='Close' func={this.pushTime.bind(this)}/>
            <button onClick={this.logState.bind(this)}>Add time</button>
          </div>
        </div>
      </div>
    </div>



    <div className='right'>
      <h1>Right</h1>
    </div>

  </div>
  )}
}
