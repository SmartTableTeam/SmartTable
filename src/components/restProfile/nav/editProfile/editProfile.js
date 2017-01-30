import React from 'react'
import './editProfile.scss'
import ChooseTime from './components/chooseTime.js'
import ChooseDay from './components/chooseDay.js'
import DateShow from './components/dateShow/dateShow.js'
import BasicInfo from './components/BasicInfo.js'
import axios from 'axios'
export default class editProfile extends React.Component{
  constructor(props){
    super(props)
    this.state={
        Day:'',
        Open:'',
        Close:'',
        DOPeration:[

        {
          'Monday':{
            Close:'Closed Today'
          }
        },
        { Tuesday:{
            Close:'Closed Today'
          }
        },
        { Wednesday:{
            Close:'Closed Today'
          }
        },
        { Thursday:{
            Close:'Closed Today'
          }
        },
        { Friday:{
            Close:'Closed Today'
          }
        },
        { Saturday:{
            Close:'Closed Today'
          }
        },
        { Sunday:{
            Close:'Closed Today'
          }
        }
      ],
      file:'',
      imagePreviewUrl:''
    }
  }
  // componentWillMount(){
  //   axios.get('/api/auth/loggedIn').then(function(response) {
  //     console.log(response.data);
  //   })
  //
  // }
  handleImageSubmit(e){
    e.preventDefault();
    console.log('handle Uploading',this.state.file);
  }
  handleImageChange(e){
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    render.onloadend=()=>{
      this.setState({file:file,
                    imagePreviewUrl:reader.result})
    }
    reader.readAsDataURL()
  }
  logState(){
    var timeEvent = this.state.DOPeration
    for (var i = 0; i < this.state.DOPeration.length; i++) {
      if(this.state.DOPeration[i].hasOwnProperty(this.state.Day)){
        timeEvent[i]={
          [this.state.Day]:{
            Open:this.state.Open,
            Close:this.state.Close
          }
        }
      }
    }
    this.setState({DOPeration:timeEvent})

  }

  pushTime(event){
    event.preventDefault();
    var stateObject = function(){
      let returnObj={}
      returnObj[this.target.id]=this.target.value

        return returnObj
    }.bind(event)();
    this.setState(stateObject)

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
            <DateShow
              dates={this.state.DOPeration}
            />
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
