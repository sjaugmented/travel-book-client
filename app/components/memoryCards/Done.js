import React from "react";
import { View, StyleSheet } from "react-native";

function Done(props) {
  return (
    <View style={styles.memoryView}>
      <AppText style={styles.confirmation}>Memory Saved!</AppText>
      <ButtonIcon
        name="close"
        size={30}
        onPress={() => setMemoryVisible(false)}
      />{" "}
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Done;
