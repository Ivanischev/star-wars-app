import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { People } from './pages/People'
import { Starships } from './pages/Starships'
import { Planets } from './pages/Planets'
import { Login } from './components/Login'
import { ErrorPage } from './pages/ErrorPage'

const App = () => {
  // AuthContextProvider()
  return (
    <>
      <div className="App">
        <Router>
          <div className="header">
            <Link to="/">
              <button>People</button>
            </Link>
            <Link to="/Starships">
              <button>Starships</button>
            </Link>
            <Link to="/Planets">
              <button>Planets</button>
            </Link>
            <Link to="/Login">
              <button>Login</button>
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/Starships" element={<Starships />} />
            <Route path="/Planets" element={<Planets />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
