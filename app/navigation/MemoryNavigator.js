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
import ActiveTripContext from '../context/activeTripContext'
import { Overlay } from 'react-native-maps'

const Stack = createStackNavigator()

function MemoryNavigator(props) {
  const { tripActive } = useContext(ActiveTripContext)

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }
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
          // options={{ cardOverlay: false }}
          component={NewTrip}
        />
      )}
      <Stack.Screen
        name="TypeOfPlace"
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={TypeOfPlace}
      />
      <Stack.Screen
        name="NameOfPlace"
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={NameOfPlace}
      />

      <Stack.Screen name="Transpo" component={Transpo} />
      <Stack.Screen name="PhotoSocial" component={PhotoSocial} />
      <Stack.Screen name="SubmitMemory" component={SubmitMemory} />
    </Stack.Navigator>
  )
}

export default MemoryNavigator
