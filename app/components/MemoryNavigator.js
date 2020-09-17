import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TypeOfPlace from './memoryCards/TypeOfPlace'
import Transpo from './memoryCards/Transpo'
import PhotoSocial from './memoryCards/PhotoSocial'
import Done from './memoryCards/Done'
import NewTrip from './NewTrip'
import ActiveTripContext from '../context/activeTripContext'

const Stack = createStackNavigator()

function MemoryNavigator(props) {
  const { tripActive } = useContext(ActiveTripContext)
  console.log(props)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!tripActive && (
        <Stack.Screen
          memory={props.memory}
          name="NewTrip"
          component={NewTrip}
        />
      )}
      <Stack.Screen
        name="TypeOfPlace"
        memory={props.memory}
        component={TypeOfPlace}
      />
      <Stack.Screen name="Transpo" memory={props.memory} component={Transpo} />
      <Stack.Screen
        name="PhotoSocial"
        memory={props.memory}
        component={PhotoSocial}
      />
      <Stack.Screen name="Done" memory={props.memory} component={Done} />
    </Stack.Navigator>
  )
}

export default MemoryNavigator
