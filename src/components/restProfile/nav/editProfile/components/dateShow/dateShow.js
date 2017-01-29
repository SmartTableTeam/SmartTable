import React from 'react'
import './dateShow.scss'
export default class displayDay extends React.Component{
  render(){
    const thing = this.props.dates.map(function(sec,index) {
      var keyVal = sec[Object.keys(sec)]
      console.log(Object.keys(sec)[0]);
      for (var variable in (keyVal)) {
        console.log('keyVal',keyVal);
        console.log('variable',variable);
        console.log('both',keyVal[variable]);
        
        return(
          <div>
          <h1>{Object.keys(sec)[0]}</h1>
        <p>{keyVal[variable]}</p>
        </div>
        )
      }

    })
  return(
    <div className='container'>
      <div className='box'>


      </div>

    </div>
      )
  }
}
//
// if(sec.Closed)return {Object.keys(sec)}
// else return(
//   <div key ={index}>
//     <h4>{Object.keys(sec)}</h4>
//     <p>{sec.Open}/{sec.Close}</p>
// </div>
// )
