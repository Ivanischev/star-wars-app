import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { People } from './pages/People'
import { Starships } from './pages/Starships'
import { Planets } from './pages/Planets'
import { Login } from './pages/Login'
import { ErrorPage } from './pages/ErrorPage'
import { Navigation } from './components/Navigation'

const App = () => {
  // AuthContextProvider()
  return (
    <>
      <div className="App">
        <Router>
          <div className="header">
            <Navigation />
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
