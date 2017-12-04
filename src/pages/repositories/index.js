import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Header from './components/header';
import Repository from './components/repository';

import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />,
  };

  navigateToIssue = () => {
    const { navigate } = this.props.navigation;
    navigate('Issues');
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.navigateToIssue}>
          <Repository />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigateToIssue}>
          <Repository />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigateToIssue}>
          <Repository />
        </TouchableOpacity>
      </View>
    );
  }
}
