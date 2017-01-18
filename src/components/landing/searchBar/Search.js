import React from 'react'
import './search.scss';

export default class Search extends React.Component {

  render() {

    return (
      <div className="search-bar">
        <input type="text" />
        <button className="main-button">Search</button>
      </div>
    )
  }
}
