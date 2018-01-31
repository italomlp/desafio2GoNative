import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  header: {
    height: 44,
    elevation: 0,
  },
  issuesContainer: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.filterBoxBackground,
    borderRadius: metrics.globalBorderRadius,
    marginBottom: 10,
    padding: 5,
  },
  message: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  error: {
    color: colors.error,
  },
  empty: {
    color: colors.empty,
  },
});

export default styles;
