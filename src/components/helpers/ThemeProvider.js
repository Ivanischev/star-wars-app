import { useState } from 'react'
import { ThemeContext } from '../../App'

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
}
