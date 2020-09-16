import React, { Component } from "react";
import { AuthSession } from "expo";

const auth0Domain = "dev-r94p-cf7.us.auth0.com";
const auth0ClientId = "y7CBRXvOHQoNJqPQqcXcZ9znVN3hBYiz";

export default class authSession extends Component {
  _loginWithAuth0 = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
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
      this.props.setToken(token);
      this.props.navigation.navigate("Next Screen");
    }
  };

  render() {
    return (
      <Login
        navigation={this.props.navigation}
        onLogin={() => this._loginWithAuth0()}
      />
    );
  }
}
