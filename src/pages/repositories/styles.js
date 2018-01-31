import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  reposContainer: {
    padding: 20,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.headerBackground,
  },
  input: {
    width: '90%',
    backgroundColor: colors.headerInput,
    borderRadius: metrics.globalBorderRadius,
    height: 30,
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginVertical: 15,
    fontSize: fonts.headerInput,
  },
  icon: {
    fontSize: fonts.headerIcon,
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
