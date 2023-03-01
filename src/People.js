import React, { Component } from 'react'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: [],
      person: null,
    }
  }

  getHeroes = () =>
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => this.setHeroes(data.results))
      .catch((error) => this.setState({ error, isLoading: false }))

  setHeroes(data) {
    this.setState({
      heroes: [...data],
    })
  }

  getHeroById = (number) =>
    fetch(`https://swapi.dev/api/people/${number}`)
      .then((response) => response.json())
      .then((data) => this.setPerson(data))
      .catch((error) => this.setState({ error, isLoading: false }))

  showInfoHandler = (index) => {
    this.getHeroById(index + 1)
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
        <h1>Heroes</h1>
        <div className="row">
          <ul className="list">
            {this.state.heroes.map((hero, index) => (
              <li key={index}>
                <button onClick={() => this.showInfoHandler(index)}>{hero.name}</button>
              </li>
            ))}
          </ul>
          <div className="card">
            <h3>{this.state.person?.name}</h3>
            <p>Gender: {this.state.person?.gender}</p>
            <p>Birth Year: {this.state.person?.birth_year}</p>
            <p>Height: {this.state.person?.height}</p>
            <p>Mass: {this.state.person?.mass}</p>
            <p>Eye Color: {this.state.person?.eye_color}</p>
          </div>
        </div>
      </>
    )
  }
}

export default People
