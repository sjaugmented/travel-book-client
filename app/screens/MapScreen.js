import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ButtonIcon from "../components/ButtonIcon";
import AppMenu from "../components/AppMenu";

function MapScreen(props) {
  const [location, setLocation] = useState();
  const [modalVisible, setModalVisible] = useState(false);

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
            style={styles.addButton}
            name="plus-circle"
            size={100}
            backgroundColor={colors.light}
            iconColor={colors.confirm}
            onPress={() => console.log(location)}
            activeOpacity={0.7}
          />
          <ButtonIcon
            style={styles.menuButton}
            name={"xbox-controller-menu"}
            size={50}
            backgroundColor={colors.medium}
            iconColor={colors.light}
            onPress={() => setModalVisible(true)}
          />
        </MapView>
      )}
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="formSheet"
        style={styles.modalContent}
      >
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <AppMenu />
        </Screen>
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
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
});

export default MapScreen;
