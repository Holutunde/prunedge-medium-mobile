import React, { useContext } from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import Navigation from './navigation/index'
import store from './redux/store'
import Wrapper from './Util/Wrapper'

const customFonts = {
  UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
  UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
  UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf'),
  UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
  UbuntuItalic: require('./assets/fonts/Ubuntu-Italic.ttf'),
  UbuntuLightItalic: require('./assets/fonts/Ubuntu-LightItalic.ttf'),
  UbuntuMediumItalic: require('./assets/fonts/Ubuntu-MediumItalic.ttf'),
}

const AppContent = () => {
  const [fontsLoaded] = useFonts(customFonts)

  return (
    <Wrapper>
      <Provider store={store}>
        <View style={styles.container}>{fontsLoaded && <Navigation />}</View>
      </Provider>
    </Wrapper>
  )
}

export default AppContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
})
