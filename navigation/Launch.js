import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../components/Loader'
import Auth from './Auth'

const Launch = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [viewedOboarding, setViewOboarding] = useState(false)

  useEffect(() => {
    AsyncStorage.clear()
    redirect()
  }, [])

  const isOnboarded = async () => {
    const onboarded = await AsyncStorage.getItem('onboarded')
    return !!onboarded
  }

  const redirect = async () => {
    try {
      const onboarded = await isOnboarded()
      if (!onboarded) navigation.navigate('Onboarding')
      else if (onboarded) navigation.navigate('Auth')
    } catch (err) {
      console.log('launch error', err)
      navigation.navigate('Onboarding')
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Loader />
    </View>
  )
}

export default Launch
