import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.darkGray,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 3,
  },
  livePill: {
    backgroundColor: colors.red,
    alignSelf: 'baseline',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 1,
  },
  liveText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 10,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 8,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  title: {
    color: colors.white,
    fontSize: 14,
  },
  user: {
    color: colors.white,
    fontSize: 10,
  },
  chipWrap: {
    gap: 6,
    alignItems: 'flex-end',
  },
  chipBlue: {
    backgroundColor: colors.accentBorder,
    color: colors.black,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,

    fontSize: 10,
    fontWeight: 'bold',
  },
  grayText: {
    color: '#949494',
    fontSize: 10,
    fontWeight: 'bold',
  },
  chipGray: {
    color: colors.white,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 10,
  },
  flatListContainer: {
    padding: 18,
    gap: 10,
        paddingBottom:100
  },
  flatList: {
        paddingBottom:200

  },
});

export default styles;
