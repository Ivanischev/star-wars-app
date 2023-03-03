import React, { Component } from 'react'

export class ListItem extends Component {
  render() {
    return (
      <li>
        <button onClick={this.props.onClick}>{this.props.name}</button>
      </li>
    )
  }
}
