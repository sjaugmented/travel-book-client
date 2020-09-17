import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import MemoryContext from '../../context/memoryContext'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'

function Transpo({ navigation }) {
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext)

  //Set way of transportation check-in and go to next modal
  const handlePress = (string) => {
    memoryContext.setCheckInTranspo(string)
    navigation.navigate('PhotoSocial')
  }

  return (
    <View style={styles.memoryView}>
      <AppText>How'd you get here?</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('airplane')}
          name="airplane-takeoff"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('airplane')}
          name="bus"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('train')}
          name="train"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('car')}
          name="car"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('boat')}
          name="sailing"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('foot')}
          name="walk"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  icon: {
    margin: 10,
  },
})

export default Transpo
