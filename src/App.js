import './App.scss'
import React, { Component } from 'react'
import People from './components/People'
import Starships from './components/Starships'
import Planets from './components/Planets'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeComponent: 'peoples',
    }
  }

  showPeoples = () => {
    this.setState({ activeComponent: 'peoples' })
  }
  showPlanets = () => {
    this.setState({ activeComponent: 'planets' })
  }
  showStarships = () => {
    this.setState({ activeComponent: 'starships' })
  }

  render() {
    let activeComponent = 'peoples'

    if (this.state.activeComponent === 'planets') {
      activeComponent = <Planets />
    } else if (this.state.activeComponent === 'starships') {
      activeComponent = <Starships />
    } else if (this.state.activeComponent === 'peoples') {
      activeComponent = <People />
    }
    return (
      <div className="App">
        <div className="header">
          <button onClick={this.showPeoples}>People</button>
          <button onClick={this.showStarships}>Starships</button>
          <button onClick={this.showPlanets}>Planets</button>
        </div>
        {activeComponent}
      </div>
    )
  }
}

export default App
