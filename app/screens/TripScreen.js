import React, { useContext, useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  FlatList,
} from "react-native"
import AppText from "../components/AppText"

import TripContext from "../context/TripContext"
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

const { width, height } = Dimensions.get("window")

function TripScreen({ navigation }) {
  const showTrip = useContext(TripShowContext)
  const [displayTrip, setDisplay] = useState("")

  useEffect(() => {
    loadTrip()
    // tripContext.setPickedTrip("");
  }, [])

  const loadTrip = async () => {
    try {
      const response = await TripModel.show(showTrip.showTrip)
      setDisplay(response.trip)
    } catch (error) {
      console.log(error)
    }
  }

  let memoryList

  ////MEMORIES////
  if (displayTrip) {
    memoryList = displayTrip.memories.map((item, key) => {
      return (
        <Swipeable renderRightAction={() => console.log("delete!")}>
          <TouchableHighlight>
            <View>
              <Text key={key}>{item.locationName}</Text>
              {/* <AppText key={key}>{item.locationName}</AppText>; */}
            </View>
          </TouchableHighlight>
        </Swipeable>
      )
    })
  } else {
    memoryList = <AppText>Loading...</AppText>
  }

  const data0 = [
    {
      name: "Eating",
      mileage: 10,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Drinking",
      mileage: 6,
      color: "#F00",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Sight-Seeing",
      mileage: 25,
      color: "purple",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Sleeping",
      mileage: 30,
      color: "rgb(40, 167, 44)",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
  ]

  const data = [
    {
      name: "Air",
      mileage: 6500,
      color: "rgb(255, 255, 255)",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Car",
      mileage: 340,
      color: "#F00",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Bus",
      mileage: 782,
      color: "orange",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Boat",
      mileage: 0,
      color: "blue",
      legendFontColor: colors.light,
      legendFontSize: 15,
    },
    {
      name: "Foot",
      mileage: 108,
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

  const pieData = data3
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log("press", index),
      },
      key: `pie-${index}`,
    }))

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome_palms.jpg")}
        style={styles.tripPic}
        resizeMode="center"
      />
      <ScrollView
        style={styles.trip}
        snapToInterval={height / 3}
        snapToAlignment={"center"}
      >
        <AppHeader style={styles.header}>
          {displayTrip ? displayTrip.name : "Loading..."}
        </AppHeader>

        <AppText>{displayTrip.year}</AppText>

        <View style={styles.overview}>
          <AppText>This is a bullshit chart.</AppText>
          <PieChart2 style={styles.mainChart} data={pieData} />
        </View>

        <ScrollView
          style={styles.chartsContainer}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={200}
          snapToAlignment={"center"}
          contentInset={{
            top: 0,
            left: 30,
            bottom: 0,
            right: 30,
          }}
        >
          <View style={styles.charts}>
            <AppText>Here's another bullshit chart.</AppText>
            <PieChart
              data={data0}
              width={Dimensions.get("screen").width}
              height={220}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
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
          </View>
          <View style={styles.charts2}>
            <AppText>And one more. Also bullshit.</AppText>
            <PieChart
              data={data}
              width={Dimensions.get("screen").width}
              height={220}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
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
          </View>
        </ScrollView>

        <View>
          <AppText style={{ fontWeight: "bold" }}>MEMORIES</AppText>
          <View style={styles.memoryList}>{memoryList}</View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  window: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  tripPic: { width: "100%", height: 200 },
  trip: {
    flex: 1,
    padding: 10,
  },
  overview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 5,
  },
  mainChart: {
    marginTop: 20,
    backgroundColor: colors.white,
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // elevation: 3,
  },
  chartsContainer: {
    // marginTop: 50,
    padding: 25,
    // backgroundColor: "black",
  },
  charts: {
    // marginTop: 50,
    backgroundColor: colors.medium,
    color: "white",
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  charts2: {
    // marginTop: 50,
    backgroundColor: colors.medium,
    color: colors.light,
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  memoryList: {
    flex: 1,
    marginTop: 0,
    marginBottom: 200,
  },
})

export default TripScreen
