import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <Link to="/">
        <button className="btn btn-link">People</button>
      </Link>
      <Link to="/Starships">
        <button className="btn btn-link">Starships</button>
      </Link>
      <Link to="/Planets">
        <button className="btn btn-link">Planets</button>
      </Link>
      <Link to="/Login">
        <button className="btn btn-primary">Login</button>
      </Link>
    </>
  )
}
