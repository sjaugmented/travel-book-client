import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function ButtonIcon({
  name = 'email',
  size = 50,
  backgroundColor = '#000',
  iconColor = '#fff',
  style,
  onPress,
  activeOpacity,
  margin,
}) {
  return (
    <TouchableOpacity
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          margin: margin,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size - size * 0.3}
      />
      {/* <MaterialIcons name={name} color={iconColor} size={size - size * 0.1} /> */}
    </TouchableOpacity>
  )
}
