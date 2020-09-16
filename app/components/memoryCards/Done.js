import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import MemoryContext from "../../context/memoryContext";
import AppText from "../AppText";
import ButtonIcon from "../ButtonIcon";

function Done({ navigation }) {
  const setMemoryVisible = useContext(MemoryContext);
  const handlePress = (string) => {
    console.log(string);
    setMemoryVisible(false);
  };

  return (
    <View style={styles.memoryView}>
      <AppText style={styles.confirmation}>Memory Saved!</AppText>
      <ButtonIcon name="close" size={30} onPress={() => handlePress("Done")} />
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

export default Done;
