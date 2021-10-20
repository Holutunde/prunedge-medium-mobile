import React, { useEffect } from 'react'
import { View } from 'react-native'
import Loader from '../components/Loader'

const Launch = ({ navigation }) => {
  useEffect(() => {
    redirect()
  }, [])

  const redirect = () => {
    navigation.navigate('Onboarding')
  }
  return (
    <View style={{ flex: 1 }}>
      <Loader />
    </View>
  )
}

export default Launch
