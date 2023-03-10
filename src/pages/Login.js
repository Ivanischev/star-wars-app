import React from 'react'
import { Button } from '../components/common/Button'
import { Title } from '../components/common/Title'
import { useAuth } from '../components/helpers/useAuth'
import { OnLogout } from './OnLogout'

export function Login() {
  const { token, onLogin } = useAuth()

  return (
    <>
      {token ? (
        <OnLogout />
      ) : (
        <>
          <Title text="Login Page" />
          <p>Login please!</p>
          <div className="btn-group">
            <Button className="btn btn-success" onClick={onLogin} text="Sign in" />
          </div>
        </>
      )}
    </>
  )
}
