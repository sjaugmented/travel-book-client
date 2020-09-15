import React from "react";
import { View, StyleSheet } from "react-native";

function PhotoSocial(props) {
  return (
    <View style={styles.memoryView}>
      <AppText>Let's see some pictures!</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("Take a pic")}
          name="camera"
          size={60}
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("Browse photos")}
          name="image-album"
          size={60}
        />
      </View>
      <AppText>And tell us who you're with!</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("tag a friend")}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("tag a friend")}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => console.log("tag a friend")}
          name="human"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PhotoSocial;
