import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import ButtonIcon from "./ButtonIcon";

function AppMenu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <ButtonIcon name="account-outline" />
        <ButtonIcon name="account-multiple-outline" />
        <ButtonIcon name="trophy-award" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navbar: {},
});

export default AppMenu;
