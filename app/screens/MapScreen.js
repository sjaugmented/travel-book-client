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
import AppMenu from "../components/menu/AppMenu";
import AppText from "../components/AppText";
import MemoryNavigator from "../components/MemoryNavigator";
import ModalContext from "../context/modalContext";
import ActiveTripContext from "../context/activeTripContext";

function MapScreen({ navigation }) {
  const [location, setLocation] = useState();
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
    setModalVisible(true);
  };

  const handlePress = (name) => {
    console.log(name);
  };

  return (
    <>
      {location && (
        <MapView
          // props
          style={styles.mapStyle}
          region={{
            latitude: location.latitude - 0.0055,
            longitude: location.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
        >
          {!tripActive ? (
            <ButtonIcon
              style={styles.addButton}
              name="airplane"
              size={100}
              backgroundColor={colors.primary}
              iconColor={colors.light}
              onPress={() => setModalVisible(true)}
              activeOpacity={0.7}
            />
          ) : (
            <ButtonIcon
              style={styles.addButton}
              name="plus"
              size={100}
              backgroundColor={colors.confirm}
              iconColor={colors.light}
              onPress={() => setModalVisible(true)}
              activeOpacity={0.7}
            />
          )}
          <ButtonIcon
            style={styles.menuButton}
            name={"xbox-controller-menu"}
            size={65}
            backgroundColor={colors.light}
            iconColor={colors.secondary}
            onPress={() => setMenuVisible(true)}
          />
        </MapView>
      )}
      {/* MENU MODAL */}
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
        onBackdropPress={() => setMenuVisible(false)}
        // onSwipeComplete={() => setMenuVisible(false)}
        swipeDirection="down"
        backdropColor="clear"
        backdropOpacity={0}
        onModalHide={() => getLocation()}
      >
        <View style={styles.menuView}>
          <Button title="Close" onPress={() => setMenuVisible(false)} />
          <Button
            title="Welcome Screen"
            onPress={() => navigation.navigate("Welcome")}
          />
          <AppMenu tripActive={tripActive} setTripActive={setTripActive} />
        </View>
      </Modal>
      {/* MEMORY MODAL */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onBackdropPress={() => setModalVisible(false)}
        backdropColor="clear"
        backdropOpacity={0}
        onModalHide={() => getLocation()}
      >
        <View style={styles.memoryView}>
          <ActiveTripContext value={tripActive}>
            <ModalContext.Provider value={setModalVisible}>
              <MemoryNavigator setMemoryVisible={setModalVisible} />
            </ModalContext.Provider>
          </ActiveTripContext>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 200,
  },
  menuButton: {
    position: "absolute",
    bottom: 75,
    // right: 50,
    position: "absolute",
    bottom: 150,
  },
  confirmation: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  mapStyle: {
    flex: 1,
    alignItems: "center",
  },
  memoryView: {
    flex: 1,
    marginTop: 350,
    marginBottom: 120,
    // margin: -20,
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
    borderRadius: 10,
  },
  menuButton: {
    position: "absolute",
    bottom: 70,
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
});

export default MapScreen;
