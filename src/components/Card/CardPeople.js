import React, { Component } from 'react'

export class CardPeople extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.name}</h3>
        <p>Gender: {this.props.gender}</p>
        <p>Birth Year: {this.props.birthYear}</p>
        <p>Height: {this.props.height}</p>
        <p>Mass: {this.props.mass}</p>
        <p>Eye Color: {this.props.eyeColor}</p>
      </div>
    )
  }
}
