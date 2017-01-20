import React from 'react'
import '../../../main.scss'
import './boxComponents.scss'

export default class TheBoxNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      one:false,
      two:false,
      three:false
    }
  }
  render(){
    const onStyle={
      backgroundColor:'white',
    }
    const offStyle={
      backgroundColor:'lightgray',
    }
    const oneOffGenerate=this.state.one?onStyle:offStyle
    const twoOffGenerate=this.state.two?onStyle:offStyle
    const threeOffGenerate=this.state.three?onStyle:offStyle

    return(
      <div className="upperDash">
        <div className='containIt'>
          <div style={oneOffGenerate} ref='checkMe1' onClick={this.desypher.bind(this,'one')} className='miniBox'><p>Orders</p></div>
          <div style={twoOffGenerate}onClick={this.desypher.bind(this,'two')} ref='checkMe2' className='miniBox'><p>Menu</p></div>
          <div style={threeOffGenerate}onClick={this.desypher.bind(this,'three')} ref='checkMe3' className='miniBox'><p>Tables</p></div>
        </div>

        <div className="dashTitle">
          <h2>Dashboard</h2>
        </div>
      </div>
    )
  }

  desypher(hi){
    switch(hi){
      case 'one':
        this.setState({one:true,two:false,three:false})
        break;
      case 'two':
        this.setState({two:true,one:false,three:false})
        break;
      case 'three':
        this.setState({three:true,two:false,one:false})
        break;
    }
  }
}
