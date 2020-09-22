import React, { Component } from 'react'

import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ButtonIcon from '../ButtonIcon'

import TrophyList from '../lists/TrophyList'

export default class Distance extends Component {
  constructor(props) {
    super(props)

    const trophy = (color, name) => (
      <View style={{ padding: 10 }}>
        <ButtonIcon
          size={50}
          backgroundColor="transparent"
          name={name}
          iconColor={color}
        />
      </View>
    )

    this.state = {
      tableHead: ['', 'Achievements', 'Level'],
      tableData: [
        [trophy('red', 'airplane-takeoff'), 'Travel 500 miles by plane', '0'],
        [trophy('green', 'car'), 'Travel 50 miles by car', '0'],
        [trophy('orange', 'sailing'), 'Travel 50 miles by boat', '0'],
        [trophy('purple', 'walk'), 'Travel 5 miles by foot', '0'],
        [trophy('blue', 'bus'), 'Travel 50 miles by bus', '0'],
        [trophy('pink', 'train'), 'Travel 50 miles by train', '0'],
      ],
      widthArr: [70, 230, 60],
    }
  }
  render() {
    return (
      <View>
        <TrophyList
          tableHead={this.state.tableHead}
          tableData={this.state.tableData}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
