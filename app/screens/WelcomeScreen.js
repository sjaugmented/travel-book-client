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
  const { username, userId, setUser } = useContext(UserContext)

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
          await AsyncStorage.setItem('username', foundUser.name)
          await AsyncStorage.setItem('userId', foundUser.googleId)
          setUser({ username: foundUser.name, userId: foundUser.googleId })
        } else {
          const newUser = await UserModel.create(result.user)
          await AsyncStorage.setItem('username', newUser.name)
          await AsyncStorage.setItem('userId', newUser.googleId)
          setUser({ username: newUser.name, userId: newUser.googleId })
        }
      } else {
        return { cancelled: true }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require('../assets/milan-chalk.jpg')}
      resizeMode="cover"
    >
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
