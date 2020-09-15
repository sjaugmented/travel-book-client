import React from "react";
import { View, StyleSheet } from "react-native";

function TypeOfPlace(props) {
  return (
    <View style={styles.memoryView}>
      <AppText>Whatcha doin?</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("food")}
          name="food"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("nightlife")}
          name="beer"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("site-seeing")}
          name="camera"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("lodging")}
          name="bed-empty"
          size={50}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TypeOfPlace;
