import React from 'react'
import { Button } from '../components/common/Button'
import { useAuth } from '../components/helpers/useAuth'

export function Login() {
  const { onLogin } = useAuth()

  return (
    <>
      <h1>Login Page</h1>
      {/* <button onClick={onLogin}>Sign in</button> */}
      <Button className="btn btn-success" onClick={onLogin} text="Sign in" />
    </>
  )
}
