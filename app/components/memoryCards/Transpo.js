import React from "react";
import { View, StyleSheet } from "react-native";

function Transpo(props) {
  return (
    <View style={styles.memoryView}>
      <AppText>How'd you get here?</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.loghandlePress("airplane")}
          name="plane"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("airplane")}
          name="bus"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("train")}
          name="train"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("car")}
          name="car"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("boat")}
          name=""
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("foot")}
          name="walk"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Transpo;
