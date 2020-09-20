import React, { useState, useEffect, useContext } from "react"
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native"
import colors from "../../config/colors"
import ButtonIcon from "../ButtonIcon"
import AppText from "../AppText"
import TripModel from "../../api/trips"
import ListItem from "../lists/ListItem"

import TripContext from "../../context/TripContext"
import ActiveTripContext from "../../context/activeTripContext"
import { ScrollView } from "react-native-gesture-handler"
import TripList from "./TripList"
import ModalContext from "../../context/modalContext"
import TripShowContext from "../../context/TripShowContext"
import UserModel from "../../api/user"
import UserContext from "../../context/userContext"

function AppMenu({ navigation }) {
  const { userId } = useContext(UserContext)
  const tripActive = useContext(ActiveTripContext)
  const tripContext = useContext(TripContext)
  const setMenuVisible = useContext(ModalContext)
  const [trips, setTrips] = useState([])
  const showTrip = useContext(TripShowContext)

  useEffect(() => {
    loadTrips()
  }, [])

  const loadTrips = async () => {
    try {
      const response = await UserModel.show(userId)
      console.log("AppMenu - Trip Fetch:", response.trips)
      !response
        ? setTrips([{ name: "Kinda empty here...", year: "" }])
        : setTrips(response.trips)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePress = (trip) => {
    showTrip.setShowTrip(trip)
    setMenuVisible(false)
    navigation.navigate("Trip")
  }

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
            onPress={() => tripActive.storeTripActive(false)}
            activeOpacity={0.7}
          />
        )}
      </View>
      <View style={styles.trophies}>
        <AppText style={styles.text}>RECENT TROPHIES</AppText>
      </View>
      <View style={styles.tripsContainer}>
        <AppText style={styles.text}>MY TRIPS</AppText>
        <TripList
          style={styles.tripList}
          data={trips}
          handlePress={handlePress}
        />
      </View>
    </View>
  )
}

const width = Dimensions.get("screen").width
console.log(width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: width * 0.05,
    // padding: 30,
    // borderRadius: 20,
  },
  navbar: {
    position: "absolute",
    right: width * 0.05,
    top: 175,
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
  tripsContainer: {
    position: "absolute",
    top: 150,
    left: width * 0.05,
    width: "70%",
    // backgroundColor: colors.background,
  },
  tripList: {
    //
  },
  scrollView: {
    //
  },
})

export default AppMenu
