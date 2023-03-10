import React from 'react'
import { ContainerFluid } from '../components/common/ContainerFluid'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <>
      <div className="header">
        <ContainerFluid>
          <h4 className="logo">Star Wars App</h4>
          <Navigation />
        </ContainerFluid>
      </div>
    </>
  )
}
