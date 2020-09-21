import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'
import ButtonIcon from '../ButtonIcon'
import AppText from '../AppText'

import TripContext from '../../context/TripContext'
import ActiveTripContext from '../../context/activeTripContext'
import AppButton from '../AppButton'
import TripList from './TripList'
import ModalContext from '../../context/modalContext'
import TripShowContext from '../../context/TripShowContext'
import UserModel from '../../api/user'
import UserContext from '../../context/userContext'
import AppHeader from '../AppHeader'

function AppMenu({ navigation }) {
  const { username, userId, logout } = useContext(UserContext)
  const { tripActive, storeTripActive } = useContext(ActiveTripContext)
  const { tripName, refreshMap } = useContext(TripContext)
  const { setMenuVisible } = useContext(ModalContext)
  const [trips, setTrips] = useState([])
  const { showTrip, setShowTrip } = useContext(TripShowContext)

  useEffect(() => {
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
    setShowTrip(trip)
    setMenuVisible(false)
    navigation.navigate('Trip')
  }

  return (
    <View style={styles.container}>
      <AppButton
        textColor={colors.primary}
        color="transparent"
        fontSize={15}
        style={styles.logout}
        title="Logout"
        onPress={logout}
      />
      {tripActive && (
        <AppButton
          textColor={colors.primary}
          color="transparent"
          fontSize={20}
          title={tripName}
          style={styles.current}
          onPress={() => handlePress(tripName)}
        />
      )}
      <View style={styles.navbar}>
        <ButtonIcon
          name="account"
          backgroundColor={colors.light}
          iconColor={colors.primary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="account-multiple"
          backgroundColor={colors.light}
          iconColor={colors.primary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="trophy-award"
          backgroundColor={colors.light}
          iconColor={colors.primary}
          style={{ marginBottom: 40 }}
        />
        {tripActive && (
          <>
            <AppText style={{ color: colors.danger, marginBottom: -7 }}>
              End Trip
            </AppText>
            <ButtonIcon
              name="minus-circle"
              size={75}
              backgroundColor="transparent"
              iconColor={colors.danger}
              onPress={() => storeTripActive(false)}
              activeOpacity={0.7}
            />
          </>
        )}
      </View>
      <View style={styles.trophyContainer}>
        <AppText style={styles.text}>RECENT TROPHIES</AppText>
        <View style={styles.trophies}>
          <ButtonIcon margin={5} size={30} iconColor="red" name="trophy" />
          <ButtonIcon
            margin={5}
            size={30}
            iconColor="green"
            name="trophy-award"
          />
          <ButtonIcon
            margin={5}
            size={30}
            iconColor="white"
            name="trophy-variant"
          />
        </View>
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

const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: width * 0.05,
    borderTopStartRadius: 50,
    borderTopRightRadius: 50,
  },
  logout: {
    width: 100,
    height: 50,
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'flex-end',
  },
  current: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 150,
    height: 50,
    alignItems: 'baseline',
  },
  navbar: {
    position: 'absolute',
    right: width * 0.05,
    bottom: 50,
    alignItems: 'center',
    // backgroundColor: colors.background,
  },
  text: {
    fontWeight: '500',
    color: colors.primary,
    marginBottom: 5,
    // backgroundColor: colors.background,
  },
  trophyContainer: {
    // backgroundColor: colors.background,
    position: 'absolute',
    top: 70,
    left: width * 0.05,
  },
  trophies: {
    flexDirection: 'row',
  },
  tripsContainer: {
    position: 'absolute',
    top: 160,
    left: width * 0.05,
    width: '70%',
  },
  tripList: {
    backgroundColor: colors.background,
  },
})

export default AppMenu
