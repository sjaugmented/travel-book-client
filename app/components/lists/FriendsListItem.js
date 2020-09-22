import React from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../../config/colors'
import AppText from '../AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ButtonIcon from '../ButtonIcon'

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
    <Swipeable style={styles.swipe} renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={styles.touch}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <View style={[styles.friendContainer, { marginBottom: marginBottom }]}>
          {active ? (
            <ButtonIcon
              name="circle-small"
              backgroundColor="green"
              size={12}
              style={styles.isActive}
            />
          ) : (
            <ButtonIcon
              name="circle-small"
              backgroundColor="red"
              size={12}
              style={styles.isActive}
            />
          )}
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <AppText
            fontSize={fontSize}
            style={[styles.username, { color: color }]}
          >
            {name}
          </AppText>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  touch: {
    borderRadius: 30,
    marginVertical: 10,
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  isActive: {
    marginRight: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  username: {
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 10,
  },
})

export default FriendsListItem
