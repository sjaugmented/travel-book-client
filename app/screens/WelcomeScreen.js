import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import * as Linking from "expo-linking";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import MapScreen from "./MapScreen";

import * as Google from "expo-google-app-auth";
import UserModel from "../api/user";

function WelcomeScreen({ navigation }) {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "469615040442-h1n11vjc6oh6bhoa4ss1rdntoo66mqdk.apps.googleusercontent.com",
        iosClientId:
          "469615040442-lcalo53k63uk825532pp92dgqbdle0g0.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const user = await UserModel.create(result);
        navigation.navigate("Map");
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require("../assets/milan-chalk.jpg")}
      resizeMode="cover"
    >
      <View style={styles.mapButton}>
        <AppButton
          title="Map"
          color={colors.dark}
          onPress={() => navigation.navigate("Map")}
        />
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.loginButton}>
        <AppButton
          title="Login With Google"
          color={colors.primary}
          onPress={() => signInWithGoogleAsync()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mapButton: {
    width: "90%",
    position: "absolute",
    bottom: 170,
  },
  loginButton: {
    width: "90%",
    position: "absolute",
    bottom: 100,
  },
  registerButton: {
    width: "90%",
    position: "absolute",
    bottom: 30,
  },
});

export default WelcomeScreen;
