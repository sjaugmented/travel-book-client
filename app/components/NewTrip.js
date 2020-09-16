import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from './AppText'
import AppTextInput from './AppTextInput'
import ButtonIcon from './ButtonIcon'
import Screen from './Screen'

import ModalContext from '../context/modalContext'
import ActiveTripContext from '../context/activeTripContext'

function NewTrip({ navigation }) {
  const { tripActive, setTripActive } = useContext(ActiveTripContext)
  console.log('tripActive:', tripActive)

  const setModalVisible = useContext(ModalContext)
  const [tripName, setTripName] = useState('')

  const handleChange = (e) => {
    // update state
    setTripName({ tripName: e.target.value })
  }

  const handleSubmit = async () => {
    // lock it in
    //const newTrip = await TripModel.create(tripName);
    console.log('tripName:', tripName)
    setTripActive(true)
    console.log('tripActive:', tripActive)
    //setModalVisible(false);
    navigation.navigate('TypeOfPlace')
    console.log(tripName)
  }

  return (
    <Screen style={styles.container}>
      <AppText>Where ya going?</AppText>
      <AppTextInput icon="airplane" placeholder="Name your trip!" />
      <ButtonIcon name="forward" size={30} onPress={() => handleSubmit()} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default NewTrip
