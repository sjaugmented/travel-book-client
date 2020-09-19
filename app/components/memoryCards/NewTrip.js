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
import UserContext from "../../context/userContext";

function NewTrip({ navigation }) {
  const { tripActive, storeTripActive } = useContext(ActiveTripContext);
  const { userId } = useContext(UserContext);
  const memoryContext = useContext(MemoryContext);

  const handleSubmit = async () => {
    try {
      // lock it in
      let tripName = memoryContext.tripName;
      let data = {
        tripName,
        userId,
      };
      await TripModel.create(data);

      storeTripActive(true);

      //setModalVisible(false);
      navigation.navigate("NameOfPlace");
    } catch (error) {
      console.log(error);
    }
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
