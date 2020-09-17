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

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome_palms.jpg")}
        style={styles.tripPic}
        resizeMode="center"
      />
      <AppHeader style={styles.header}>
        {displayTrip ? displayTrip.name : "Loading..."}
      </AppHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  tripPic: { width: "100%", height: 100 },
});

export default TripScreen;
