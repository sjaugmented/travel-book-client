import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const auth0Domain = "dev-r94p-cf7.us.auth0.com";
const auth0ClientId = "y7CBRXvOHQoNJqPQqcXcZ9znVN3hBYiz";

function WelcomeScreen({ navigation }) {
  loginWithAuth0 = async () => {
    console.log("beginning auth");
    const redirectUrl = await AuthSession.getRedirectUrl();
    let authUrl =
      `${auth0Domain}/authorize` +
      toQueryString({
        client_id: auth0ClientId,
        response_type: "token",
        scope: "openid profile email",
        redirect_uri: redirectUrl,
      });
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
      <View style={styles.loginButton}>
        <AppButton
          title="Login"
          color={colors.primary}
          onPress={() => loginWithAuth0()}
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
