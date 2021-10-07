import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'

const customFonts = {
  UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
  UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
  UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf'),
  UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
  UbuntuItalic: require('./assets/fonts/Ubuntu-Italic.ttf'),
  UbuntuLightItalic: require('./assets/fonts/Ubuntu-LightItalic.ttf'),
  UbuntuMediumItalic: require('./assets/fonts/Ubuntu-MediumItalic.ttf'),
}

const App = () => {
  const [fontsLoaded] = useFonts(customFonts)

  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
