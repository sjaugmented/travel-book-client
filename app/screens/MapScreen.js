import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Button, Modal } from 'react-native'
import NativeModal from 'react-native-modal'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-community/async-storage'

//Styles
import colors from '../config/colors'
import ButtonIcon from '../components/ButtonIcon'

//Navigators
import MenuNavigator from '../navigation/MenuNavigator'
import MemoryNavigator from '../navigation/MemoryNavigator'

//useContexts
import MemoryContext from '../context/memoryContext'
import TripContext from '../context/TripContext'
import TripShowContext from '../context/TripShowContext'
import ActiveTripContext from '../context/activeTripContext'

//API
import MemoryModel from '../api/memories'
import ModalContext from '../context/modalContext'
import UserContext from '../context/userContext'

import MapInput from '../components/MapInput'

function MapScreen({ navigation }) {
  //useContext
  const tripShowContext = useContext(TripShowContext)
  const { username, userId, logout } = useContext(UserContext)
  //Hide and show
  const [menuVisible, setMenuVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const [tripActive, setTripActive] = useState('')

  //Memory and Trip Hooks
  const [allMemories, setAllMemories] = useState('')
  const [memory, setMemory] = useState(null)
  const [tripName, setTripName] = useState('')
  const [location, setLocation] = useState()
  const [checkInPlace, setCheckInPlace] = useState('')
  const [checkInType, setCheckInType] = useState('')
  const [checkInTranspo, setCheckInTranspo] = useState('')
  const [checkInPhoto, setCheckInPhoto] = useState('')
  const [memoryLocation, setMemoryLocation] = useState('')

  //Hook for show trip window
  const [pickedTrip, setPickedTrip] = useState('')

  const getTripActive = async () => {
    try {
      const tripState = await AsyncStorage.getItem('tripActive')
      if (tripState === 'true') setTripActive(true)
      else setTripActive(false)
    } catch (error) {
      console.log(error)
    }
  }

  const storeTripActive = async (bool) => {
    try {
      const str = bool.toString()
      setTripActive(bool)
      await AsyncStorage.setItem('tripActive', str)
    } catch (error) {
      console.log(error)
    }
  }

  //setMemory with this data and call saveMemory function to add to db
  const addMemory = () => {
    let memoryData = {
      location: memoryLocation,
      locationName: checkInPlace,
      type: checkInType,
      transpo: checkInTranspo,
      photo: checkInPhoto,
    }
    setMemory(memoryData)
    if (!tripActive) storeTripActive(true)
    saveMemory(memoryData)
    setModalVisible(false)
    setCheckInType('')
    setCheckInPlace('')
    setCheckInTranspo('')
    setCheckInPhoto('')
  }

  const refreshMap = (delay) => {
    setTimeout(() => {
      getLocation()
      loadMemories()
    }, delay)
  }

  //Adding memory to db
  const saveMemory = async (memory) => {
    try {
      const data = {
        memory,
        tripName,
      }
      const result = await MemoryModel.create(data)
      setMemory(null)
    } catch (error) {
      console.log(error)
    }
  }

  //Setting latitude and longitude for current location
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync()
      if (!granted) {
        // error - we need your location dummy
      } else {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync()
        setLocation({ latitude, longitude })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const loadMemories = async () => {
    try {
      const { memories } = await MemoryModel.all()
      setAllMemories(memories)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTripActive()
    getLocation()
    loadMemories()
  }, [])

  return (
    <>
      {/* <View style={{ paddingTop: 50, flex: 0.4 }}>
        <MapInput />
      </View> */}
      {location && (
        <MapView
          // props
          style={styles.mapStyle}
          region={{
            latitude: location.latitude - 0.0055,
            longitude: location.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
        >
          {allMemories !== '' &&
            allMemories.map((marker, index) => (
              <Marker
                pinColor="blue"
                key={index}
                title={marker.locationName}
                coordinate={marker.location}
              />
            ))}
        </MapView>
      )}
      {!tripActive ? (
        <ButtonIcon
          style={styles.addButton}
          name="airplane"
          size={100}
          backgroundColor={colors.primary}
          iconColor={colors.light}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}
        />
      ) : (
        <ButtonIcon
          style={styles.addButton}
          name="plus"
          size={100}
          backgroundColor={colors.confirm}
          iconColor={colors.light}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}
        />
      )}
      <ButtonIcon
        style={styles.menuButton}
        name={'xbox-controller-menu'}
        size={65}
        backgroundColor="transparent"
        iconColor={colors.secondary}
        onPress={() => setMenuVisible(true)}
      />
      {/* MENU MODAL */}
      <NativeModal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
        onBackdropPress={() => setMenuVisible(false)}
        // onSwipeComplete={() => setMenuVisible(false)}
        // swipeDirection="down"
        // backdropColor="clear"
        // backdropOpacity={0}
        onModalHide={() => {
          getLocation()
          refreshMap(100)
        }}
      >
        <View style={styles.menuView}>
          <ButtonIcon
            style={{ alignSelf: 'center' }}
            name={'chevron-down'}
            backgroundColor={colors.light}
            iconColor={colors.primary}
            onPress={() => setMenuVisible(false)}
          />
          <Button title="Logout" onPress={logout} />
          <TripContext.Provider
            value={{ setPickedTrip: setPickedTrip, pickedTrip: pickedTrip }}
          >
            <ActiveTripContext.Provider
              value={{
                tripActive: tripActive,
                storeTripActive: storeTripActive,
              }}
            >
              <ModalContext.Provider value={setMenuVisible}>
                <MenuNavigator
                  tripActive={tripActive}
                  storeTripActive={storeTripActive}
                />
              </ModalContext.Provider>
            </ActiveTripContext.Provider>
          </TripContext.Provider>
        </View>
      </NativeModal>
      {/* MEMORY MODAL */}
      <NativeModal
        hasBackdrop={true}
        isVisible={modalVisible}
        // avoidKeyboard={true}
        animationType="slide"
        // transparent={true}
        onBackdropPress={() => setModalVisible(false)}
        backdropColor="clear"
        backdropOpacity={0}
        onModalHide={() => getLocation()}
        style={styles.memModal}
      >
        <View style={styles.memoryView}>
          <ActiveTripContext.Provider
            value={{ tripActive: tripActive, storeTripActive: storeTripActive }}
          >
            <MemoryContext.Provider
              style={styles.activeTrip}
              value={{
                setModalVisible: setModalVisible,
                onPress: addMemory,
                setCheckInPlace: setCheckInPlace,
                setCheckInType: setCheckInType,
                setCheckInTranspo: setCheckInTranspo,
                setCheckInPhoto: setCheckInPhoto,
                setTripName: setTripName,
                setMemoryLocation: setMemoryLocation,
                tripName: tripName,
                checkInPhoto: checkInPhoto,
                location: location,
                checkInType: checkInType,
                userId: userId,
              }}
            >
              <MemoryNavigator />
            </MemoryContext.Provider>
          </ActiveTripContext.Provider>
        </View>
      </NativeModal>
    </>
  )
}

const styles = StyleSheet.create({
  activeTrip: {
    backgroundColor: 'blue',
  },
  addButton: {
    position: 'absolute',
    bottom: 200,
    left: '50%',
    marginLeft: -50,
  },
  menuButton: {
    position: 'absolute',
    // backgroundColor: 'red',
    bottom: 75,
    left: '50%',
    marginLeft: -32.5,
  },
  confirmation: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapStyle: {
    flex: 1,
    alignItems: 'center',
  },
  memModal: {
    marginHorizontal: 50,
    marginTop: 200,
    marginBottom: 150,
    // backgroundColor: 'green',
    padding: 0,
  },
  memoryView: {
    flex: 1,
    padding: 0,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
  },
  menuView: {
    flex: 1,
    marginTop: 200,
    // margin: -21,
    backgroundColor: colors.light,
    borderRadius: 20,
    padding: 35,
    height: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 5,
  },
})

export default MapScreen
