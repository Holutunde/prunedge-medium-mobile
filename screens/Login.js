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
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Google from "expo-google-app-auth";
// import GoogleAuthButton from "../components/GoogleAuth";
// import { saveToken, handleGoogleSignIn } from "../helper";
// import {GoogleSigninButton } from "react-native-google-signin";

const Login = (props, { navigation }) => {
  const [loading, setLoading] = useState(false)
  const [isFocused, setFocused] = useState(false)

  const [loginData, setLoginData] = useState({
    email: ' ',
    password: ' ',
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
    props.navigation.navigate('Settings')
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

            <View style={styles.action}>
              <FontAwesome name="user-o" color="#0053F0" size={20} />
              <TextInput
                onFocus={() => setFocused(true)}
                placeholder="Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(email) => handleInput({ email })}
              />
            </View>

            <View style={styles.action}>
              <Feather name="lock" color="#0053F0" size={20} />
              <TextInput
                placeholder="********"
                secureTextEntry={loginData.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(password) => handleInput({ password })}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {loginData.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>

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
  // googleSignIn: {
  //   width: 200,
  //   height: 60,
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   marginTop: 12,
  // },
  container: {
    // backgroundColor: 'red',
    height: '100%',
    width: '100%',
  },
  inputArea: {
    justifyContent: 'center',
    height: 45,
    width: '85%',
    marginBottom: 20,
  },
  textInput: {
    color: '#393A4A',
    width: '100%',
    fontSize: 17,
    paddingStart: 10,
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
  action: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
    height: 45,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
    height: 50,
    borderColor: '#000000',
    borderRadius: 8,
  },
  textInput: {
    width: '88%',
    paddingLeft: 10,
    color: '#05375a',
  },
})
