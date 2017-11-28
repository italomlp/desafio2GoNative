import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import 'config/ReactotronConfig';
import createRootNavigator from 'routes';

export default class App extends Component<{}> {
  render() {
    const Layout = createRootNavigator();

    return <Layout />;
  }
}
