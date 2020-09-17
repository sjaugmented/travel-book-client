import * as Google from "expo-google-app-auth";

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
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}
