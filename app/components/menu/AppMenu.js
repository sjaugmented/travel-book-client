import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import ButtonIcon from "../ButtonIcon";
import AppText from "../AppText";

function AppMenu({ tripActive, setTripActive }) {
  return (
    <View>
      <View style={styles.navbar}>
        <ButtonIcon
          name="account"
          backgroundColor={colors.background}
          iconColor={colors.secondary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="account-multiple"
          backgroundColor={colors.background}
          iconColor={colors.secondary}
          style={{ marginBottom: 20 }}
        />
        <ButtonIcon
          name="trophy-award"
          backgroundColor={colors.background}
          backgroundColor={colors.background}
          iconColor={colors.secondary}
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
      <View style={styles.trophies}>
        <AppText style={styles.text}>RECENT TROPHIES</AppText>
      </View>
      <View style={styles.trips}>
        <AppText style={styles.text}>MY TRIPS</AppText>
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
  text: {
    fontWeight: "500",
    color: colors.secondary,
  },
  trophies: {},
  trips: {
    position: "absolute",
    top: 225,
  },
});

export default AppMenu;
