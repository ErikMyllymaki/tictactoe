import { Text, View } from 'react-native'
import React, { Component } from 'react';
import styles from '../style/style';

export class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
            Tic Tac Toe
        </Text>
      </View>
    )
  }
}

export default Header