import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function AppText({ children, style, fontSize }) {
  return (
    <Text style={[styles.text, { fontSize: fontSize }, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'Avenir Next',
  },
})
