import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'
import MemoryContext from '../../context/memoryContext'
import AppHeader from '../AppHeader'
import { color } from 'react-native-reanimated'

function TypeOfPlace({ navigation }) {
  //set memoryContext object
  const memoryContext = useContext(MemoryContext)
  //Set typeofplace check-in and go to next modal
  const handlePress = (string) => {
    memoryContext.setCheckInType(string)
    navigation.replace('NameOfPlace')
  }

  // const forFade = ({ current }) => ({
  //   cardStyle: {
  //     opacity: current.progress,
  //   },
  // })

  return (
    <View style={styles.memoryView}>
      <AppHeader style={styles.header}>Where Are You?</AppHeader>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('restaurant')}
          name="food"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          size={60}
          onPress={() => handlePress('airport')}
          name="airplane-takeoff"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('park')}
          name="pine-tree"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('lodging')}
          name="bed-empty"
          size={60}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,

    backgroundColor: colors.light,
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 60,
  },
  header: {
    fontSize: 30,
  },
  iconContainer: {
    justifyContent: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  icon: {
    backgroundColor: colors.primary,
    margin: 10,
  },
})

export default TypeOfPlace
