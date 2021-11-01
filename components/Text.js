import React, { useContext } from 'react'
import { Text as NativeText } from 'react-native'
import { ThemeContext } from '../Util/ThemeContext'

const fontSize = 14
const styles = {
  fontSize,
}

const Text = ({ style = {}, children, ...props }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <NativeText
      style={{
        fontFamily: 'UbuntuRegular',
        color: theme === 'light' ? '#393A4A' : '#fff',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}

export default Text

export const BoldText = ({ style = {}, children, ...props }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <NativeText
      style={{
        fontFamily: 'UbuntuMedium',
        color: theme === 'light' ? '#393A4A' : '#fff',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}

export const VeryBoldText = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        fontFamily: 'UbuntuBold',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        color: theme === 'light' ? '#393A4A' : '#fff',
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}

export const LightText = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        fontFamily: 'UbuntuLight',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        color: theme === 'light' ? '#393A4A' : '#fff',
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}
