import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Distance from '../components/Trophies/Distance'
import Places from '../components/Trophies/Places'
import colors from '../config/colors'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'gold',
          activeBackgroundColor: colors.primary,
          inactiveTintColor: 'black',
          labelStyle: {
            fontSize: 20,
            paddingBottom: 30,
          },
          tabStyle: {
            height: 80,
          },
        }}
      >
        <Tab.Screen name="Distance" component={Distance} />
        <Tab.Screen name="Places" component={Places} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
