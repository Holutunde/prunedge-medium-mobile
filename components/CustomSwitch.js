import React, { useState } from 'react'

import { View, TouchableOpacity } from 'react-native'

const CustomSwitch = ({
  selectionMode,
  roundCorner,
  selectionColor,
  ...props
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode)
  const [getRoundCorner, setRoundCorner] = useState(roundCorner)

  const updatedSwitchData = (val) => {
    setSelectionMode(val)
  }

  return (
    <View>
      <View
        style={{
          height: 20,
          width: 40,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}
        {...props}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 20 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></TouchableOpacity>
      </View>
    </View>
  )
}
export default CustomSwitch
