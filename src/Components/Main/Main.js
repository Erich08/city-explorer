import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        {this.props.locationSearch.display_name && (
          <div>
            {this.props.weatherArr.map((data, idx) => (
              <Weather
                weatherArr={this.props.weatherArr}
                key={idx}
                date={data.date}
                description={data.description}
                low={data.low}
                high={data.high}
                icon={data.icon}
                windspd={data.windspd}
                windir={data.winddir}
                rain={data.rain}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
