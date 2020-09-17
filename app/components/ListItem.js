import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import AppText from './AppText'

function ListItem({ title, id, onPress, subTitle, navigation, handlePress }) {
  return (
    <TouchableHighlight underlayColor="blue" onPress={onPress}>
      <View style={styles.container}>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
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
