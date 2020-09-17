import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from './AppText'
import AppTextInput from './AppTextInput'
import ButtonIcon from './ButtonIcon'
import Screen from './Screen'
import TripModel from '../api/trips'

import MemoryContext from '../context/memoryContext'
import ActiveTripContext from '../context/activeTripContext'

function NewTrip({ navigation }) {
  const { tripActive, setTripActive } = useContext(ActiveTripContext)
  const memoryContext = useContext(MemoryContext)

  const handleSubmit = async () => {
    // lock it in
    const result = await TripModel.create(memoryContext.tripName)

    setTripActive(true)

    //setModalVisible(false);
    navigation.navigate('NameOfPlace')
  }

  return (
    <Screen style={styles.container}>
      <AppText>Where ya going?</AppText>
      <AppTextInput
        onChangeText={(text) => memoryContext.setTripName(text)}
        icon="airplane"
        placeholder="Name your trip!"
      />
      <ButtonIcon name="forward" size={30} onPress={() => handleSubmit()} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default NewTrip
