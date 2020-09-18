import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";
import AppText from "../components/AppText";

import TripContext from "../context/TripContext";
import TripModel from "../api/trips";
import AppHeader from "../components/AppHeader";
import TripShowContext from "../context/TripShowContext";
import colors from "../config/colors";
// import { PieChart } from "react-native-svg-charts";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

const mileage = {
  air: 6500,
  car: 340,
  bus: 782,
  boat: 0,
  foot: 108,
};

function TripScreen({ navigation }) {
  const showTrip = useContext(TripShowContext);
  const [displayTrip, setDisplay] = useState("");
  console.log("showTrip:", showTrip);

  useEffect(() => {
    loadTrip();
    // tripContext.setPickedTrip("");
  }, []);

  const loadTrip = async () => {
    try {
      const response = await TripModel.show(showTrip.showTrip);
      console.log(response.trip);
      setDisplay(response.trip);
    } catch (error) {
      console.log(error);
    }
  };

  let memoryList;

  if (displayTrip) {
    memoryList = displayTrip.memories.map((item, key) => {
      return <AppText key={key}>{item._id}</AppText>;
    });
  } else {
    memoryList = <AppText>Loading...</AppText>;
  }

  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome_palms.jpg")}
        style={styles.tripPic}
        resizeMode="center"
      />
      <View style={styles.trip}>
        <AppHeader style={styles.header}>
          {displayTrip ? displayTrip.name : "Loading..."}
        </AppHeader>

        <AppText>{displayTrip.year}</AppText>

        {/* <PieChart style={{ height: 200 }} data={pieData} /> */}

        <View>
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
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </View>

        <View style={styles.memoryList}>{memoryList}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tripPic: { width: "100%", height: 200 },
  trip: {
    flex: 1,
    padding: 10,
  },
  charts: {
    flex: 1,
    height: 200,
    width: Dimensions.get("screen").width,
  },
});

export default TripScreen;
