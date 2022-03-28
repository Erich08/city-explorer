import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Weather.css';

class Weather extends Component {
  render() {
    return (
      <div className='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.date}</Card.Title>
            <Card.Img
              src={`https://weatherbit.io${this.props.icon}`}
              alt='test'
            />
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>
              High: {this.props.high}
              {'\u2109'}
            </Card.Text>
            <Card.Text>
              Low: {this.props.low}
              {'\u2109'}
            </Card.Text>
            <Card.Text>Wind Speed: {this.props.windspd} MPH</Card.Text>
            <Card.Text>Wind Direction: {this.props.windir}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Weather;
