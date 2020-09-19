import React, { useContext } from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import * as Linking from 'expo-linking'
import AppButton from '../components/AppButton'
import colors from '../config/colors'
import MapScreen from './MapScreen'
import AsyncStorage from '@react-native-community/async-storage'

import * as Google from 'expo-google-app-auth'
import UserModel from '../api/user'
import UserContext from '../context/userContext'

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
}

function WelcomeScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext)

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          '469615040442-h1n11vjc6oh6bhoa4ss1rdntoo66mqdk.apps.googleusercontent.com',
        iosClientId:
          '469615040442-lcalo53k63uk825532pp92dgqbdle0g0.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      })

      if (result.type === 'success') {
        const foundUser = await UserModel.show(result.user.id)
        if (foundUser) {
          await AsyncStorage.setItem('userId', foundUser._id)
          await AsyncStorage.setItem('username', foundUser.name)
          setUser(foundUser.name)
        } else {
          const user = await UserModel.create(result)
          await AsyncStorage.setItem('userId', user._id)
          await AsyncStorage.setItem('username', user.name)
          setUser(user.name)
        }
        const localId = await AsyncStorage.getItem('username')
        console.log('localStorage:', localId)
        console.log('Welcome Screen user:', user)
        navigation.navigate('Map')
      } else {
        return { cancelled: true }
      }
    } catch (e) {
      return { error: true }
    }
  }

  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require('../assets/milan-chalk.jpg')}
      resizeMode="cover"
    >
      {/* <View style={styles.mapButton}> */}
      {/* <AppButton
          title="Map"
          color={colors.dark}
          onPress={() => navigation.navigate('Map')}
        /> */}
      {/* </View> */}
      <View style={styles.loginButton}></View>
      <View style={styles.loginButton}>
        <AppButton
          title="Login With Google"
          color={colors.primary}
          onPress={() => signInWithGoogleAsync()}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapButton: {
    width: '90%',
    position: 'absolute',
    bottom: 170,
  },
  loginButton: {
    width: '90%',
    position: 'absolute',
    bottom: 100,
  },
  registerButton: {
    width: '90%',
    position: 'absolute',
    bottom: 30,
  },
})

export default WelcomeScreen
