import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

const Button = ({
  text,
  onPress,
  style = {},
  textStyle = {},
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 44,
        width: 356,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0050C8',
        marginVertical: 10,
        borderRadius: 8,
        ...style,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'UbuntuRegular',
          color: 'white',
          ...textStyle,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
