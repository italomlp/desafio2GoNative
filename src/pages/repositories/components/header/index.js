import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TouchableOpacity>
          <Icon name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}