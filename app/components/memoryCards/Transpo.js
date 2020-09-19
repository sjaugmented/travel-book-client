import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import MemoryContext from '../../context/memoryContext'
import AppHeader from '../AppHeader'
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
      <AppHeader style={styles.header}>How'd you get here?</AppHeader>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('airplane')}
          name="airplane-takeoff"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('airplane')}
          name="bus"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('train')}
          name="train"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('car')}
          name="car"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('boat')}
          name="sailing"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('foot')}
          name="walk"
          size={60}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    borderRadius: 50,
    opacity: 0.7,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  header: {
    fontSize: 30,
    marginBottom: 0,
    // marginTop: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  icon: {
    margin: 10,
    backgroundColor: colors.primary,
  },
})

export default Transpo
