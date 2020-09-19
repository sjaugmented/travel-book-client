import React from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {} from 'react-native-gesture-handler'

const MapInput = () => {
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    //   <View>
    <GooglePlacesAutocomplete
      style={styles.input}
      placeholder="Search"
      minLength={2}
      keyboardShouldPersistTaps={'never'}
      autoFocus={false}
      returnKeyType={'search'}
      listViewDisplayed="auto"
      fetchDetails={true}
      onPress={(data, details = null) => {
        // this.props.notifyChange(details.geometry.location)
        // console.log(data, details)
      }}
      query={{
        key: 'AIzaSyCngS-Qeu_5DKEwGV67vHybBNSK9XTSitc',
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={200}
    />
    //   </View>
    // </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  input: {},
})

export default MapInput
