import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
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
});

export default styles;
