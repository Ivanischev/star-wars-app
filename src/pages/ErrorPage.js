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
      <div className="btn-group">
        <button className="btn btn-primary" onClick={goHomePage}>
          Back to Home
        </button>
        <button className="btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </>
  )
}

export { ErrorPage }
