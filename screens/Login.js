import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
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

const Login = (props, { navigation }) => {
  const [loading, setLoading] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  })

  const handleInput = (value) => {
    setLoginData({
      ...loginData,
      ...value,
      check_textInputChange: true,
    })
  }

  const updateSecureTextEntry = () => {
    setLoginData({
      ...loginData,
      secureTextEntry: !loginData.secureTextEntry,
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
    const loginUrl =
      'https://ecomm-store-proj.herokuapp.com/api/v1/account/login'
    const email = loginData.email
    const password = loginData.password
    const details = { email, password }
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      })

      const loginRes = await response.json()
      console.log('Login Response', loginRes)
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
        // saveToken(loginRes);
        toHome()
      }
    } catch (error) {
      let message = 'Please fill all registration detail'
      setLoading(false)
      showToast(message)
      return
    }
  }

  const toHome = () => {
    props.navigation.navigate('Home')
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
              <Text style={styles.textSign}>Log in</Text>
            </TouchableOpacity>

            {/* <GoogleAuthButton googleAuth={continueWithGoogle} /> */}

            <View style={styles.toRegister}>
              <Text style={{ fontSize: 20 }}>Don't have an account?</Text>
              <Text
                style={{
                  fontSize: 20,
                  paddingLeft: 10,
                }}
              >
                Sign up
              </Text>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}
export default Login

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
  toRegister: {
    padding: 20,
    flexDirection: 'row',
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
