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
      <ButtonIcon
        style={styles.back}
        name="chevron-left"
        size={25}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    borderRadius: 50,

    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  header: {
    fontSize: 30,
    marginBottom: 0,
  },
  iconContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
    // marginBottom: 50,
  },
  icon: {
    margin: 10,
    backgroundColor: colors.primary,
  },
  back: {
    position: 'absolute',
    bottom: 5,
  },
})

export default Transpo
