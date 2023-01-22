import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../style/style'

export class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.author}>Author: Erik Myllymäki</Text>
      </View>
    )
  }
}

export default Footer