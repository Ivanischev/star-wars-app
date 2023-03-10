import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../components/helpers/useAuth'

export const Navigation = () => {
  const { token } = useAuth()
  return (
    <div className="navigation">
      <NavLink to="/" className="btn btn-link">
        Home
      </NavLink>
      {token ? (
        <>
          <NavLink to="/People" className="btn btn-link">
            People
          </NavLink>
          <NavLink to="/Starships" className="btn btn-link">
            Starships
          </NavLink>
          <NavLink to="/Planets" className="btn btn-link">
            Planets
          </NavLink>
        </>
      ) : (
        ''
      )}

      <NavLink to="/Login" className="btn btn-primary">
        {token ? 'Logout' : 'Login'}
      </NavLink>
    </div>
  )
}
