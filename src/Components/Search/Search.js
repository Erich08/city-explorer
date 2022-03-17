import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className='search-container'>
        <h1>Welcome to City Explorer!</h1>
        <div className='search'>
          <input onChange={this.props.handleChange}></input>

          <button className='search-btn' onClick={this.props.handleLocation}>
            Explore!
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
