import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import AppText from "../AppText";
import ListItem from "../ListItem";

function TripList({ data, handlePress }) {
  console.log("data:", data);
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item, index) => (
          <ListItem
            title={item.name}
            subTitle={item.year}
            key={index}
            onPress={() => handlePress(item.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15, marginTop: 10, height: 375 },
});

export default TripList;
