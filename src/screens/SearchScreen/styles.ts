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
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 14,
    marginTop: 25,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 5,
  },
  customTab: {
    width: '93%',
  },
});

export default styles;
