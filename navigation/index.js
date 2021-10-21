import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Launch from './Launch'
import Main from './Main'
import Onboarding from './Onboarding'
import NavigationService from './NavigationService'

const Navigation = () => {
  const SwitchNavigator = createSwitchNavigator({
    Launch,
    Onboarding,
    Main,
  })

  const AppContainer = createAppContainer(SwitchNavigator)

  return (
    <AppContainer
      ref={(navigationRef) => {
        NavigationService.setTopLevelNavigator(navigationRef)
      }}
    />
  )
}

export default Navigation
