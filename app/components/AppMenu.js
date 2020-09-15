import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import ButtonIcon from "./ButtonIcon";

function AppMenu(props) {
  return (
    <View>
      <View style={styles.navbar}>
        <ButtonIcon
          name="account"
          backgroundColor={colors.background}
          iconColor={colors.primary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="account-multiple"
          backgroundColor={colors.background}
          iconColor={colors.primary}
          style={{ marginBottom: 20 }}
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
  navbar: {
    position: "absolute",
    right: 20,
    top: 250,
  },
});

export default AppMenu;
