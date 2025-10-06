import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  flatListContainer: {
    paddingTop: 8,
    paddingBottom: 92,
    gap: 10,
    marginHorizontal: 15,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 14,
    marginTop: 25,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  closeIcon: {
    height: 16,
    width: 16,
  },
  messageCard: {
    flexDirection: 'row',
    gap: 6,
    backgroundColor: colors.darkGray,
    borderRadius: 12,
    padding: 5,
  },
  placeholder: {
    height: 48,
    width: 48,
  },
  name: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
  desc: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '500',
  },
  url: {
    color: colors.lightGray,
    fontSize: 10,
    fontWeight: '400',
  },
});

export default styles;
