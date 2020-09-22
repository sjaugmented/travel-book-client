import React, { useContext, useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import colors from '../../config/colors'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'
import MemoryContext from '../../context/memoryContext'
import AppHeader from '../AppHeader'

import AppButton from '../Button'

function Choice({ navigation }) {
  const { setChoice } = useContext(memoryContext)
  //set memoryContext object
  const memoryContext = useContext(MemoryContext)
  //Set typeofplace check-in and go to next modal
  const handlePress = (answer) => {
    if (answer === 'yes') {
      setChoice(false)
      navigation.navigate('TypeOfPlace')
    } else {
      memoryContext.setModalVisible(false)
      setChoice(false)
    }
  }

  return (
    <View style={styles.memoryView}>
      <AppHeader style={styles.header}>Create Your First Memory?</AppHeader>
      <View style={styles.iconContainer}>
        <AppButton
          title="Sure"
          color={colors.confirm}
          onPress={() => handlePress('yes')}
        />
        <AppButton
          color={colors.dark}
          title="Later"
          onPress={() => handlePress('later')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoryView: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 60,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    marginTop: 20,
    width: '40%',
    flexWrap: 'wrap',
  },
  icon: {
    backgroundColor: colors.primary,
    margin: 10,
  },
  later: {
    backgroundColor: 'red',
  },
})

export default Choice
