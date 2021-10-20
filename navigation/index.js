import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Launch from './Launch'
import Onboarding from './Onboarding'
import NavigationService from './NavigationService'

const Navigation = () => {
  const SwitchNavigator = createSwitchNavigator({
    Launch,
    Onboarding,
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
