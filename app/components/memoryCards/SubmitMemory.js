import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import MemoryContext from '../../context/memoryContext'
import AppButton from '../AppButton'
import AppText from '../AppText'
import ButtonIcon from '../ButtonIcon'

function SubmitMemory() {
  //Set memoryContext objext
  const memoryContext = useContext(MemoryContext)

  return (
    <View style={styles.memoryView}>
      <View style={styles.button}>
        <AppButton
          title="Store Memory"
          color={colors.confirm}
          onPress={memoryContext.onPress}
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
  },
  iconContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  icon: {
    margin: 10,
  },
  button: {
    width: '90%',
  },
})

export default SubmitMemory
