import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import Menu from "../components/menu/AppMenu";

const Stack = createStackNavigator();

function MenuNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default MenuNavigator;
