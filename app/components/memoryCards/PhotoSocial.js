import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import colors from "../../config/colors";
import MemoryContext from "../../context/memoryContext";
import AppHeader from "../AppHeader";
import ButtonIcon from "../ButtonIcon";
import AppButton from "../AppButton";

function PhotoSocial({ navigation }) {
  //state hook for images
  const [imageUri, setImageUri] = useState("");
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext);

  //Set photo/social check-in and go to final modal
  const handlePress = () => {
    navigation.navigate("SubmitMemory");
  };

  // async function to get permission to get photos
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );
    result.granted;
    // const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    // if (!granted) alert('You need to enable permission to access the library')
  };

  useEffect(() => {
    requestPermission();
    memoryContext.setCheckInPhoto("");
  }, []);

  const selectImage = async (string) => {
    try {
      let result;
      if (string === "camera") {
        result = await ImagePicker.launchCameraAsync();
      } else {
        result = await ImagePicker.launchImageLibraryAsync();
      }

      if (!result.cancelled) {
        memoryContext.setCheckInPhoto(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.memoryView}>
      <AppHeader style={styles.header}>Let's see some pictures!</AppHeader>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.photo}
            source={{ uri: memoryContext.checkInPhoto }}
          />
        </View>
        <View style={styles.sideButtons}>
          <AppButton onPress={handlePress} title="Submit" />
          <ButtonIcon
            style={styles.icon}
            name="camera"
            size={30}
            onPress={() => selectImage("camera")}
          />
          <ButtonIcon
            style={styles.icon}
            onPress={() => selectImage("library")}
            name="image-album"
            size={30}
          />
        </View>

        <AppButton
          style={styles.moveAlong}
          title="Nah, I'm good"
          color={colors.primary}
          onPress={() => navigation.navigate("SubmitMemory")}
        />
      </View>
      {/* <AppText>And tell us who you're with!</AppText>
      <View style={styles.iconContainer}>
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("tag a friend")}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("tag a friend")}
          name="human"
        />
        <ButtonIcon
          style={styles.icon}
          onPress={() => handlePress("tag a friend")}
          name="human"
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 10,
  },
  container: {
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20,
    flexWrap: "wrap",
    position: "relative",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 20,
    // position: 'absolute',
    // right: 15,
  },
  sideButtons: { flex: 1 },
  icon: {
    // margin: 10,
  },
  moveAlong: {},
});

export default PhotoSocial;
