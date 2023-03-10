import React from 'react'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <div className="home">
      <h1>About this App</h1>

      <p>
        All the Star Wars data you've ever wanted: Planets, Spaceships, People, Films and Species From all SEVEN Star
        Wars films
      </p>

      <p>
        Please{' '}
        <NavLink to="/Login" className={'link-underline'}>
          Log In
        </NavLink>{' '}
        to discover!
      </p>
    </div>
  )
}
