import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Issue from './components/issue';

import styles from './styles';

export default class Issues extends Component {

  static navigationOptions = {
    title: 'Issues',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Text>Todas</Text>
          <Text>Fechadas</Text>
          <Text>Abertas</Text>
        </View>
        <View style={styles.issuesContainer}>
          <Issue/>
          <Issue/>
          <Issue/>
          <Issue/>
          <Issue/>
          <Issue/>
        </View>
      </View>
    );
  }
}
