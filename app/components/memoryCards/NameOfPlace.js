import React, { useContext, useEffect, useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"
import MemoryContext from "../../context/memoryContext"
import HaversineGeolocation from "haversine-geolocation"

import colors from "../../config/colors"
import ListItem from "../lists/ListItem"
import AppHeader from "../AppHeader"
import ListItemSeparator from "../lists/ListItemSeparator"

import ButtonIcon from "../ButtonIcon"

let baseRadius = 500
let radius = baseRadius

function NameOfPlace({ navigation }) {
  const memoryContext = useContext(MemoryContext)
  const checkInType = memoryContext.checkInType
  const latitude = memoryContext.location.latitude
  const longitude = memoryContext.location.longitude
  const [results, setResults] = useState("")

  const fetchData = async (radius) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDrvZS4PB_SJNZV4Eaz4jX5yTEUi51P4Ks&radius=${radius}`

    let response = await fetch(`${apiUrl}&location=${latitude},${longitude}&type=${checkInType}`)

    let list = await response.json()

    if (list.results.length < 10 && radius <= 25000) {
      setResults([
        {
          name: `Searching ${radius / 1000} km's around you`,
          place_id: "ChIJQfa0jA7awoARMwBvbju-IK4",
          geometry: {
            location: {
              lat: 34.0848443,
              lng: -118.033012,
            },
          },
        },
      ])
      fetchData((radius *= 2))
    } else {
      setResults(list.results)
    }
  }

  useEffect(() => {
    fetchData(radius)
  }, [radius])

  const handlePress = (name, location) => {
    const placeLat = location.location.lat
    const placeLng = location.location.lng

    memoryContext.setMemoryLocation({ latitude: placeLat, longitude: placeLng })
    console.log("prevLocation", memoryContext.prevLocation)
    memoryContext.setCheckInPlace(name)
    navigation.navigate("Transpo")
  }

  return (
    <View style={styles.memoryView}>
      {/* <AppButton
        onPress={() => navigation.replace('TypeOfPlace')}
        title="Go Back"
      /> */}
      <AppHeader style={styles.header}>Choose Your Location</AppHeader>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={{ justifyContent: "center" }}
        data={results}
        keyExtractor={(place) => place.place_id.toString()}
        renderItem={({ item }) => <ListItem title={item.name} onPress={() => handlePress(item.name, item.geometry)} />}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <ButtonIcon style={styles.back} name="chevron-left" size={25} onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    borderRadius: 50,
    // opacity: 0.9,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  header: {
    fontSize: 30,
    marginBottom: 0,
    marginTop: 20,
  },
  listContainer: {
    marginTop: 10,
    flexWrap: "wrap",
    fontWeight: "bold",
    marginBottom: 10,
  },
  back: {
    position: "absolute",
    bottom: 5,
  },
})

export default NameOfPlace
