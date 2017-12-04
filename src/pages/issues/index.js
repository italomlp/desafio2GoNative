import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Issue from './components/issue';

import { styles } from './styles';

export default class Issues extends Component {

  static navigationOptions = {
    title: 'Issues',
  };

  render() {
    return (
      <View>
        <View>
          <Text>Todas</Text>
          <Issue/>
          <Issue/>
          <Issue/>
        </View>
        <View>
          <Text>Abertas</Text>
          <Issue/>
          <Issue/>
          <Issue/>
        </View>
        <View>
          <Text>Fechadas</Text>
          <Issue/>
          <Issue/>
          <Issue/>
        </View>
      </View>
    );
  }
}
