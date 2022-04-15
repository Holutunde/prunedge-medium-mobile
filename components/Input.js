import React, { useState, useRef } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native'

import Text from './Text'
import {
  textColor,
  textColorSecondary,
  borderDarkGrey,
  red,
  veryLightGrey,
} from '../config/colors'
import { Ionicons } from '@expo/vector-icons'

const Input = ({
  value,
  onChangeText,
  placeholder = '',
  autoCapitalize = 'sentences',
  secureTextEntry = false,
  coverStyle = {},
  RightIcon = null,
  LeftIcon = null,
  multiline = false,
  style = {},
  editable = true,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setFocused] = useState(false)
  return (
    <View
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: isFocused ? '#0053F0' : '#000000',
        width: '90%',
        height: multiline ? 150 : 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: multiline ? 10 : 0,
        position: 'relative',
        backgroundColor: editable ? 'transparent' : veryLightGrey,
        ...coverStyle,
      }}
    >
      {value !== '' && placeholder !== '' && (
        <Text
          style={{
            position: 'absolute',
            left: 7,
            paddingHorizontal: 3,
            top: -12,
            backgroundColor: '#fff',
            color: isFocused ? '#0053F0' : 'rgba(0, 0, 0, .6)',
          }}
        >
          {placeholder}
        </Text>
      )}
      {LeftIcon && (
        <View style={{ marginRight: 10 }}>
          <LeftIcon />
        </View>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={textColorSecondary}
        autoCapitalize={secureTextEntry ? 'none' : autoCapitalize}
        secureTextEntry={secureTextEntry && !showPassword}
        multiline={multiline}
        editable={editable}
        style={{
          color: textColorSecondary,
          flex: 1,
          height: '100%',
          textAlignVertical: multiline ? 'top' : 'center',
          ...style,
        }}
        {...props}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          onPress={() => setShowPassword(() => !showPassword)}
          style={{ marginLeft: 10 }}
        >
          <Ionicons
            color={textColor}
            size={22}
            name={showPassword ? 'ios-eye-off' : 'ios-eye'}
          />
        </TouchableOpacity>
      ) : (
        RightIcon && (
          <View style={{ marginLeft: 10 }}>
            <RightIcon />
          </View>
        )
      )}
    </View>
  )
}

export default Input
