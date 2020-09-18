import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MemoryContext from '../../context/memoryContext'
import AppText from '../AppText'
import colors from '../../config/colors'
import ListItem from '../ListItem'
import AppHeader from '../AppHeader'

const apiUrl =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDrvZS4PB_SJNZV4Eaz4jX5yTEUi51P4Ks&radius=500&type=gym'
const places = [
  {
    name: 'Black Barn Restaurant',
    id: 1,
  },
  {
    name: 'The Waldorf Astoria',
    id: 2,
  },
  {
    name: 'Madison Square Park',
    id: 3,
  },
  {
    name: 'Empire State Building',
    id: 4,
  },
]
function NameOfPlace({ navigation }) {
  const memoryContext = useContext(MemoryContext)
  const latitude = memoryContext.location.latitude
  const longitude = memoryContext.location.longitude

  const fetchData = async () => {
    let response = await fetch(`${apiUrl}&location=${latitude},${longitude}`)
    let list = await response.json()
    for (let places of list.results) {
      console.log(places.name)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handlePress = (name) => {
    memoryContext.setCheckInPlace(name)
    navigation.navigate('TypeOfPlace')
  }

  return (
    <View style={styles.memoryView}>
      <AppHeader>Where Are You?</AppHeader>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={{ justifyContent: 'center' }}
        data={places}
        keyExtractor={(place) => place.id.toString()}
        renderItem={({ item }) => (
          <ListItem title={item.name} onPress={() => handlePress(item.name)} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default NameOfPlace
