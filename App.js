import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-community/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TripShowContext from "./app/context/TripShowContext";
import UserContext from "./app/context/userContext";

export default function App() {
  const [user, setUser] = useState("");
  const [showTrip, setShowTrip] = useState("");

  const checkForUser = async () => {
    try {
      const localUser = await AsyncStorage.getItem("username");
      if (localUser) setUser(localUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkForUser();
  }, []);

  const logout = async () => {
    setUser(null);
    await AsyncStorage.setItem("username", "");
    await AsyncStorage.setItem("userId", "");
    await AsyncStorage.setItem("tripActive", "false");
  };

  console.log("App.js:", user);

  return (
    <>
      <NavigationContainer>
        <UserContext.Provider
          value={{ user: user, setUser: setUser, logout: logout }}
        >
          <TripShowContext.Provider
            value={{ showTrip: showTrip, setShowTrip: setShowTrip }}
          >
            {user ? <AppNavigator /> : <AuthNavigator />}
          </TripShowContext.Provider>
        </UserContext.Provider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
