import React from "react";
import { Text, StyleSheet } from "react-native";

export default function AppHeader({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Avenir Next",
  },
});
