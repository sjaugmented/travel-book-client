import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ButtonIcon from '../components/ButtonIcon'

import FriendsListItem from '../components/lists/FriendsListItem'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItemSeparator from '../components/lists/ListItemSeparator'

const friends = [
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Seth Johnson',
    activeTrip: true,
    id: 1,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Manny Parra',
    activeTrip: false,
    id: 2,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Joe Turse',
    activeTrip: false,
    id: 3,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Micahel Giannone',
    activeTrip: false,
    id: 4,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Paul Croce',
    activeTrip: true,
    id: 5,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Vinny Loverde',
    activeTrip: true,
    id: 6,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Chris DeBona',
    activeTrip: false,
    id: 7,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Ryan Kleshefski',
    activeTrip: true,
    id: 8,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Timmy Moynihan',
    activeTrip: true,
    id: 9,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Ryan Taylor',
    activeTrip: true,
    id: 10,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Dillon Guardinio',
    activeTrip: false,
    id: 11,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Pat Doherty',
    activeTrip: true,
    id: 12,
  },
]

export default function FriendsScreen() {
  return (
    <View style={styles.friendsContainer}>
      <AppText fontSize={30}>Friends</AppText>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FriendsListItem
            underlayColor={colors.primary}
            name={item.name}
            active={item.activeTrip}
            avatar={item.avatar}
            onPress={() => console.log(item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  friendsContainer: {
    // backgroundColor: 'blue',
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    // marginTop: 200,
  },
})
