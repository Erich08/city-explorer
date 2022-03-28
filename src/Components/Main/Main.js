import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Movies from '../Movies/Movies';
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
        {this.props.locationSearch.display_name && (
          <div>
            {this.props.movieArr.map((data, idx) => (
              <Movies
                key={idx}
                movieArr={this.props.movieArr}
                title={data.movieTitle}
                overview={data.overview}
                poster={data.poster}
                releaseDate={data.releaseDate}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
