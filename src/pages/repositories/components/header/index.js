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
        <TextInput
          style={styles.input}
          placeholder="Adicionar repositório"
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          onSubmitEditing={() => {}}
        />
        <TouchableOpacity>
          <Icon name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}