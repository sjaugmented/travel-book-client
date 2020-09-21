import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../../config/colors'
import AppText from '../AppText'

function ListItem({
  title,
  id,
  onPress,
  subTitle,
  navigation,
  handlePress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={styles.touch}
        underlayColor={colors.primary}
        onPress={onPress}
      >
        <View style={styles.container}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  touch: {
    borderRadius: 50,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
})

export default ListItem
