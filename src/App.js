import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Main from './Components/Main/Main';
import Search from './Components/Search/Search';
import Image from 'react-bootstrap/Image';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSearch: '',
      locationObj: {},
      errorMessage: '',
      weatherArr: [],
      movieArr: [],
    };
  }

  handleLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.locationSearch}&format=json`;
      const searched = await axios.get(url);
      console.log(searched.data[0]);
      this.setState({
        locationObj: searched.data[0],
        errorMessage: '',
      });
      this.weatherData();
      this.movieData();
    } catch (error) {
      this.setState({ errorMessage: error });
      alert(this.state.errorMessage);
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ locationSearch: event.target.value });
  };

  weatherData = async () => {
    try {
      const url = `${process.env.REACT_APP_PORT}/weather?searchQuery=${this.state.locationSearch}&lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}`;
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ weatherArr: response.data });
    } catch (error) {
      this.setState({ errorMessage: error });
      alert(this.state.errorMessage);
    }
  };

  movieData = async () => {
    try {
      const url = `${process.env.REACT_APP_PORT}/movies?searchQuery=${this.state.locationSearch}`;
      const movieResponse = await axios.get(url);
      console.log(movieResponse.data);
      this.setState({ movieArr: movieResponse.data });
    } catch (error) {
      this.setState({ errorMessage: error });
      alert(this.state.errorMessage);
    }
  };

  render() {
    return (
      <div className='App'>
        <Search
          handleLocation={this.handleLocation}
          handleChange={this.handleChange}
        />

        {this.state.locationObj.display_name && (
          <div>
            <h1>{this.state.locationObj.display_name}</h1>
            <Image
              className='map'
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=10`}
              alt={this.state.locationObj.display_name}
            />
          </div>
        )}
        {this.state.locationObj.display_name && (
          <p className='lat-lon'>
            Latitude: {Math.round(this.state.locationObj.lat)} Longitude:{' '}
            {Math.round(this.state.locationObj.lon)}
          </p>
        )}
        <Main
          locationSearch={this.state.locationObj}
          weatherArr={this.state.weatherArr}
          movieArr={this.state.movieArr}
        />
      </div>
    );
  }
}

export default App;
