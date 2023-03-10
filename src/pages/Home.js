import React from 'react'
import { Container } from '../components/common/Container'
import { Title } from '../components/common/Title'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../components/helpers/useAuth'

export function Home() {
  const { token } = useAuth()
  return (
    <div className="home">
      <Container>
        <Title text="About this App" />
        <p>
          All the Star Wars data you've ever wanted: Planets, Spaceships, People, Films and Species From all SEVEN Star
          Wars films
        </p>

        {token ? (
          ' '
        ) : (
          <p>
            Please{' '}
            <NavLink to="/Login" className={'link-underline'}>
              Log In
            </NavLink>{' '}
            to discover!
          </p>
        )}
      </Container>
    </div>
  )
}
