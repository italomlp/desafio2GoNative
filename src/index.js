import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import 'config/ReactotronConfig';
import createRootNavigator from 'routes';

export default class App extends Component<{}> {
  render() {
    const Layout = createRootNavigator();

    return <Layout />;
  }
}
