import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Issue = ({ issue }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.textContainer}>
      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {issue.title}
      </Text>
      <Text style={styles.owner}>{issue.user.login}</Text>
    </View>
    <TouchableOpacity
      onPress={() => {}}
    >
      <Icon name="angle-right" style={styles.arrow} />
    </TouchableOpacity>
  </View>
);

export default Issue;