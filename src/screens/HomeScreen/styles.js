import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexGrow: 1,
    position: 'relative',
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'black',
    maxHeight: 375,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.white,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textGray,
    paddingTop: 8,
    marginBottom: 44,
  },
  cardContainer: {
    paddingBottom: 24,
  },
});

export default styles;
