import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import SvgUri from 'expo-svg-uri'
import CustomSwitch from '../components/CustomSwitch'
import { SingleHeader } from '../components/Header'

const Setting = ({ navigation }) => {
  const [isDarktheme, setIsDarktheme] = useState(false)

  const toggleTheme = () => {
    setIsDarktheme(!isDarktheme)
  }
  return (
    <View style={styles.container}>
      <SingleHeader>Settings</SingleHeader>
      <View style={styles.imageContainer}>
        <SvgUri
          style={styles.image}
          source={require('../assets/icon/setting-icon.svg')}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.iconandtextcontainer}>
        <View style={styles.innericonandtext}>
          <SvgUri source={require('../assets/icon/telephone-icon.svg')} />
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconandtextcontainer}>
        <View style={styles.innericonandtext}>
          <SvgUri source={require('../assets/icon/theme-icon.svg')} />
          <Text style={styles.text}>Dark Theme</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            toggleTheme()
          }}
        >
          <View pointerEvents="none">
            <CustomSwitch roundCorner={true} selectionColor={'#0050C8'} />
          </View>
        </TouchableOpacity>
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
    marginTop: 50,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innericonandtext: {
    flexDirection: 'row',
  },
  text: {
    color: '#393A4A',
    fontWeight: '500',
    fontFamily: 'UbuntuRegular',
    marginLeft: 20,
  },
})
