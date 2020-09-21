import React, { useContext, useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native"
import NativeModal from "react-native-modal"
import AppText from "../components/AppText"
import ButtonIcon from "../components/ButtonIcon"
import MapView, { Marker } from "react-native-maps"
import TripModel from "../api/trips"
import AppHeader from "../components/AppHeader"
import TripShowContext from "../context/TripShowContext"
import colors from "../config/colors"
import { PieChart as PieChart2 } from "react-native-svg-charts"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit"
import { ScrollView } from "react-native-gesture-handler"
import Swipeable from "react-native-gesture-handler/Swipeable"
import ListItemSeparator from "../components/lists/ListItemSeparator"
import ListItem from "../components/lists/ListItem"
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction"
import MemoryModel from "../api/memories"
import AppButton from "../components/AppButton"

const { width, height } = Dimensions.get("window")

function TripScreen({ navigation }) {
  const { showTrip } = useContext(TripShowContext)
  const [displayTrip, setDisplay] = useState("")
  // const [memObj, setMemObj] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [memoryToDelete, setMemoryToDelete] = useState("")

  useEffect(() => {
    loadTrip()
  }, [])

  const loadTrip = async () => {
    try {
      const response = await TripModel.show(showTrip)
      setDisplay(response.trip)
    } catch (error) {
      console.log(error)
    }
  }

  // const pieChart1 = [
  //   {
  //     name: 'Eating',
  //     mileage: 10,
  //     color: 'rgba(131, 167, 234, 1)',
  //     legendFontColor: colors.light,
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Drinking',
  //     mileage: 6,
  //     color: '#F00',
  //     legendFontColor: colors.light,
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Sight-Seeing',
  //     mileage: 25,
  //     color: 'purple',
  //     legendFontColor: colors.light,
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Sleeping',
  //     mileage: 30,
  //     color: 'rgb(40, 167, 44)',
  //     legendFontColor: colors.light,
  //     legendFontSize: 15,
  //   },
  // ]

  const pieChart2 = [
    {
      name: "Plane",
      mileage: 6500,
      color: "rgb(255, 255, 255)",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Car",
      mileage: 940,
      color: "#F00",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Bus",
      mileage: 1802,
      color: "orange",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Boat",
      mileage: 500,
      color: "blue",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Foot",
      mileage: 1080,
      color: "rgb(0, 128, 0)",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
  ]

  const data3 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    )

  const overviewData = data3
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log("press", index),
      },
      key: `pie-${index}`,
    }))

  ////MEMORY STORAGE AND FUNCTION////
  let memObj = [{ locationName: "Loading...", _id: 1 }]

  if (displayTrip) {
    memObj = displayTrip.memories
  }

  const setDeleteState = (memoryId) => {
    setModalVisible(true)
    setMemoryToDelete(memoryId)
  }

  const deleteMemory = async (memoryId) => {
    try {
      await MemoryModel.delete(memoryId)
      setModalVisible(false)
      loadTrip()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTrip = async () => {
    await TripModel.delete(displayTrip._id)
    navigation.goBack()
  }

  return (
    <>
      <View style={styles.tripContainer}>
        <View style={styles.mapContainer}>
          {displayTrip ? (
            <MapView
              style={styles.mapStyle}
              region={{
                latitude: displayTrip.memories[0].location.latitude,
                longitude: displayTrip.memories[0].location.longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
              }}
            >
              {displayTrip.memories
                ? displayTrip.memories.map((marker, index) => (
                    <Marker
                      pinColor="blue"
                      key={index}
                      title={marker.locationName}
                      coordinate={marker.location}
                    />
                  ))
                : console.log("fuck u")}
            </MapView>
          ) : (
            console.log("nope")
          )}
        </View>

        <View style={styles.container}>
          {/* <ScrollView
          style={styles.trip}
          snapToInterval={height / 3}
          snapToAlignment={'center'}
        > */}
          <View style={styles.headerContainer}>
            <View style={styles.currentTrip}>
              <AppHeader style={styles.header}>
                {displayTrip && displayTrip.name}
              </AppHeader>
              <AppText>{displayTrip.year}</AppText>
            </View>
            <View style={styles.editDelete}>
              <ButtonIcon
                name="pencil-outline"
                margin={5}
                size={40}
                backgroundColor={colors.primary}
                color={colors.medium}
                onPress={() => console.log("edit", displayTrip)}
              />
              <ButtonIcon
                name="trash-can"
                margin={5}
                size={40}
                backgroundColor={colors.danger}
                onPress={() => deleteTrip()}
              />
            </View>
          </View>

          {/* <ScrollView
          style={styles.chartsContainer}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={200}
          snapToAlignment={'center'}
          contentInset={{
            top: 0,
            left: 30,
            bottom: 0,
            right: 30,
          }}
        >
          <View style={styles.charts}>
            <PieChart
              data={pieChart1}
              width={Dimensions.get('screen').width}
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              accessor="mileage"
              backgroundColor="transparent"
              paddingLeft="15"
            />
          </View> */}
          <View style={styles.charts2}>
            <PieChart
              data={pieChart2}
              width={Dimensions.get("screen").width}
              height={220}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              accessor="mileage"
              backgroundColor="transparent"
              paddingLeft="25"
            />
          </View>
          {/* </ScrollView> */}
          <View style={{ marginBottom: 10 }}>
            <AppHeader style={{ fontWeight: "bold" }}>MEMORIES</AppHeader>
            <View>
              <FlatList
                contentInset={{ bottom: 110, top: 0 }}
                data={memObj}
                keyExtractor={(memory) => memory._id.toString()}
                renderItem={({ item }) => (
                  <ListItem
                    style={styles.memoryContainer}
                    title={item.locationName}
                    onPress={() => console.log("Memory selected", item)}
                    renderRightActions={() => (
                      <ListItemDeleteAction
                        onPress={() => setDeleteState(item._id)}
                      />
                    )}
                  />
                )}
                ItemSeparatorComponent={ListItemSeparator}
              />
            </View>
          </View>
        </View>
      </View>

      {/* DELETE MODAL */}
      <NativeModal
        hasBackdrop={true}
        isVisible={modalVisible}
        // avoidKeyboard={true}
        // animationType="slide"
        // transparent={true}
        onBackdropPress={() => setModalVisible(false)}
        backdropColor="clear"
        backdropOpacity={0}
        style={styles.deleteModal}
      >
        <View style={styles.deleteView}>
          <AppText style={styles.deleteText}>
            Are you sure you want to delete this memory?
          </AppText>
          <View style={styles.modalButton}>
            <AppButton
              title="Fuck yes"
              color={colors.confirm}
              onPress={() => deleteMemory(memoryToDelete)}
            />
          </View>
          <View style={styles.modalButton}>
            <AppButton
              title="Shit, go back!"
              color={colors.danger}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </NativeModal>
    </>
  )
}

const styles = StyleSheet.create({
  tripContainer: {
    flex: 1,
  },
  mapContainer: {
    marginTop: 10,
    height: 200,
  },
  mapStyle: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    marginTop: 10,
  },
  editDelete: {
    flexDirection: "row",
  },
  // window: {
  //   flex: 1,
  //   width: '100%',
  //   height: '100%',
  // },
  charts2: {
    backgroundColor: colors.secondary,
    width: width - 50,
    margin: 10,
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  // memoryContainer: {
  //   flexWrap: 'wrap',
  //   flexDirection: 'row',
  //   marginTop: 0,
  //   flex: 1,
  // },
  // tripPic: { width: '100%', height: 200 },
  // trip: {
  //   flex: 1,
  //   padding: 10,
  // },
  // overview: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 20,
  //   padding: 5,
  // },
  // mainChart: {
  //   marginTop: 20,
  //   backgroundColor: colors.white,
  //   width: width - 80,
  //   margin: 10,
  //   height: 200,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   elevation: 3,
  // },
  // chartsContainer: {
  //   marginTop: 50,
  //   padding: 25,
  //   backgroundColor: 'black',
  // },
  // charts: {
  //   marginTop: 50,
  //   backgroundColor: colors.medium,
  //   color: 'white',
  //   width: width - 80,
  //   margin: 10,
  //   height: 200,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // memoryList: {
  //   flex: 1,
  //   marginTop: 0,
  //   marginBottom: 100,
  //   padding: 10,
  // },

  deleteModal: {
    flex: 1,
    marginHorizontal: 50,
    marginTop: 300,
    marginBottom: 200,
    backgroundColor: colors.white,
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 5,
  },
  deleteView: {
    padding: 0,
  },
  deleteText: {
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: { margin: 10 },
})

export default TripScreen
