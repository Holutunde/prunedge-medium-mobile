import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../screens/Home'
import Explore from '../screens/Explore'
import BottomTab from '../components/BottomTab'
import Bookmark from '../screens/Bookmark'

//Setting Stack
import Setting from '../screens/Setting'
import Contact from '../screens/Contact'

const navigationOptions = ({ navigation }) => ({
  headerShown: false,
  tabBarVisible: navigation.state.index === 0,
})

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions,
  },
})

const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions,
  },
})

const BookmarkStack = createStackNavigator({
  Bookmark: {
    screen: Bookmark,
    navigationOptions,
  },
})

const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: Setting,
      navigationOptions,
    },
    Contact: {
      screen: Contact,
      navigationOptions,
    },
  },
  {
    navigationOptions,
  },
)

const MainNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ExploreStack,
    BookmarkStack,
    SettingStack,
  },
  {
    initialRouteName: 'HomeStack',
    tabBarComponent: (props) => <BottomTab {...props} />,
    animationEnabled: false,
    lazy: true,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  },
)

export default MainNavigator
