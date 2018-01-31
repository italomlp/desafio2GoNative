import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Repository = ({ repository }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: repository.avatar_url }} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{repository.name}</Text>
      <Text style={styles.owner}>{repository.organization}</Text>
    </View>
    <Icon name="angle-right" style={styles.arrow} />
  </View>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
  }).isRequired,
};

export default Repository;
