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
import App from '../../../App'

function AppMenu({ navigation }) {
  const { username, userId, logout } = useContext(UserContext)
  const tripActive = useContext(ActiveTripContext)
  const tripContext = useContext(TripContext)
  const { setMenuVisible } = useContext(ModalContext)
  const [trips, setTrips] = useState([])
  const showTrip = useContext(TripShowContext)

  useEffect(() => {
    loadTrips()
  }, [])

  const loadTrips = async () => {
    try {
      const response = await UserModel.show(userId)
      console.log('AppMenu - Trip Fetch:', response.trips)
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
      <ButtonIcon
        style={{ alignSelf: 'center', marginBottom: 20 }}
        name={'chevron-down'}
        backgroundColor={colors.light}
        iconColor={colors.primary}
        onPress={() => setMenuVisible(false)}
      />
      <AppButton
        color={colors.primary}
        style={styles.logout}
        title="Logout"
        onPress={logout}
      />
      <AppButton
        color={colors.primary}
        title="Current Trip"
        style={styles.current}
      />
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
        {tripActive.tripActive &&
          ((<AppText style={{ backgroundColor: 'blue' }}>End Trip</AppText>),
          (
            <ButtonIcon
              name="minus-circle"
              size={75}
              backgroundColor={colors.light}
              iconColor={colors.danger}
              onPress={() => tripActive.storeTripActive(false)}
              activeOpacity={0.7}
            />
          ))}
      </View>
      <View style={styles.trophyContainer}>
        <AppText style={styles.text}>RECENT TROPHIES</AppText>
        <View style={styles.trophies}>
          <AppText>Trophy 1 </AppText>
          <AppText>Trophy 2 </AppText>
          <AppText>Trophy 3 </AppText>
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
    left: 20,
  },
  current: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 100,
    height: 50,
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
    marginBottom: 10,
    // backgroundColor: colors.background,
  },
  trophyContainer: {
    // backgroundColor: colors.background,
  },
  trophies: {
    flexDirection: 'row',
  },
  tripsContainer: {
    position: 'absolute',
    top: 220,
    left: width * 0.05,
    width: '70%',
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
