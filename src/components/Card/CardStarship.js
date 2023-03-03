import React, { Component } from 'react'

export class CardStarship extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.name}</h3>
        <p>Cost: {this.props.cost_in_credits}</p>
        <p>Hyperdrive Rating: {this.props.hyperdrive_rating}</p>
        <p>Passengers: {this.props.passengers}</p>
        <p>Manufacturer: {this.props.manufacturer}</p>
        <p>Model: {this.props.model}</p>
      </div>
    )
  }
}
