import React, { Component } from "react";
import { AuthSession } from "expo";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const auth0Domain = "dev-r94p-cf7.us.auth0.com";
const auth0ClientId = "y7CBRXvOHQoNJqPQqcXcZ9znVN3hBYiz";

export default class Auth0Login extends Component {
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

  render() {
    return (
      // <Login
      //   navigation={this.props.navigation}
      //   onLogin={() => this.loginWithAuth0()}
      // />
      <AppButton
        title="Login"
        color={colors.primary}
        onPress={() => this.loginWithAuth0()}
      />
    );
  }
}
