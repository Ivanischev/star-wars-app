import React, { Component } from 'react'

export class CardPlanet extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.name}</h3>
        <p>Rotation period: {this.props.rotation_period}</p>
        <p>Population: {this.props.population}</p>
        <p>Terrain: {this.props.terrain}</p>
        <p>Climate: {this.props.climate}</p>
      </div>
    )
  }
}
