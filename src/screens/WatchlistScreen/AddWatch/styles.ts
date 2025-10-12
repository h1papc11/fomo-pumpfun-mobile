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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#ffffff',
    fontSize: 14,
  },
  cardSubText: {
    color: colors.lightGray,
    fontSize: 10,
  },
});
