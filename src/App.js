import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Main from './Components/Main/Main';
import Search from './Components/Search/Search';

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
      </div>
    );
  }
}

export default App;
