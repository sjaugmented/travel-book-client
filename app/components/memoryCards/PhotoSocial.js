import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import ModalContext from '../../context/modalContext'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'

function PhotoSocial({ navigation, memory }) {
  const setMemory = useContext(ModalContext)
  const handlePress = (string) => {
    setMemory((prevArray) => [...prevArray, string])
    console.log('soc', memory)
    navigation.navigate('Done')
  }

  return (
    <View style={styles.memoryView}>
      <AppText>Let's see some pictures!</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('Take a pic')}
          name="camera"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('Browse photos')}
          name="image-album"
          size={60}
        />
      </View>
      <AppText>And tell us who you're with!</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('tag a friend')}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('tag a friend')}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress('tag a friend')}
          name="human"
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

export default PhotoSocial
