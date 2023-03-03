import React, { Component } from 'react'
import { ListItem } from './ListItem'

class Planets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
      planet: null,
      hasError: false,
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
        climatemass: data.climate,
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
            <div className="card">
              <h3>{this.state.planet?.name}</h3>
              <p>Rotation period: {this.state.planet?.rotation_period}</p>
              <p>Population: {this.state.planet?.population}</p>
              <p>Terrain: {this.state.planet?.terrain}</p>
              <p>Climatemass: {this.state.planet?.maclimatemassss}</p>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Planets
