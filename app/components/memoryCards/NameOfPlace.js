import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MemoryContext from '../../context/memoryContext'

import colors from '../../config/colors'
import ListItem from '../ListItem'
import AppHeader from '../AppHeader'
import ListItemSeparator from '../ListItemSeparator'

const apiUrl =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDrvZS4PB_SJNZV4Eaz4jX5yTEUi51P4Ks&radius=350'

function NameOfPlace({ navigation }) {
  const memoryContext = useContext(MemoryContext)
  const checkInType = memoryContext.checkInType
  const latitude = memoryContext.location.latitude
  const longitude = memoryContext.location.longitude
  const [results, setResults] = useState('')

  const fetchData = async () => {
    let response = await fetch(
      `${apiUrl}&location=${latitude},${longitude}&type=${checkInType}`,
    )
    let list = await response.json()

    console.log('results', list.results)
    setResults(list.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handlePress = (name) => {
    memoryContext.setCheckInPlace(name)
    navigation.navigate('Transpo')
  }

  return (
    <View style={styles.memoryView}>
      <AppHeader style={styles.header}>Choose Your Location</AppHeader>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={{ justifyContent: 'center' }}
        data={results}
        keyExtractor={(place) => place.place_id.toString()}
        renderItem={({ item }) => (
          <ListItem title={item.name} onPress={() => handlePress(item.name)} />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    borderRadius: 50,
    opacity: 0,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  header: {
    fontSize: 30,
    marginBottom: 0,
    marginTop: 20,
  },
  listContainer: {
    marginTop: 10,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
})

export default NameOfPlace
