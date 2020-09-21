import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MapScreen from '../screens/MapScreen'
import TripScreen from '../screens/TripScreen'
import MemoryScreen from '../screens/MemoryScreen'

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="Trip" component={TripScreen} />
      <Stack.Screen name="Memory" component={MemoryScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
