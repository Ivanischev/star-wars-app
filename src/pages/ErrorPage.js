import React from 'react'
import { Button } from '../components/common/Button'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  const goHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <h1>This page does not exist!</h1>
      <p>
        Make sure you are <b>Logged In</b>
      </p>
      <div className="btn-group">
        <Button text="Back to Home" className={'btn'} onClick={goHomePage} />
        {/* <Button text="Back" className={'btn'} onClick={() => navigate(-1)} /> */}
        <NavLink to="/Login" className="btn btn-primary">
          Login
        </NavLink>
      </div>
    </>
  )
}

export { ErrorPage }
