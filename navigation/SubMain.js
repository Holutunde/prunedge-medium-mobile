import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Latest from '../screens/Latest'
import Popular from '../screens/Popular'
import WorkShop from '../screens/Workshop'
import Seminar from '../screens/Seminar'
import TopTab from '../components/TopTab'

const navigationOptions = ({ navigation }) => ({
  headerShown: false,
  tabBarVisible: navigation.state.index === 0,
})

const LatestStack = createStackNavigator({
  Latest: {
    screen: Latest,
    navigationOptions,
  },
})

const PopularStack = createStackNavigator({
  Popular: {
    screen: Popular,
    navigationOptions,
  },
})

const WorkStack = createStackNavigator({
  WorkShop: {
    screen: WorkShop,
    navigationOptions,
  },
})
const SeminarStack = createStackNavigator({
  Seminar: {
    screen: Seminar,
    navigationOptions,
  },
})

const MainNavigator = createMaterialTopTabNavigator(
  {
    LatestStack,
    PopularStack,
    WorkStack,
    SeminarStack,
  },
  {
    initialRouteName: 'LatestStack',
    tabBarComponent: (props) => <TopTab {...props} />,
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
