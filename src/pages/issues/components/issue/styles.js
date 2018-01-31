import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.boxBackground,
    borderRadius: metrics.globalBorderRadius,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.boxTitle,
    fontSize: fonts.boxTitle,
    fontWeight: 'bold',
  },
  owner: {
    color: colors.boxDescription,
    fontSize: fonts.boxDescription,
  },
  avatar: {
    borderRadius: metrics.avatarWidth / 2,
    width: metrics.avatarWidth,
    height: metrics.avatarHeigth,
  },
  arrow: {
    fontSize: fonts.boxArrow,
  },
});

export default styles;
