import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
// import { colors } from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 16,
  },

  listContent: {},
  card: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 14,
  },
  cardSubText: {
    color: colors.lightGray,
    fontSize: 10,
  },
  content: {
    gap: 10,
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
  bottomBar: {
    paddingVertical: 15,
    backgroundColor: colors.black, // Match background for seamless look
    borderTopWidth: 1,
    borderTopColor: colors.black,
  },
  depositButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 30,
    paddingVertical: 12,
  },

  depositButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});
