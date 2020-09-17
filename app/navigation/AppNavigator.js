import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MapScreen from "../screens/MapScreen";
import TypeOfPlace from "../components/memoryCards/TypeOfPlace";
import Transpo from "../components/memoryCards/Transpo";
import PhotoSocial from "../components/memoryCards/PhotoSocial";
import SubmitMemory from "../components/memoryCards/SubmitMemory";
import TripScreen from "../screens/TripScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="Trip" component={TripScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
