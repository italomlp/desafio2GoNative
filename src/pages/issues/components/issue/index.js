import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Issue extends Component {
  render() {
    return (
      <View>
        <Text>Titulo da issue</Text>
        <Text>Autor</Text>
      </View>
    );
  }
}