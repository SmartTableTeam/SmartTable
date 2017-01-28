import React from 'react'
import './editProfile.scss'
import ChooseTime from './components/chooseTime.js'
import ChooseDay from './components/chooseDay.js'
import DateShow from './components/dateShow/dateShow.js'
import BasicInfo from './components/BasicInfo.js'

export default class editProfile extends React.Component{
  constructor(props){
    super(props)
    this.state={
        Day:'',
        Open:'',
        Close:'',
        timeEvent:[]

    }
  }

  logState(){
    if(this.state.timeEvent.length===0)this.setState({timeEvent:[{Day:this.state.Day,Open:this.state.Open,Close:this.state.Close}]})
    else this.setState((state)=>({timeEvent:state.timeEvent.concat([{Day:this.state.Day,Open:this.state.Open,
                                                                  Close:this.state.Close}])}))


      console.log(this.state);


  }

  pushTime(event){
    event.preventDefault();
    console.log(event.target.id,event.target.value);
    var stateObject = function(){
      let returnObj={}
      returnObj[this.target.id]=this.target.value

        return returnObj
    }.bind(event)();
    this.setState(stateObject)
    console.log(this.state);

  }

  render(){
    const showDate = this.state.timeEvent.map((date,index)=>(
      <DateShow className='thisTime'key={index}
        day={date.Day}
        open={date.Open}
        close={date.Close}
      />
    ))
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
            {showDate}
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
      <div className='innerRight'>
        <div className='innerInRight'>
        <BasicInfo/>
        </div>
      </div>
    </div>

  </div>
  )}
}
