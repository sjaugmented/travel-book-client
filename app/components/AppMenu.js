import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import ButtonIcon from "./ButtonIcon";

function AppMenu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <ButtonIcon
          name="account"
          backgroundColor={colors.background}
          iconColor={colors.primary}
        />
        <ButtonIcon
          name="account-multiple"
          backgroundColor={colors.background}
          iconColor={colors.primary}
        />
        <ButtonIcon
          name="trophy-award"
          backgroundColor={colors.background}
          backgroundColor={colors.background}
          iconColor={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {},
});

export default AppMenu;
