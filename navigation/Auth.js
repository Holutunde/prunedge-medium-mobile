import { createStackNavigator } from 'react-navigation-stack'

import Login from '../screens/Login'
import Signup from '../screens/Signup'

const navigationOptions = {
  headerShown: false,
}

const AuthNavigator = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions,
  },
  Login: {
    screen: Login,
    navigationOptions,
  },
})

export default AuthNavigator
