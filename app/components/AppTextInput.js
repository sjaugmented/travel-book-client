import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "90%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: "Avenir Next",
  },
});
