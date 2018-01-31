import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.boxBackground,
    borderRadius: metrics.globalBorderRadius,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: fonts.boxTitle,
    color: colors.boxTitle,
    fontWeight: 'bold',
  },
  owner: {
    fontSize: fonts.boxDescription,
    color: colors.boxDescription,
  },
  avatar: {
    width: metrics.avatarWidth,
    height: metrics.avatarHeigth,
  },
  arrow: {
    fontSize: fonts.boxArrow,
  },
});

export default styles;
