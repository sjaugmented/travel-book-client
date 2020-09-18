import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import ButtonIcon from "../ButtonIcon";
import Screen from "../Screen";
import TripModel from "../../api/trips";

import MemoryContext from "../../context/memoryContext";
import ActiveTripContext from "../../context/activeTripContext";
import colors from "../../config/colors";
import AppHeader from "../AppHeader";

function NewTrip({ navigation }) {
  const { tripActive, storeTripActive } = useContext(ActiveTripContext);
  const memoryContext = useContext(MemoryContext);

  const handleSubmit = async () => {
    // lock it in
    const result = await TripModel.create(memoryContext.tripName);

    storeTripActive(true);

    //setModalVisible(false);
    navigation.navigate("NameOfPlace");
  };

  return (
    <View style={styles.container}>
      <View>
        <AppHeader>Where ya going?</AppHeader>
        <AppTextInput
          onChangeText={(text) => memoryContext.setTripName(text)}
          icon="airplane"
          placeholder="Name your trip!"
        />
        <ButtonIcon name="forward" size={30} onPress={() => handleSubmit()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default NewTrip;
