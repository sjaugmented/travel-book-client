import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import colors from '../../config/colors'
import ButtonIcon from '../ButtonIcon'
import AppText from '../AppText'
import TripModel from '../../api/trips'
import ListItem from '../ListItem'

function AppMenu({ tripActive, setTripActive }) {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    loadTrips()
  }, [])

  const loadTrips = async () => {
    const response = await TripModel.all()
    setTrips(response.trips)
    // console.log(response.trips)
  }

  return (
    <View>
      <View style={styles.navbar}>
        <ButtonIcon
          name="account"
          backgroundColor={colors.background}
          iconColor={colors.secondary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="account-multiple"
          backgroundColor={colors.background}
          iconColor={colors.secondary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="trophy-award"
          backgroundColor={colors.background}
          backgroundColor={colors.background}
          iconColor={colors.secondary}
          style={{ marginBottom: 40 }}
        />
        {tripActive && (
          <ButtonIcon
            name="minus-circle"
            size={75}
            backgroundColor={colors.light}
            iconColor={colors.danger}
            onPress={() => setTripActive(false)}
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
            <ListItem
              name={item.name}
              year={item.year}
              onPress={() => console.log('trip selected', item)}
            />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    position: 'absolute',
    right: 20,
    top: 225,
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    color: colors.primary,
  },
  trophies: {},
  trips: {
    position: 'absolute',
    top: 225,
    width: 200,
  },
})

export default AppMenu
