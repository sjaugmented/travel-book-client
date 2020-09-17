import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import TripShowContext from "./app/context/TripShowContext";

export default function App() {
  const [showTrip, setShowTrip] = useState("");
  console.log("app level show trip:", showTrip);
  return (
    <>
      <NavigationContainer>
        <TripShowContext.Provider
          value={{ showTrip: showTrip, setShowTrip: setShowTrip }}
        >
          <AppNavigator />
        </TripShowContext.Provider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
