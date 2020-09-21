import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import TripShowContext from '../context/TripShowContext'
import MapView, { Marker } from 'react-native-maps'
import MemoryModel from '../api/memories'

function MemoryScreen({ navigation }) {
  const { showMemory } = useContext(TripShowContext)
  const [displayMemory, setDisplay] = useState('')

  useEffect(() => {
    loadMemory()
  }, [])

  const loadMemory = async () => {
    try {
      const response = await MemoryModel.show(showMemory)
      setDisplay(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.memoryContainer}>
      <Text>{displayMemory.locationName}</Text>
      <Image
        source={{ uri: displayMemory.photo }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  memoryContainer: {
    flex: 1,
    position: 'relative',
  },
  mapContainer: {
    flex: 1,
    marginTop: 10,
    height: 200,
  },
  mapStyle: {
    flex: 1,
    alignItems: 'center',
  },
})

export default MemoryScreen
