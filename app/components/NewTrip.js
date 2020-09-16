import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import Screen from "./Screen";

import ModalContext from "../context/modalContext";
import ActiveTripContext from "../context/ActiveTripContext";

function NewTrip(props) {
  const [tripActive, setActiveTrip] = useContext(ActiveTripContext);
  const [modalVisible, setModalVisible] = useContext(ModalContext);
  const [tripName, setTripName] = useState("");

  const handleChange = (e) => {
    // update state
    setTripName(e.target.value);
  };

  const handleSubmit = async () => {
    // lock it in
    //const newTrip = await TripModel.create(tripName);
    console.log("tripName:", tripName);
    setActiveTrip(true);
    setModalVisible(false);
  };

  return (
    <Screen style={styles.container}>
      <AppText>Where ya going?</AppText>
      <AppTextInput icon="airplane" placeholder="Name your trip!" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NewTrip;
