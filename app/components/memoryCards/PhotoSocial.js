import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import colors from '../../config/colors'
import MemoryContext from '../../context/memoryContext'
import AppHeader from '../AppHeader'
import ButtonIcon from '../ButtonIcon'
import AppButton from '../AppButton'

function PhotoSocial({ navigation }) {
  //state hook for images
  const [imageUri, setImageUri] = useState('')
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext)

  //Set photo/social check-in and go to final modal
  const handlePress = () => {
    navigation.navigate('SubmitMemory')
  }

  // async function to get permission to get photos
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA,
    )
    result.granted
    // const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    // if (!granted) alert('You need to enable permission to access the library')
  }

  useEffect(() => {
    requestPermission()
  }, [])

  const selectImage = async (string) => {
    try {
      let result
      if (string === 'camera') {
        result = await ImagePicker.launchCameraAsync()
      } else {
        result = await ImagePicker.launchImageLibraryAsync()
      }

      if (!result.cancelled) {
        memoryContext.setCheckInPhoto(result.uri)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.memoryView}>
      <AppHeader>Let's see some pictures!</AppHeader>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          name="camera"
          size={60}
          onPress={() => selectImage('camera')}
        />
        <AppButton onPress={handlePress} title="Submit" />
        <Image
          source={{ uri: memoryContext.checkInPhoto }}
          style={{ width: 100, height: 100 }}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => selectImage('library')}
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
