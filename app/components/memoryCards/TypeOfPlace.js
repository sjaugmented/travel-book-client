import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import ButtonIcon from "../ButtonIcon";

function TypeOfPlace({ navigation }) {
  // const tripInfo = useContext(tripContext);
  const handlePress = (string) => {
    console.log(string);
    navigation.navigate("Transpo");
  };

  return (
    <View style={styles.memoryView}>
      <AppText>Whatcha doin?</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("food")}
          name="food"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("nightlife")}
          name="beer"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("site-seeing")}
          name="camera"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("lodging")}
          name="bed-empty"
          size={50}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
  },
  icon: {
    margin: 10,
  },
});

export default TypeOfPlace;
