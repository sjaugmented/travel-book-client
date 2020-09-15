import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import ButtonIcon from "./ButtonIcon";

function AppMenu({ tripActive, setTripActive }) {
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
          style={{ marginBottom: 40 }}
        />
        {tripActive && (
          <ButtonIcon
            name="minus-circle"
            size={75}
            backgroundColor={colors.light}
            iconColor={colors.danger}
            onPress={() => setTripActive(false)}
            activeOpacity={0.7}
          />
        )}
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
    top: 225,
    alignItems: "center",
  },
});

export default AppMenu;
