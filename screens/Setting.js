import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  Switch,
} from 'react-native'
import SvgUri from 'expo-svg-uri'

import { SingleHeader } from '../components/Header'
import { ThemeContext } from '../Util/ThemeContext'
import ToggleSwitch from 'toggle-switch-react-native'

import NormalText, { BoldText } from '../components/Text'

const Setting = ({ navigation }) => {
  const { theme, click, toggleTheme } = useContext(ThemeContext)

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#fff' : '#272833' },
      ]}
    >
      <SingleHeader>Settings</SingleHeader>
      <View style={styles.imageContainer}>
        <SvgUri
          style={styles.image}
          source={require('../assets/icon/setting-icon.svg')}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.iconandtextcontainer}>
        <View style={styles.iconandtext}>
          <SvgUri source={require('../assets/icon/telephone-icon.svg')} />
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <NormalText style={styles.text}>Contact Us</NormalText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconandtextcontainer}>
        <View style={styles.iconandtext}>
          <SvgUri source={require('../assets/icon/theme-icon.svg')} />
          <NormalText style={styles.text}>Dark Theme</NormalText>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor="#0050C8"
          value={click}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlecontainer: {
    paddingLeft: 20,
    paddingTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'UbuntuRegular',
    fontSize: 20,
    color: '#393A4A',
  },
  image: {
    marginTop: 100,
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: '#c8cacf',
    width: 300,
    marginLeft: 50,
  },
  iconandtextcontainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  iconandtext: {
    marginTop: 15,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 20,
  },
})
