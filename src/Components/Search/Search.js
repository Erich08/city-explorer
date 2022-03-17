import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className='search'>
        <input onChange={this.props.handleChange}></input>

        <button className='search-btn' onClick={this.props.handleLocation}>
          Explore!
        </button>
      </div>
    );
  }
}

export default Search;
