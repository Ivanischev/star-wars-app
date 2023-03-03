import React, { Component } from 'react'
import { ListItem } from './ListItem'

class Starships extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starships: [],
      starship: null,
      hasError: false,
      isLoading: false,
    }
  }

  getStarships = () =>
    fetch('https://swapi.dev/api/starships/')
      .then((response) => response.json())
      .then((data) => this.setStarships(data.results))
      .catch((error) => this.setState({ error }))

  setStarships(data) {
    this.setState({
      starships: [...data],
    })
  }

  getStarshipById = (id) => {
    this.setState({ hasError: false })
    fetch(`https://swapi.dev/api/starships/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if ('detail' in data) {
          this.setState({ hasError: true })
        } else this.setStarship(data)
      })
      .catch((error) => this.setState({ hasError: true }))
  }

  setStarship(data) {
    this.setState({
      starship: {
        name: data.name,
        cost_in_credits: data.cost_in_credits,
        hyperdrive_rating: data.hyperdrive_rating,
        passengers: data.passengers,
        manufacturer: data.manufacturer,
        model: data.model,
      },
    })
  }

  componentDidMount() {
    this.getStarships()
  }

  render() {
    return (
      <>
        <h1>Starships</h1>
        <div className="row">
          <ul className="list">
            {this.state.starships.map((item, index) => (
              <ListItem key={index} name={item.name} onClick={() => this.getStarshipById(index + 1)} />
            ))}
          </ul>
          {this.state.hasError ? (
            <div className="card">
              <h4>No Information</h4>
            </div>
          ) : (
            <div className="card">
              <h3>{this.state.starship?.name}</h3>
              <p>Cost: {this.state.starship?.cost_in_credits}</p>
              <p>Hyperdrive Rating: {this.state.starship?.hyperdrive_rating}</p>
              <p>Passengers: {this.state.starship?.passengers}</p>
              <p>Manufacturer: {this.state.starship?.manufacturer}</p>
              <p>Model: {this.state.starship?.model}</p>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Starships
