import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import { saveUser } from '../redux/actions/auth'
import OnBoarding from '../screens/Onboarding'
import Login from '../screens/Login'

const Launch = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [viewedOboarding, setViewOboarding] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    redirect()
  }, [])

  const redirect = async () => {
    try {
      const user = await AsyncStorage.getItem('user')
      if (!user) {
        setViewOboarding(true)
      } else {
        setViewOboarding(false)
      }
    } catch (err) {
      console.log('lauch error', err)
    } finally {
      setLoading(false)
    }
  }

  // const redirect = async () => {
  //   try {
  //     const user = await AsyncStorage.getItem('user')
  //     const token = await AsyncStorage.getItem('token')

  //     if (token && user) {
  //       dispatch(saveUser(JSON.parse(token), JSON.parse(user)))
  //       navigation.navigate('Login')
  //     } else navigation.navigate('Onboarding')
  //   } catch (err) {
  //     console.log('launch error', err)
  //   }
  // }
  return (
    <View style={{ flex: 1 }}>
      {loading ? <Loader /> : viewedOboarding ? <Login /> : <OnBoarding />}
    </View>
  )
}

export default Launch
