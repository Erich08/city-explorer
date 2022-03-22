import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Weather;
