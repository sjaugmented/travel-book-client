import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import colors from "../../config/colors";
import ButtonIcon from "../ButtonIcon";
import AppText from "../AppText";
import TripModel from "../../api/trips";
import ListItem from "../ListItem";

import TripContext from "../../context/TripContext";
import ActiveTripContext from "../../context/activeTripContext";

function AppMenu({ navigation }) {
  const tripActive = useContext(ActiveTripContext);
  const tripContext = useContext(TripContext);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    const response = await TripModel.all();
    setTrips(response.trips);
  };

  const handlePress = (trip) => {
    tripContext.setPickedTrip(trip);
    navigation.navigate("Trip");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <ButtonIcon
          name="account"
          backgroundColor={colors.light}
          iconColor={colors.secondary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="account-multiple"
          backgroundColor={colors.light}
          iconColor={colors.secondary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="trophy-award"
          backgroundColor={colors.light}
          iconColor={colors.secondary}
          style={{ marginBottom: 40 }}
        />
        {tripActive.tripActive && (
          <ButtonIcon
            name="minus-circle"
            size={75}
            backgroundColor={colors.light}
            iconColor={colors.danger}
            onPress={() => tripActive.setTripActive(false)}
            activeOpacity={0.7}
          />
        )}
      </View>
      <View style={styles.trophies}>
        <AppText style={styles.text}>RECENT TROPHIES</AppText>
      </View>
      <View style={styles.trips}>
        <AppText style={styles.text}>MY TRIPS</AppText>

        <FlatList
          data={trips}
          keyExtractor={(trip) => trip._id.toString()}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollView} scrollEnabled={scrollEnabled}>
              <ListItem
                title={item.name}
                subTitle={item.year}
                onPress={() => handlePress(item.name)}
              />
            </ScrollView>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 20,
    borderRadius: 20,
  },
  navbar: {
    position: "absolute",
    right: 20,
    top: 225,
    alignItems: "center",
    // backgroundColor: colors.background,
  },
  text: {
    fontWeight: "500",
    color: colors.primary,
    // backgroundColor: colors.background,
  },
  trophies: {
    // backgroundColor: colors.background
  },
  trips: {
    position: "absolute",
    top: 225,
    left: 20,
    width: 200,
    // backgroundColor: colors.background,
  },
});

export default AppMenu;
