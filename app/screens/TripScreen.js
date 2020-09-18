import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import AppText from "../components/AppText";

import TripContext from "../context/TripContext";
import TripModel from "../api/trips";
import AppHeader from "../components/AppHeader";
import TripShowContext from "../context/TripShowContext";

function TripScreen({ navigation }) {
  const showTrip = useContext(TripShowContext);
  const [displayTrip, setDisplay] = useState("");
  console.log("showTrip:", showTrip);

  useEffect(() => {
    loadTrip();
    // tripContext.setPickedTrip("");
  }, []);

  const loadTrip = async () => {
    try {
      const response = await TripModel.show(showTrip.showTrip);
      console.log(response.trip);
      setDisplay(response.trip);
    } catch (error) {
      console.log(error);
    }
  };

  let memoryList;

  if (displayTrip) {
    memoryList = displayTrip.memories.map((item, key) => {
      return <AppText key={key}>{item._id}</AppText>;
    });
  } else {
    memoryList = <AppText>Loading...</AppText>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome_palms.jpg")}
        style={styles.tripPic}
        resizeMode="center"
      />
      <View style={styles.trip}>
        <AppHeader style={styles.header}>
          {displayTrip ? displayTrip.name : "Loading..."}
        </AppHeader>
        <AppText>{displayTrip.year}</AppText>
        {memoryList}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tripPic: { width: "100%", height: 200 },
  trip: {
    flex: 1,
    padding: 10,
  },
});

export default TripScreen;
