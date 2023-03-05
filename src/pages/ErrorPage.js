import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  const goHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <h1>This page does not exist!</h1>
      <button onClick={goHomePage}>Back to Home</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export { ErrorPage }
