import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import colors from '../../config/colors'
import MemoryContext from '../../context/memoryContext'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'

function PhotoSocial({ navigation }) {
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext)

  //Set photo/social check-in and go to final modal
  const handlePress = (string) => {
    memoryContext.setCheckInPhoto(string)
    navigation.navigate('SubmitMemory')
  }

  // async function to get permission to get photos
  const requestPermission = async () => {
    // const result = await ermissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA)
    // result.granted
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert('You need to enable permission to access the library')
  }

  useEffect(() => {
    requestPermission()
  }, [])
  // const selectImage = ()
  return (
    <View style={styles.memoryView}>
      <AppHeader>Let's see some pictures!</AppHeader>
      <View style={styles.iconContainer}>
        <Button title="Select Image" onPress={selectImage} />
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
      {/* <AppText>And tell us who you're with!</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("tag a friend")}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("tag a friend")}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("tag a friend")}
          name="human"
        />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    backgroundColor: colors.light,
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
