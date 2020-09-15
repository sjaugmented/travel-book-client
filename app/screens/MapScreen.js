import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ButtonIcon from "../components/ButtonIcon";

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
        >
          <ButtonIcon
            style={styles.buttonIcon}
            name="plus-circle"
            size={100}
            backgroundColor={colors.light}
            iconColor={colors.confirm}
            onPress={() => console.log(location)}
            activeOpacity={0.7}
          />
        </MapView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
    alignItems: "center",
  },
  buttonIcon: {
    position: "absolute",
    bottom: 200,
  },
});

export default MapScreen;
