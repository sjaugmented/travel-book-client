import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import MemoryContext from "../../context/memoryContext";
import AppButton from "../AppButton";
import AppText from "../AppText";
import ButtonIcon from "../ButtonIcon";
// import LottieView from "lottie-react-native";

function SubmitMemory() {
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext);
  const [done, setDone] = useState(false);

  return (
    <View style={styles.memoryView}>
      <View style={styles.button}>
        <AppButton
          title="Store Memory"
          color={colors.confirm}
          onPress={memoryContext.onPress}
        />
        {/* {!done ? (
          <AppButton
            title="Store Memory"
            color={colors.confirm}
            onPress={() => setDone(true)}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={memoryContext.onPress}
            source={require("../../assets/animations/green-done.json")}
            style={styles.animation}
          />
        )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animations: { width: 150 },
  memoryView: {
    flex: 1,
    backgroundColor: colors.light,
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
  button: {
    width: "90%",
  },
});

export default SubmitMemory;
