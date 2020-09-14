import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
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
          onPress={() => console.log("login!")}
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
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
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
