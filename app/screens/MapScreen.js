import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function MapScreen(props) {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) {
      // error - we need your location dummy
    } else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {location && (
        <MapView
          // props
          style={styles.mapStyle}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        ></MapView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
    // justifyContent: "flex-end",
  },
  text: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default MapScreen;
