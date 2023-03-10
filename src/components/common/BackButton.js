import React from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()
  return <Button text="Go Back" className={'btn btn-back'} onClick={() => navigate(-1)} />
}
