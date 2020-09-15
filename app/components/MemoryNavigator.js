import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import TypeOfPlace from "./memoryCards/TypeOfPlace";
import Transpo from "./memoryCards/Transpo";
import PhotoSocial from "./memoryCards/PhotoSocial";
import Done from "./memoryCards/Done";

const Stack = createStackNavigator();

function MemoryNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Type" component={TypeOfPlace} />
      <Stack.Screen name="Transpo" component={Transpo} />
      <Stack.Screen name="PhotoSocial" component={PhotoSocial} />
      <Stack.Screen name="Done" component={Done} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MemoryNavigator;
