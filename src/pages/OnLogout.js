import React from 'react'
import { Button } from '../components/common/Button'
import { NavLink } from 'react-router-dom'
import { Title } from '../components/common/Title'
import { useAuth } from '../components/helpers/useAuth'

export function OnLogout() {
  const { onLogout } = useAuth()
  return (
    <>
      <Title text="Log out" />
      <NavLink to="/People" className="btn btn-primary">
        Go Discover
      </NavLink>
      <p>or</p>
      <Button className="btn btn-danger" onClick={onLogout} text="Sign Out" />
    </>
  )
}
