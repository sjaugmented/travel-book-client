import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TypeOfPlace from "./memoryCards/TypeOfPlace";
import Transpo from "./memoryCards/Transpo";
import PhotoSocial from "./memoryCards/PhotoSocial";
import Done from "./memoryCards/Done";

const Stack = createStackNavigator();

function MemoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Type" component={TypeOfPlace} />
      <Stack.Screen name="Transpo" component={Transpo} />
      <Stack.Screen name="PhotoSocial" component={PhotoSocial} />
      <Stack.Screen name="Done" component={Done} />
    </Stack.Navigator>
  );
}

export default MemoryNavigator;
