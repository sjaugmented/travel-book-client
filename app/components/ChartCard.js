import React from "react";
import { View, StyleSheet } from "react-native";
import PieChart from "react-native-chart-kit";

function ChartCard({ data }) {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={}
        height={}
        chartConfig={}
        accessor={}
        backgroundColor={}
        paddingLeft="15"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChartCard;
