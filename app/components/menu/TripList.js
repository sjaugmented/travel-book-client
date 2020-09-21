import React from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import AppText from '../AppText'
import ListItem from '../lists/ListItem'
import ListItemSeparator from '../lists/ListItemSeparator'
import colors from '../../config/colors'

function TripList({ data, handlePress }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(trip) => trip.name.toString()}
        renderItem={({ item }) => (
          <ListItem
            color={colors.dark}
            fontSize={20}
            underlayColor={colors.light}
            title={item.name}
            subTitle={item.year}
            onPress={() => handlePress(item.name)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 15, marginTop: 0, height: 375 },
})

export default TripList
