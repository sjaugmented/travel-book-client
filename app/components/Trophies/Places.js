import React, { Component } from 'react'

import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ButtonIcon from '../ButtonIcon'

import TrophyList from '../lists/TrophyList'

export default class Places extends Component {
  constructor(props) {
    super(props)

    const trophy = (color) => (
      <View style={{ padding: 10 }}>
        <ButtonIcon
          size={50}
          name="trophy"
          backgroundColor="transparent"
          iconColor={color}
        />
      </View>
    )

    this.state = {
      tableHead: ['', 'Achievements', 'Level'],
      tableData: [
        [trophy('red'), 'Visit 2 different coutries', '0'],
        [trophy('green'), 'Eat at 4 different restaurants on one trip', '0'],
        [trophy('orange'), 'Sleep in two different cities on one trip', '0'],
        [trophy('purple'), 'Go site-seeing twice on one trip', '0'],
        [trophy('blue'), 'Go site-seeing twice on one trip', '0'],
        [trophy('pink'), 'Go site-seeing twice on one trip', '0'],
        [trophy('yellow'), 'Go site-seeing twice on one trip', '0'],
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
