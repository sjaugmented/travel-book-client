import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TypeOfPlace from './memoryCards/TypeOfPlace'
import Transpo from './memoryCards/Transpo'
import PhotoSocial from './memoryCards/PhotoSocial'
import SubmitMemory from './memoryCards/SubmitMemory'
import NewTrip from './NewTrip'
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
      <Stack.Screen name="Transpo" component={Transpo} />
      <Stack.Screen name="PhotoSocial" component={PhotoSocial} />
      <Stack.Screen name="SubmitMemory" component={SubmitMemory} />
    </Stack.Navigator>
  )
}

export default MemoryNavigator
