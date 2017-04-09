import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="Result">

          <h2>{this.props.title}</h2>

        <p>Nombre d'étoiles : {this.props.starships}</p>

        <p>Nombre de types de vaisseaux : {this.props.vehicles}</p>

      </div>
    );
  }
}

export default Result;
