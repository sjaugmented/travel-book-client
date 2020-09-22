import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ButtonIcon from '../components/ButtonIcon'
import FriendsListItem from '../components/lists/FriendsListItem'
// import ListItem from '../components/lists/ListItem'

const friends = [
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Seth',
    activeTrip: 'true',
    id: 1,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Manny',
    activeTrip: 'false',
    id: 2,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Toki',
    activeTrip: 'false',
    id: 3,
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/-WR4HHofix6s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnLT1grddVu0z0mi4t5FH34ruzc-A/photo.jpg',
    name: 'Tiffany',
    activeTrip: 'true',
    id: 4,
  },
]

export default function FriendsScreen() {
  return (
    <View style={styles.friendsContainer}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FriendsListItem
            name={item.name}
            active={item.activeTrip}
            avatar={item.avatar}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  friendsContainer: {
    flex: 1,
  },
})
