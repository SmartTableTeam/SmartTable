import React from 'react'
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
      backgroundColor:'mistyrose',
      height:'35px',width:'60px'
    }
    const offStyle={
      backgroundColor:'red',
      height:'25px',width:'60px'
    }
    const oneOffGenerate=this.state.one?onStyle:offStyle
    const twoOffGenerate=this.state.two?onStyle:offStyle
    const threeOffGenerate=this.state.three?onStyle:offStyle

    return(
      <div className ='nav'>
        <div className='containIt'>
          <div style={oneOffGenerate} ref='checkMe1' onClick={this.desypher.bind(this,'one')} className='miniBox'><p>One</p></div>
          <div style={twoOffGenerate}onClick={this.desypher.bind(this,'two')} ref='checkMe2' className='miniBox'><p>Two</p></div>
          <div style={threeOffGenerate}onClick={this.desypher.bind(this,'three')} ref='checkMe3' className='miniBox'><p>three</p></div>
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
