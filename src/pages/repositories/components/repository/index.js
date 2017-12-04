import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default class Repository extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Titulo repo</Text>
        <Text style={styles.owner}>Proprietario</Text>
      </View>
    );
  }
}