import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from 'services/api';

import Repository from './components/repository';

import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    repositories: [],
    repoUrl: '',
    loading: false,
    refreshing: false,
    error: false,
  };

  componentWillMount() {
    // AsyncStorage.clear();
    this.setState({ loading: true });
    this.loadRepositories()
      .then(() => {
        this.setState({ loading: false });
      });
  }

  loadRepositories = async () => {
    let repositories = await AsyncStorage.getItem('@GHRepos:repositories');
    repositories = JSON.parse(repositories);
    if (repositories === null) {
      repositories = [];
    }
    this.setState({ repositories });
  };

  checkAndSaveRepository = async () => {
    const response = await api.get(`/repos/${this.state.repoUrl}`);

    if (!response.ok) {
      this.setState({ refreshing: false });
      throw Error();
    }

    const { id, name, organization } = response.data;
    const repository = {
      id,
      name,
      organization: organization.login,
      avatar_url: organization.avatar_url,
    };

    const { repositories } = this.state;
    repositories.push(repository);
    this.setState({ repositories });
    await this.saveRepositories();
  };

  addRepository = () => {
    this.setState({ refreshing: true, error: false });
    this.checkAndSaveRepository()
      .then(() => {
        this.setState({ refreshing: false, repoUrl: '' });
        this.textInput.clear();
      })
      .catch(() => {
        this.setState({ refreshing: false, error: true });
      });
  };

  saveRepositories = async () => {
    await AsyncStorage.setItem('@GHRepos:repositories', JSON.stringify(this.state.repositories));
  };

  navigateToIssue = (repository) => {
    const { name, organization } = repository;
    const { navigate } = this.props.navigation;
    navigate('Issues', { name, organization });
  };

  renderRepositories = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.addRepository}
        />
      }
      data={this.state.repositories}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => this.navigateToIssue(item)}>
          <Repository repository={item} />
        </TouchableOpacity>)
      }
    />
  );

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : <Text style={[styles.message, styles.empty]}>Nenhum repositório encontrado</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar repositório"
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            ref={(textInput) => { this.textInput = textInput; }}
            onChangeText={repoUrl => this.setState({ repoUrl })}
            onSubmitEditing={this.addRepository}
          />
          <TouchableOpacity
            onPress={this.addRepository}
          >
            <Icon name="plus" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.reposContainer}>
          {this.state.error &&
            <Text style={[styles.message, styles.error]}>
              Não foi possível adicionar repositório. Tente novamente.
            </Text>}
          {this.state.loading
            ? <ActivityIndicator size="small" color="#999" />
            : this.renderList() }
        </View>
      </View>
    );
  }
}
