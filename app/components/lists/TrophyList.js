import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component'
import ButtonIcon from '../ButtonIcon'

import colors from '../../config/colors'

export default class Places extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tableHead: this.props.tableHead,
      tableData: this.props.tableData,
      widthArr: [70, 230, 60],
    }
  }

  render() {
    const state = this.state
    return (
      <ScrollView style={{ backgroundColor: colors.ligth }}>
        <View style={styles.container}>
          <Table
            style={styles.table}
            borderStyle={{ borderWidth: 1, borderColor: 'transparent' }}
          >
            <Row
              data={state.tableHead}
              widthArr={state.widthArr}
              style={styles.header}
              textStyle={styles.headerText}
            />
            <Rows
              data={state.tableData}
              widthArr={state.widthArr}
              style={styles.cells}
              textStyle={styles.cellText}
            />
          </Table>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop: 40,
    textAlign: 'center',
    margin: 0,
  },
  table: { height: '100%' },
  header: {
    height: 40,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
  },
  cells: {
    height: 100,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 3,
  },
  trophy: {
    padding: 10,
    marginLeft: 0,
  },
})

// const tableHead = ['', 'Achievements', 'Level'],
//   const tableData = [
//     [trophy('red'), 'Visit 2 different coutries', '0'],
//     [trophy('green'), 'Eat at 4 different restaurants on one trip', '0'],
//     [trophy('orange'), 'Sleep in two different cities on one trip', '0'],
//     [trophy('purple'), 'Go site-seeing twice on one trip', '0'],
//     [trophy('blue'), 'Go site-seeing twice on one trip', '0'],
//     [trophy('pink'), 'Go site-seeing twice on one trip', '0'],
//     [trophy('yellow'), 'Go site-seeing twice on one trip', '0'],
//   ],
