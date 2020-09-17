import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import MemoryContext from "../../context/memoryContext";
import AppText from "../AppText";
import ButtonIcon from "../ButtonIcon";

function SubmitMemory({ navigation }) {
  const memoryContext = useContext(MemoryContext);
  return (
    <View style={styles.memoryView}>
      <AppText style={styles.confirmation}>Memory Saved!</AppText>
      <ButtonIcon name="close" size={30} onPress={memoryContext.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    backgroundColor: colors.background,
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
});

export default SubmitMemory;
