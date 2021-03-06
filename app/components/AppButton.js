import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function AppButton({
  title,
  onPress,
  color,
  textColor,
  style,
  fontSize,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { fontSize: fontSize, color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})
