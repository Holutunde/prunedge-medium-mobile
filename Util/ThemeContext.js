import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [click, setClick] = useState('false')

  const toggleTheme = () => {
    setTheme(() => (theme === 'light' ? 'dark' : 'light'))
    setClick(() => (theme === 'light' ? true : false))
  }

  console.log(click)
  return (
    <ThemeContext.Provider value={{ theme, click, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
