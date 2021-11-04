import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Launch from './Launch'
import Auth from './Auth'
import Main from './Main'
import SubMain from './SubMain'
import Onboarding from './Onboarding'
import NavigationService from './NavigationService'
import { ThemeColors, useTheme } from 'react-navigation'

const Navigation = () => {
  const SwitchNavigator = createSwitchNavigator({
    Launch,
    Onboarding,
    Auth,
    Main,
    SubMain,
  })
  let theme = useTheme()
  let colors = ThemeColors[theme]
  const AppContainer = createAppContainer(SwitchNavigator)

  return (
    <AppContainer
      style={{ backgroundColor: colors.bodyContent }}
      ref={(navigationRef) => {
        NavigationService.setTopLevelNavigator(navigationRef)
      }}
    />
  )
}

export default Navigation
