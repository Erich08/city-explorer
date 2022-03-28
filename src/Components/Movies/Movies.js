import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Movies.css';

class Movies extends Component {
  render() {
    return (
      <div className='movie-cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Released: {this.props.releaseDate}</Card.Text>
            <Card.Text>{this.props.overview}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Movies;
