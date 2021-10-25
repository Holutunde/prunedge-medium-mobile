import { createStackNavigator } from 'react-navigation-stack'

import Login from '../screens/Login'

const navigationOptions = {
  headerShown: false,
}

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions,
  },
})

export default AuthNavigator
