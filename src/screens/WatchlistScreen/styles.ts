import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  listContent: { paddingBottom: 100 },

  card: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  liveBorder: {
    borderWidth: 1.5,
    borderColor: colors.accentBorder,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },

  cardContent: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
  },
  leftColumn: { flex: 1 },
  rightColumn: { flex: 1 },

  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  sub: {
    color: colors.lightGray,
    fontSize: 12,
  },
  timeValue: {
    color: colors.success,
    fontSize: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 3,
  },
  label: {
    color: colors.lightGray,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  value: { color: colors.white },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 6,
    justifyContent: 'flex-end',
  },

  time: {
    color: colors.lightGray,
    fontSize: 12,
  },

  liveBadge: {
    backgroundColor: colors.red,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  liveText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: colors.chip,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  addText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  customTab: {
    paddingTop: 2,
    paddingBottom: 2,
    maxWidth: '88%',
  },
});

export default styles;
