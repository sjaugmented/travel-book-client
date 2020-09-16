import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import ModalContext from "../../context/modalContext";
import AppText from "../AppText";
import ButtonIcon from "../ButtonIcon";

function Done({ navigation }) {
  const setModalVisible = useContext(ModalContext);
  const handlePress = (string) => {
    console.log(string);
    setModalVisible(false);
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
