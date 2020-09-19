import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TypeOfPlace from '../components/memoryCards/TypeOfPlace'
import Transpo from '../components/memoryCards/Transpo'
import PhotoSocial from '../components/memoryCards/PhotoSocial'
import NameOfPlace from '../components/memoryCards/NameOfPlace'
import SubmitMemory from '../components/memoryCards/SubmitMemory'
import NewTrip from '../components/NewTrip'
import ActiveTripContext from '../context/activeTripContext'

const Stack = createStackNavigator()

function MemoryNavigator(props) {
  const { tripActive } = useContext(ActiveTripContext)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!tripActive && <Stack.Screen name="NewTrip" component={NewTrip} />}
      <Stack.Screen name="TypeOfPlace" component={TypeOfPlace} />
      <Stack.Screen name="NameOfPlace" component={NameOfPlace} />
      <Stack.Screen name="Transpo" component={Transpo} />
      <Stack.Screen name="PhotoSocial" component={PhotoSocial} />
      <Stack.Screen name="SubmitMemory" component={SubmitMemory} />
    </Stack.Navigator>
  )
}

export default MemoryNavigator
