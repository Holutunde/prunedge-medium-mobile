import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from 'react-native'
import SvgUri from 'expo-svg-uri'
import Input from '../components/Input'
import * as Animatable from 'react-native-animatable'
import { textColorSecondary } from '../config/colors'
import { Ionicons } from '@expo/vector-icons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Signup = (props, { navigation }) => {
  const [loading, setLoading] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    username: '',
    password: '',
    gender: '',
  })

  const handleInput = (value) => {
    setLoginData({
      ...loginData,
      ...value,
    })
  }

  const showToast = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    )
  }

  const performLogin = async () => {
    setLoading(true)
    const signUrl =
      'https://ecomm-store-proj.herokuapp.com/api/v1/account/signup'
    const email = loginData.email
    const username = loginData.username
    const password = loginData.password
    const gender = loginData.gender
    const details = { email, username, gender, password }
    try {
      const response = await fetch(signUrl, {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      })

      const loginRes = await response.json()
      console.log('Login Response', loginRes)
      console.log(loginRes)
      if (loginRes.success == undefined) {
        const message = `${Object.keys(loginRes)} ${
          Object.values(loginRes)[0][0]
        }`
        showToast(message)
        setLoading(false)

        return
      } else if (loginRes.success == false) {
        const message = loginRes.error
        showToast(message)
        setLoading(false)
        return
      } else {
        setLoading(false)
        console.log('Olutunde')
        // saveToken(loginRes);
        toLogin()
      }
    } catch (error) {
      let message = 'Kindly fill all registration detail'
      setLoading(false)
      showToast(message)
      return
    }
  }

  const toLogin = () => {
    props.navigation.navigate('Login')
  }

  // const continueWithGoogle = () => {
  // 	handleGoogleSignIn(props.navigation);
  // 	Vibration.vibrate();

  // };

  return (
    <View style={styles.content}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <SvgUri
              style={styles.loginVector}
              source={require('../assets/icon/setting-icon.svg')}
            />
            <View style={styles.line}></View>

            <Input
              value={loginData.email}
              onChangeText={(email) => handleInput({ email })}
              placeholder="Email Address"
              autoCapitalize="none"
              keyboardType="email-address"
              LeftIcon={() => <Feather name="lock" size={20} />}
            />
            <Input
              value={loginData.username}
              onChangeText={(username) => handleInput({ username })}
              placeholder="Username"
              autoCapitalize="none"
            />
            <Input
              value={loginData.gender}
              onChangeText={(gender) => handleInput({ gender })}
              placeholder="Gender"
              autoCapitalize="none"
            />
            <Input
              value={loginData.password}
              onChangeText={(password) => handleInput({ password })}
              placeholder="Password"
              secureTextEntry
              LeftIcon={() => (
                <Ionicons
                  color={textColorSecondary}
                  name="md-lock-open"
                  size={22}
                />
              )}
            />

            <TouchableOpacity onPress={performLogin} style={styles.signIn}>
              <Text style={styles.textSign}>Sign up</Text>
            </TouchableOpacity>

            {/* <GoogleAuthButton googleAuth={continueWithGoogle} /> */}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}
export default Signup

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  inputArea: {
    justifyContent: 'center',
    height: 45,
    width: '85%',
    marginBottom: 20,
  },

  loginVector: {
    alignItems: 'center',
  },
  signIn: {
    marginTop: 20,
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 23,
    padding: 15,
    height: 50,
    borderColor: '#000000',
    borderRadius: 8,
    backgroundColor: '#0053F0',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
})
