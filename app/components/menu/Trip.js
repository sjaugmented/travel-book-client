import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import AppText from "../AppText";

import TripContext from "../../context/TripContext";
import TripModel from "../../api/trips";

function Trip({ navigation }) {
  const tripContext = useContext(TripContext);

  useEffect(() => {
    loadTrip();
    tripContext.setPickedTrip("");
  }, []);

  const loadTrip = async () => {
    try {
      const response = await TripModel.show(tripContext.pickedTrip);
    } catch (error) {
      console.log(error);
    }
  };

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default Trip;
