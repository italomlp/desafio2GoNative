import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  AsyncStorage,
} from 'react-native';

import api from 'services/api';

import Issue from './components/issue';

import styles from './styles';

export default class Issues extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerStyle: styles.header,
  });

  state = {
    issues: [],
    filteredIssues: [],
    loading: false,
    refreshing: false,
    filter: '',
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.loadFilter()
      .then(() => {
        this.loadIssues()
          .then(() => {
            this.setState({ loading: false });
          });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  componentWillUnmount() {
    this.saveFilter().then();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { name, organization } = this.props.navigation.state.params;
    const response = await api.get(`/repos/${organization}/${name}/issues`, { state: 'all' });

    if (!response.ok) {
      throw Error();
    }

    this.setState({ issues: response.data });

    this.filterIssues(this.state.filter);

    this.setState({ refreshing: false });
  };

  loadFilter = async () => {
    let filter = await AsyncStorage.getItem('@GHRepos:issueFilter');
    if (filter === null) {
      filter = 'all';
    }
    this.setState({ filter });
  };

  saveFilter = async () => {
    await AsyncStorage.setItem('@GHRepos:issueFilter', this.state.filter);
  };

  filterIssues = (filter) => {
    const { issues } = this.state;

    console.tron.log(filter);

    let filteredIssues;

    if (filter === 'all') {
      filteredIssues = issues;
    } else {
      filteredIssues = issues.filter((item) => {
        return item.state === filter;
      });
    }

    console.tron.log(filteredIssues);
    this.setState({ filter, filteredIssues });
  };

  openInBrowser = ({ html_url }) => {
    Linking.openURL(html_url);
  };

  renderIssues = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadIssues}
        />
      }
      data={this.state.filteredIssues}
      extraData={this.state}
      keyExtractor={issue => issue.id}
      ListEmptyComponent={
        <Text style={[styles.message, styles.empty]}>
          Nenhuma issue encontrada.
        </Text>}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => this.openInBrowser(item)}>
          <Issue issue={item} />
        </TouchableOpacity>)
      }
    />
  );

  renderList = () => (
    this.state.issues.length
      ? this.renderIssues()
      : <Text style={[styles.message, styles.empty]}>Nenhuma issue encontrada.</Text>
  );

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.filterContainer}>
          <TouchableOpacity
            onPress={() => this.filterIssues('all')}
          >
            <Text>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.filterIssues('closed')}
          >
            <Text>Fechadas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.filterIssues('open')}
          >
            <Text>Abertas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.issuesContainer}>
          { this.state.loading
            ? <ActivityIndicator size="small" color="#999" />
            : this.renderIssues() }
        </View>
      </View>
    );
  }
}
