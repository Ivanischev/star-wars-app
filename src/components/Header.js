import React, { useContext } from 'react'
import { ContainerFluid } from '../components/common/ContainerFluid'
import { Navigation } from './Navigation'
import { ToggleButton } from '../components/common/ToggleButton'
import { ThemeContext } from '../App'

export function Header() {
  const theme = useContext(ThemeContext)
  const className = 'header header-' + theme.theme
  return (
    <>
      <div className={className}>
        <ContainerFluid>
          <h4 className="logo">Star Wars App</h4>
          <Navigation />
          <ToggleButton />
        </ContainerFluid>
      </div>
    </>
  )
}
