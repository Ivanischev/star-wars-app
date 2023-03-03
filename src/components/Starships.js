import React, { Component } from 'react'
import { ListItem } from './ListItem'
import { CardStarship } from './Card/CardStarship'

export class Starships extends Component {
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
            <CardStarship
              name={this.state.starship?.name}
              cost_in_credits={this.state.starship?.cost_in_credits}
              hyperdrive_rating={this.state.starship?.hyperdrive_rating}
              passengers={this.state.starship?.passengers}
              manufacturer={this.state.starship?.manufacturer}
              model={this.state.starship?.model}
            />
          )}
        </div>
      </>
    )
  }
}
