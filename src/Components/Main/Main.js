import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        {this.props.locationSearch.display_name && (
          <div>
            <h1>{this.props.locationSearch.display_name}.</h1>
            {this.props.weatherArr.map((data, idx) => (
              <Weather
                weatherArr={this.props.weatherArr}
                key={idx}
                date={data.date}
                description={data.description}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
