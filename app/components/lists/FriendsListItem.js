import React from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../../config/colors'
import AppText from '../AppText'

function FriendsListItem({
  name,
  active,
  avatar,
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
          <Image
            source={{ uri: avatar }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
          <AppText fontSize={fontSize} style={[styles.title, { color: color }]}>
            {name}
          </AppText>
          <AppText style={styles.subTitle}>{active}</AppText>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  touch: {
    borderRadius: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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

export default FriendsListItem
