import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TypeOfPlace from "./memoryCards/TypeOfPlace";
import Transpo from "./memoryCards/Transpo";
import PhotoSocial from "./memoryCards/PhotoSocial";
import Done from "./memoryCards/Done";
import NewTrip from "./NewTrip";
import ActiveTripContext from "../context/ActiveTripContext";

const Stack = createStackNavigator();

function MemoryNavigator({ setMemoryVisible }) {
  const [tripActive, setTripActive] = useContext(ActiveTripContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!tripActive ? (
        <Stack.Screen name="NewTrip" component={NewTrip} />
      ) : (
        <Stack.Screen name="Type" component={TypeOfPlace} />
      )}
      <Stack.Screen name="Transpo" component={Transpo} />
      <Stack.Screen name="PhotoSocial" component={PhotoSocial} />
      <Stack.Screen name="Done" component={Done} />
    </Stack.Navigator>
  );
}

export default MemoryNavigator;
