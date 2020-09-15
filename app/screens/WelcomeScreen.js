import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require("../assets/welcome.jpg")}
      resizeMode="cover"
    >
      <View style={styles.loginButton}>
        <AppButton
          title="Login"
          color={colors.primary}
          onPress={() => navigation.navigate("Map")}
        />
      </View>
      <View style={styles.registerButton}>
        <AppButton
          title="Register"
          color={colors.secondary}
          onPress={() => console.log("register!")}
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
