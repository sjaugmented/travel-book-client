import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import AppText from './AppText'

function ListItem({ name, onPress, year }) {
  return (
    <TouchableHighlight underlayColor="blue" onPress={onPress}>
      <View style={styles.container}>
        <AppText>{name}</AppText>
        <AppText>{year}</AppText>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
})

export default ListItem
