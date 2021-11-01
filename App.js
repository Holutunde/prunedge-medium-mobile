import React, { useContext } from 'react'
import AppContent from './AppContent'
import ThemeProvider from './Util/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
