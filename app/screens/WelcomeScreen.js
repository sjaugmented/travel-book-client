import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import * as Linking from "expo-linking";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

import * as AuthSession from "expo-auth-session";
import * as Google from "expo-google-app-auth";

const auth0Domain = "https://dev-r94p-cf7.us.auth0.com";
const auth0ClientId = "y7CBRXvOHQoNJqPQqcXcZ9znVN3hBYiz";

function WelcomeScreen({ navigation }) {
  loginWithAuth0 = async () => {
    let str = "";
    const params = {
      client_id: auth0ClientId,
      response_type: "token",
      scope: "openid, profile, email",
      redirect_uri: redirectUrl,
    };

    for (const key in params) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + params[key];
    }

    console.log(`${auth0Domain}/authorize/${str}`);

    const redirectUrl = await AuthSession.getRedirectUrl();
    let authUrl = `${auth0Domain}/authorize/${str}`;
    console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
    console.log(`AuthURL is:  ${authUrl}`);
    const result = await AuthSession.startAsync({
      authUrl: authUrl,
    });

    if (result.type === "success") {
      console.log(result);
      let token = result.params.access_token;
      console.log(token);
      this.props.setToken(token);
      this.props.navigation.navigate("Next Screen");
    }
  };

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "469615040442-h1n11vjc6oh6bhoa4ss1rdntoo66mqdk.apps.googleusercontent.com",
        iosClientId:
          "469615040442-lcalo53k63uk825532pp92dgqbdle0g0.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("result", result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  const handleLogin = () => {
    Linking.openURL("http://localhost:4000/api/v1/auth/login");
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
          title="Login"
          color={colors.primary}
          onPress={() => signInWithGoogleAsync()}
        />
      </View>
      <View style={styles.registerButton}>
        <AppButton
          title="Register"
          color={colors.secondary}
          onPress={() => navigation.navigate("Register")}
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
