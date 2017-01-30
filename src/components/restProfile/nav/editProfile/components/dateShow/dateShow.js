import React from 'react'
import './dateShow.scss'
export default class displayDay extends React.Component{
  render(){
    const thing = this.props.dates.map(function(sec,index) {
      var keyVal = sec[Object.keys(sec)[0]]
        return(
        <div key = {index}>
          <h9>{Object.keys(sec)[0]}</h9>
        <br/>
        {sec[Object.keys(sec)[0]].Open?
          <div>
              <p>Open:{sec[Object.keys(sec)[0]].Close}</p>
              <p>Close:{sec[Object.keys(sec)[0]].Open}</p>
          </div>
          :
           <p>Closed:{sec[Object.keys(sec)[0]].Close}</p>
        }
        </div>
        )


    })

  return(
    <div className='container'>
      <div className='box'>
        {thing}
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

//
//
// const thing = this.props.dates.map(function(sec,index) {
//   var keyVal = sec[Object.keys(sec)[0]]
//   for (var variable in (keyVal)) {
//     console.log('keyVal',keyVal);
//
//     return(
//     <div key = {index}>
//       <h9>{Object.keys(sec)[0]}</h9>
//     <p>{variable}:{keyVal[variable]}</p>
//     </div>
//     )
//   }
//
// })
