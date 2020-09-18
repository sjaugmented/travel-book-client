import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-community/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TripShowContext from "./app/context/TripShowContext";
import UserContext from "./app/context/userContext";

export default function App() {
  const [user, setUser] = useState({
    username: "",
    userId: "",
  });
  const [showTrip, setShowTrip] = useState("");

  const checkForUser = async () => {
    try {
      const localUser = await AsyncStorage.getItem("username");
      const localId = await AsyncStorage.getItem("userId");

      if (localUser)
        setUser({
          username: localUser,
          userId: localId,
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkForUser();
  }, []);

  const logout = async () => {
    try {
      setUser({ username: "", userId: "" });
      await AsyncStorage.setItem("username", "");
      await AsyncStorage.setItem("userId", "");
      await AsyncStorage.setItem("tripActive", "false");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationContainer>
        <UserContext.Provider
          value={{
            username: user.username,
            userId: user.userId,
            setUser: setUser,
            logout: logout,
          }}
        >
          <TripShowContext.Provider
            value={{ showTrip: showTrip, setShowTrip: setShowTrip }}
          >
            {user.username ? <AppNavigator /> : <AuthNavigator />}
          </TripShowContext.Provider>
        </UserContext.Provider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
