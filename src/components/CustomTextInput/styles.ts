import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
  content: {
    gap: 10,
    justifyContent: 'flex-end',
  },
  formBox: {
    backgroundColor: colors.darkGray,
    marginHorizontal: 18,
    borderRadius: 10,
    padding: 16,
    gap: 14,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
  textBox: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 12,
    paddingHorizontal: 16,
    color: colors.white,
  },
  multilineTextBox: {
    height: 126,
  },
});
