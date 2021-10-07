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
        height: 45,
        width: '100%',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 8,
        ...style,
      }}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={color} animating />
      ) : (
        <Text
          style={{
            fontSize: 16,
            ...textStyle,
          }}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
