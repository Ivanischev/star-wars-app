import React from 'react'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  const goHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <h1>This page does not exist!</h1>
      <div className="btn-group">
        <Button text="Back to Home" className={'btn btn-primary'} onClick={goHomePage} />
        <Button text="Back" className={'btn'} onClick={() => navigate(-1)} />
      </div>
    </>
  )
}

export { ErrorPage }
