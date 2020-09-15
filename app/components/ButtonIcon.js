import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name = "email",
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  style,
  onPress,
  activeOpacity,
}) {
  return (
    <TouchableOpacity
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size} />
    </TouchableOpacity>
  );
}
