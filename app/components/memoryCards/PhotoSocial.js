import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import colors from '../../config/colors'
import MemoryContext from '../../context/memoryContext'
import AppHeader from '../AppHeader'
import ButtonIcon from '../ButtonIcon'
import AppText from '../AppText'

function PhotoSocial({ navigation }) {
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext)

  //Set photo/social check-in and go to final modal
  const handlePress = () => {
    navigation.navigate('SubmitMemory')
  }

  // async function to get permission to get photos
  const requestPermission = async () => {
    try {
      const result = await Permissions.askAsync(
        Permissions.CAMERA_ROLL,
        Permissions.CAMERA,
      )
      result.granted
      // const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
      // if (!granted) alert('You need to enable permission to access the library')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    requestPermission()
    memoryContext.setCheckInPhoto('')
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
      <AppHeader style={styles.header}>Take A Pic!</AppHeader>
      {memoryContext.checkInPhoto === '' ? (
        <View style={styles.empty}>
          <AppText>Image</AppText>
        </View>
      ) : (
        <Image
          style={styles.photo}
          source={{ uri: memoryContext.checkInPhoto }}
        />
      )}

      <View style={styles.buttons}>
        {/* <AppButton onPress={handlePress} title="Submit" /> */}
        <ButtonIcon
          style={styles.icon}
          name="camera"
          size={60}
          onPress={() => selectImage('camera')}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => selectImage('library')}
          name="image-album"
          size={60}
        />
        <ButtonIcon
          style={styles.check}
          onPress={handlePress}
          name="check"
          size={60}
        />
      </View>

      {/* <AppButton
        style={styles.moveAlong}
        title="Nah, I'm good"
        color={colors.primary}
        onPress={() => navigation.navigate('SubmitMemory')}
      /> */}
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
    marginTop: 10,
    // marginTop: 100,
  },
  empty: {
    width: '85%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  photo: {
    width: '85%',
    height: '55%',

    borderRadius: 20,
    marginTop: 20,
    // marginBottom: 0,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  check: {
    backgroundColor: 'green',
    margin: 3,
  },
  icon: {
    backgroundColor: colors.primary,
    margin: 3,
  },
  moveAlong: {},
})

export default PhotoSocial
