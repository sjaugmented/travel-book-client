import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Menu from '../components/menu/AppMenu'

const Stack = createStackNavigator()

function MenuNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  )
}

export default MenuNavigator
