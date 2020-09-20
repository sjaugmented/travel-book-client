import React, { useContext } from 'react'
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import TypeOfPlace from '../components/memoryCards/TypeOfPlace'
import Transpo from '../components/memoryCards/Transpo'
import PhotoSocial from '../components/memoryCards/PhotoSocial'
import NameOfPlace from '../components/memoryCards/NameOfPlace'
import SubmitMemory from '../components/memoryCards/SubmitMemory'
import NewTrip from '../components/memoryCards/NewTrip'
import Choice from '../components/memoryCards/Choice'
import ActiveTripContext from '../context/activeTripContext'

const Stack = createStackNavigator()
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
})
function MemoryNavigator(props) {
  const { tripActive } = useContext(ActiveTripContext)

  return (
    <Stack.Navigator
      // mode="modal"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },

        headerShown: false,
      }}
    >
      {!tripActive && (
        <Stack.Screen
          name="NewTrip"
          options={{ cardStyleInterpolator: forFade }}
          component={NewTrip}
        />
      )}
      {/* {!tripActive && <Stack.Screen name="Choice" component={Choice} />} */}
      <Stack.Screen
        name="TypeOfPlace"
        options={{ cardStyleInterpolator: forFade }}
        component={TypeOfPlace}
      />
      <Stack.Screen
        name="NameOfPlace"
        options={{ cardStyleInterpolator: forFade }}
        component={NameOfPlace}
      />
      <Stack.Screen
        name="Transpo"
        options={{ cardStyleInterpolator: forFade }}
        component={Transpo}
      />
      <Stack.Screen
        name="PhotoSocial"
        options={{ cardStyleInterpolator: forFade }}
        component={PhotoSocial}
      />
      <Stack.Screen
        name="SubmitMemory"
        options={{ cardStyleInterpolator: forFade }}
        component={SubmitMemory}
      />
    </Stack.Navigator>
  )
}

export default MemoryNavigator
