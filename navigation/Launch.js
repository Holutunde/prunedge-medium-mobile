import React, { useEffect } from 'react'
import { View, AsyncStorage } from 'react-native'
import { useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import { saveUser } from '../redux/actions/auth'

const Launch = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    // AsyncStorage.clear()
    redirect()
  }, [])

  const redirect = async () => {
    try {
      const user = await AsyncStorage.getItem('user')
      const token = await AsyncStorage.getItem('token')

      if (token && user) {
        dispatch(saveUser(JSON.parse(token), JSON.parse(user)))
        navigation.navigate('Login')
      } else navigation.navigate('Onboarding')
    } catch (err) {
      console.log('launch error', err)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Loader />
    </View>
  )
}

export default Launch
