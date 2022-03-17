import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        {this.props.locationSearch.display_name && (
          <h1>
            The city we searched for is {this.props.locationSearch.display_name}{' '}
            at latitude/longitude: {this.props.locationSearch.lat}
            {this.props.locationSearch.lon}
          </h1>
        )}
      </div>
    );
  }
}

export default Main;
