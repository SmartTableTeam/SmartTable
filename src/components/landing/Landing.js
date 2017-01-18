import React from 'react'
import Nav from './NavBar/Navigation.js'
import Login from './login/Login.js'
import Search from './searchBar/Search.js'
import '../main.scss'
import './landing.scss'



export default class Landing extends React.Component{
  constructor(props){
    super(props)
    this.state={
      val:false
    }
  }
  // componentDidMount(){
  //   this.changesIt(!this.state.val);
  // }

  changesIt(){
    this.setState({val:false})
  }



  activateRender(value){
    console.log('string', value);
    if(value!=undefined)this.setState({val:value})

    // document.getElementById('render').className+='none'
    return;
  }


  render(){
    return(
      <div className='LandingContainer' >
        <Nav func={this.activateRender.bind(this)} />
        <div className="ifContent">
          {
          this.state.val?<Login funky={this.changesIt.bind(this)} /> : <Search />
          }
        </div>
      </div>

    )
  }
}
