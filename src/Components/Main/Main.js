import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        {this.props.locationSearch.display_name && (
          <h1>{this.props.locationSearch.display_name}.</h1>
        )}
      </div>
    );
  }
}

export default Main;
