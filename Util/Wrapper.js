import React, { useContext } from 'react'
import { View, StatusBar } from 'react-native'

import { ThemeContext } from './ThemeContext'

export default ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle={`${theme === 'light' ? 'dark' : 'light'}-content`} />

      <View
        style={{
          flex: 1,
        }}
      >
        {children}
      </View>
    </View>
  )
}
