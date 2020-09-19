import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import colors from '../../config/colors'
import ButtonIcon from '../ButtonIcon'
import AppText from '../AppText'
import TripModel from '../../api/trips'
import ListItem from '../ListItem'

import TripContext from '../../context/TripContext'
import ActiveTripContext from '../../context/activeTripContext'
import { ScrollView } from 'react-native-gesture-handler'
import TripList from './TripList'
import ModalContext from '../../context/modalContext'
import TripShowContext from '../../context/TripShowContext'
import UserModel from '../../api/user'
import UserContext from '../../context/userContext'

function AppMenu({ navigation }) {
  const { userId } = useContext(UserContext)
  const tripActive = useContext(ActiveTripContext)
  const tripContext = useContext(TripContext)
  const setMenuVisible = useContext(ModalContext)
  const [trips, setTrips] = useState([])
  const showTrip = useContext(TripShowContext)

  useEffect(() => {
    // console.log("AppMenu.js useEffect");
    loadTrips()
  }, [])

  const loadTrips = async () => {
    try {
      const response = await UserModel.show(userId)
      !response
        ? setTrips([{ name: 'Kinda empty here...', year: '' }])
        : setTrips(response.trips)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePress = (trip) => {
    showTrip.setShowTrip(trip)
    setMenuVisible(false)
    navigation.navigate('Trip')
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
      <View style={styles.trips}>
        <AppText style={styles.text}>MY TRIPS</AppText>
        <TripList style={styles.trips} data={trips} handlePress={handlePress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 30,
    borderRadius: 20,
  },
  navbar: {
    position: 'absolute',
    right: 30,
    top: 225,
    alignItems: 'center',
    // backgroundColor: colors.background,
  },
  text: {
    fontWeight: '500',
    color: colors.primary,
    // backgroundColor: colors.background,
  },
  trophies: {
    // backgroundColor: colors.background
  },
  trips: {
    position: 'absolute',
    top: 150,
    left: 30,
    width: 225,
    // backgroundColor: colors.background,
  },
  scrollView: {
    //
  },
})

export default AppMenu
