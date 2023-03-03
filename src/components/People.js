import React, { Component } from 'react'
import { ListItem } from './ListItem'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: [],
      person: null,
      hasError: false,
    }
  }

  getHeroes = () =>
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => this.setHeroes(data.results))
      .catch((error) => this.setState({ error }))

  setHeroes(data) {
    this.setState({
      heroes: [...data],
    })
  }

  getHeroById = (id) => {
    this.setState({ hasError: false })
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if ('detail' in data) {
          this.setState({ hasError: true })
        } else this.setPerson(data)
      })
      .catch((error) => this.setState({ hasError: true }))
  }

  setPerson(data) {
    this.setState({
      person: {
        name: data.name,
        gender: data.gender,
        birth_year: data.birth_year,
        height: data.height,
        mass: data.mass,
        eye_color: data.eye_color,
      },
    })
  }

  componentDidMount() {
    this.getHeroes()
  }

  render() {
    return (
      <>
        <h1>People</h1>
        <div className="row">
          <ul className="list">
            {this.state.heroes.map((hero, index) => (
              <ListItem key={index} name={hero.name} onClick={() => this.getHeroById(index + 1)} />
            ))}
          </ul>
          {this.state.hasError ? (
            'Not Found'
          ) : (
            <div className="card">
              <h3>{this.state.person?.name}</h3>
              <p>Gender: {this.state.person?.gender}</p>
              <p>Birth Year: {this.state.person?.birth_year}</p>
              <p>Height: {this.state.person?.height}</p>
              <p>Mass: {this.state.person?.mass}</p>
              <p>Eye Color: {this.state.person?.eye_color}</p>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default People
