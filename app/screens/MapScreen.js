import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

function MapScreen(props) {
  return <MapView></MapView>;
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
