import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

<<<<<<< HEAD
import Menu from "./menu/AppMenu";
import Trip from "./menu/Trip";
import ListItem from "./ListItem";
=======
import Menu from './menu/AppMenu'
import Trip from './menu/Trip'
>>>>>>> submaster

const Stack = createStackNavigator();

function MenuNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Trip" component={Trip} />
    </Stack.Navigator>
  );
}

export default MenuNavigator;
