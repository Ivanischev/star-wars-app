import React, { Component } from 'react'
import { ListItem } from '../components/ListItem'
import { CardPlanet } from '../components/Card/CardPlanet'

export class Planets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
      planet: null,
      hasError: false,
      isLoading: false,
    }
  }

  getPlanets = () =>
    fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((data) => this.setPlanets(data.results))
      .catch((error) => this.setState({ error, isLoading: false }))

  setPlanets(data) {
    this.setState({
      planets: [...data],
    })
  }

  getPlanetById = (id) => {
    this.setState({ hasError: false })
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if ('detail' in data) {
          this.setState({ hasError: true })
        } else this.setPlanet(data)
      })
      .catch((error) => this.setState({ hasError: true }))
  }

  setPlanet(data) {
    this.setState({
      planet: {
        name: data.name,
        rotation_period: data.rotation_period,
        population: data.population,
        terrain: data.terrain,
        climate: data.climate,
      },
    })
  }

  componentDidMount() {
    this.getPlanets()
  }

  render() {
    return (
      <>
        <h1>Planets</h1>
        <div className="row">
          <ul className="list">
            {this.state.planets.map((planet, index) => (
              <ListItem key={index} name={planet.name} onClick={() => this.getPlanetById(index + 1)} />
            ))}
          </ul>
          {this.state.hasError ? (
            'Not Found'
          ) : (
            <CardPlanet
              name={this.state.planet?.name}
              rotation_period={this.state.planet?.rotation_period}
              population={this.state.planet?.population}
              terrain={this.state.planet?.terrain}
              climate={this.state.planet?.climate}
            />
          )}
        </div>
      </>
    )
  }
}
