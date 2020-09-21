import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../../config/colors'
import AppText from '../AppText'

function ListItem({
  title,
  fontSize,
  onPress,
  subTitle,
  color,
  marginBottom,
  underlayColor,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={styles.touch}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <View style={[styles.container, { marginBottom: marginBottom }]}>
          <AppText fontSize={fontSize} style={[styles.title, { color: color }]}>
            {title}
          </AppText>
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
    height: 50,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
})

export default ListItem
