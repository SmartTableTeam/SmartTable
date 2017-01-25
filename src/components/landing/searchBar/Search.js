import React from 'react'
import './search.scss';
import axios from 'axios'


export default class Search extends React.Component {
loghere(){
  console.log('clicked');
    axios.get('http://localhost:1701/api/restaurants/address')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}
  render() {
    return (
      <div className="landing-main">
      <h1>Smart Table</h1>
      <h3>A smarter way to dine in and take out</h3>
        <div className="search-bar">
          <input type="text" placeholder="Find A Location" />
          <button onClick={this.loghere.bind(this)}className="main-button">Search</button>
        </div>
      </div>
    )
  }
}
