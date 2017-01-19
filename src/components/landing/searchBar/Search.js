import React from 'react'
import './search.scss';

export default class Search extends React.Component {

  render() {

    return (
      <div className="landing-main">
      <h1>Smart Table</h1>
      <h3>A smarter way to dine in and take out</h3>
        <div className="search-bar">
          <input type="text" placeholder="Find A Location" />
          <button className="main-button">Search</button>
        </div>
      </div>
    )
  }
}
