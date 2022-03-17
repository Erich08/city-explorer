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
    };
  }

  handleLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.locationSearch}&format=json`;
    const searched = await axios.get(url);
    console.log(searched.data[0]);
    this.setState({
      locationObj: searched.data[0],
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ locationSearch: event.target.value });
  };
  render() {
    return (
      <div className='App'>
        <Search
          handleLocation={this.handleLocation}
          handleChange={this.handleChange}
        />

        <Main locationSearch={this.state.locationObj} />
        {this.state.locationObj.display_name && (
          <Image
            className='map'
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=10`}
            alt={this.state.locationObj.display_name}
          />
        )}
        {this.state.locationObj.display_name && (
          <p>
            Latitude: {this.state.locationObj.lat} Longitude:{' '}
            {this.state.locationObj.lon}
          </p>
        )}
      </div>
    );
  }
}

export default App;
