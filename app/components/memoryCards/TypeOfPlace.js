import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'
import MemoryContext from '../../context/memoryContext'
import AppHeader from '../AppHeader'

function TypeOfPlace({ navigation }) {
  //set memoryContext object
  const memoryContext = useContext(MemoryContext)

  //Set typeofplace check-in and go to next modal
  const handlePress = (string) => {
    memoryContext.setCheckInType(string)
    navigation.navigate('NameOfPlace')
  }

  return (
    <View style={styles.memoryView}>
      <AppHeader>Whatcha doin?</AppHeader>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('restaurant')}
          name="food"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('airport')}
          name="airplane-takeoff"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('park')}
          name="pine-tree"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('lodging')}
          name="bed-empty"
          size={50}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    // backgroundColor: colors.light,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    // margin: 100,
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

export default TypeOfPlace
