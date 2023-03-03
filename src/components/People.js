import React, { Component } from 'react'
import { ListItem } from './ListItem'
import { CardPeople } from './Card/CardPeople'

export class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: [],
      person: null,
      hasError: false,
      isLoading: false,
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
    let person = this.state.person
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
            <CardPeople
              name={person?.name}
              gender={person?.gender}
              birthYear={person?.birth_year}
              height={person?.height}
              mass={person?.mass}
              eyeColor={person?.eye_color}
            />
          )}
        </div>
      </>
    )
  }
}
