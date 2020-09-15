import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ButtonIcon from "../components/ButtonIcon";
import AppMenu from "../components/AppMenu";
import AppText from "../components/AppText";

function MapScreen(props) {
  const [location, setLocation] = useState();
  const [menuVisible, setMenuVisible] = useState(false);
  const [memoryVisible, setMemoryVisible] = useState(false);
  const [tripActive, setTripActive] = useState(false);

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

  const beginTrip = () => {
    console.log("beginning trip from", location); // remove
    setTripActive(true);
  };

  const addMemory = () => {
    console.log("memory began at", location);
    setMemoryVisible(true);
  };

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
          {!tripActive ? (
            <ButtonIcon
              style={styles.addButton}
              name="airplane"
              size={100}
              backgroundColor={colors.confirm}
              iconColor={colors.light}
              onPress={() => beginTrip()}
              activeOpacity={0.7}
            />
          ) : (
            <ButtonIcon
              style={styles.addButton}
              name="plus"
              size={100}
              backgroundColor={colors.confirm}
              iconColor={colors.light}
              onPress={() => addMemory()}
              activeOpacity={0.7}
            />
          )}
          <ButtonIcon
            style={styles.menuButton}
            name={"xbox-controller-menu"}
            size={50}
            backgroundColor={colors.medium}
            iconColor={colors.light}
            onPress={() => setMenuVisible(true)}
          />
        </MapView>
      )}
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
        onBackdropPress={() => setMenuVisible(false)}
        onSwipeComplete={() => setMenuVisible(false)}
        swipeDirection="down"
        backdropColor="clear"
        backdropOpacity={0}
        onModalHide={() => getLocation()}
      >
        <View style={styles.menuView}>
          <Button title="Close" onPress={() => setMenuVisible(false)} />
          <AppMenu tripActive={tripActive} setTripActive={setTripActive} />
        </View>
      </Modal>
      <Modal
        visible={memoryVisible}
        animationType="fade"
        transparent={true}
        onBackdropPress={() => setMemoryVisible(false)}
        backdropColor="clear"
        backdropOpacity={0}
        onModalHide={() => getLocation()}
      >
        <View style={styles.memoryView}>
          <AppText>Component goes here</AppText>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
    alignItems: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 150,
  },
  menuButton: {
    position: "absolute",
    bottom: 70,
    right: 50,
  },
  menuView: {
    flex: 1,
    marginTop: 200,
    margin: -20,
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 35,
    height: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 5,
  },
  memoryView: {
    flex: 1,
    marginTop: 370,
    marginBottom: 120,
    margin: -20,
    backgroundColor: colors.background,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default MapScreen;
