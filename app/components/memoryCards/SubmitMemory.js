import React, { useContext, useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import colors from '../../config/colors'
import MemoryContext from '../../context/memoryContext'
import AppButton from '../AppButton'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'
// import LottieView from "lottie-react-native";

function SubmitMemory({ navigation }) {
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext)

  return (
    <View style={styles.memoryView}>
      <AppButton
        title="Store Memory"
        color={colors.confirm}
        style={styles.submit}
        onPress={memoryContext.onPress}
      />
      <ButtonIcon
        style={styles.back}
        name="chevron-left"
        size={25}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animations: { width: 150 },
  memoryView: {
    // opacity: 0.7,
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 60,
  },
  submit: {
    width: '60%',
  },
  back: {
    position: 'absolute',
    bottom: 5,
  },
})

export default SubmitMemory
