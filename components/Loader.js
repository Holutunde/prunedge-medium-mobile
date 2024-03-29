import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loader = ({ backgroundColor = '#fff', color = 'red' }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color={color} animating size="large" />
    </View>
  )
}

export default Loader
