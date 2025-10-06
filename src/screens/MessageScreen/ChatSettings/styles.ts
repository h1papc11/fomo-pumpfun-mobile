import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 16,
  },
  title: {
    color: colors.white,
  },
  subtitle: {
    color: colors.lightGray,
  },
  btn: {
    backgroundColor: colors.darkGray,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 12,
  },
  btnText: {
    color: colors.white,
  },
});
