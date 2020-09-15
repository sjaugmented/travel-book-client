import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import MapScreen from "./app/screens/MapScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// const Tweets = ({ navigation }) => {
//   return (
//     <Screen>
//       <Text>Tweets</Text>
//       <Button
//         title="View Tweet"
//         onPress={() => navigation.navigate("TweetDetails")}
//       />
//     </Screen>
//   );
// };

// const TweetDetails = () => {
//   return (
//     <Screen>
//       <Text>Tweet Details</Text>
//     </Screen>
//   );
// };

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // animationEnabled: false,
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
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
