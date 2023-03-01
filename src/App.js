import './App.scss'
import React, { Component } from 'react'
import People from './People'
import Starships from './Starships'
import Planets from './Planets'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoading: false,
      show: false,
      activeComponent: null,
    }
  }

  showPeoples = () => {
    this.setState({ activeComponent: 'peoples' })
  }
  showPlanets = () => {
    // this.setState({
    //   show: true,
    // })
    this.setState({ activeComponent: 'planets' })
  }
  showStarships = () => {
    this.setState({ activeComponent: 'starships' })
  }

  render() {
    let activeComponent = null

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

        {/* <button onClick={() => this.showPlanets()}>Planets</button> */}
        {/* {this.state.show ? <div>Not Found</div> : <People />} */}
        {activeComponent}
      </div>
    )
  }
}

export default App
