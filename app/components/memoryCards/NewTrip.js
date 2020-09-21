import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../AppText'
import AppTextInput from '../AppTextInput'
import ButtonIcon from '../ButtonIcon'
import Screen from '../Screen'
import TripModel from '../../api/trips'

import MemoryContext from '../../context/memoryContext'
import ActiveTripContext from '../../context/activeTripContext'
import colors from '../../config/colors'
import AppHeader from '../AppHeader'
import UserContext from '../../context/userContext'

function NewTrip({ navigation }) {
  const { tripActive, storeTripActive } = useContext(ActiveTripContext)
  const { userId } = useContext(UserContext)
  const memoryContext = useContext(MemoryContext)

  const handleSubmit = async () => {
    try {
      // lock it in
      let tripName = memoryContext.tripName
      let data = {
        tripName,
        userId,
      }
      await TripModel.create(data)
      storeTripActive(true)
      // navigation.navigate('Choice')
      navigation.navigate('TypeOfPlace')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <AppHeader style={styles.header}>Name Your Trip</AppHeader>
      <AppTextInput
        onChangeText={(text) => memoryContext.setTripName(text)}
        icon="airplane"
        placeholder="Name your trip!"
      />
      <ButtonIcon
        name="forward"
        backgroundColor="green"
        size={60}
        onPress={() => handleSubmit()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    // opacity: 0.7,
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 50,
    marginTop: 60,
    marginBottom: 10,
  },
  header: {
    fontSize: 30,
    marginTop: 30,
  },
})

export default NewTrip
