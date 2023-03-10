import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <NavLink to="/" className="btn btn-link">
        Home
      </NavLink>
      <NavLink to="/People" className="btn btn-link">
        People
      </NavLink>
      <NavLink to="/Starships" className="btn btn-link">
        Starships
      </NavLink>
      <NavLink to="/Planets" className="btn btn-link">
        Planets
      </NavLink>
      <NavLink to="/Login" className="btn btn-primary">
        Login
      </NavLink>
    </>
  )
}
