import React from 'react'
import { View, StyleSheet } from 'react-native'
import PieChart from 'react-native-chart-kit'
import colors from '../config/colors'

function ChartCard({ data }) {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={}
        height={}
        chartConfig={}
        accessor={}
        backgroundColor={colors.secondary}
        paddingLeft="15"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.secondary },
})

export default ChartCard
