import {  StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 18,
    paddingBottom:15
  },
  listContent: { paddingBottom: 250 },
  trendingContent: {gap:8},

  card: {
    flexDirection: 'row',
    backgroundColor:colors.darkGray,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
   trendingCard: {
    flexDirection: 'row',
    backgroundColor: colors.darkGray,
    marginVertical: 6,
    borderRadius: 12,
    paddingVertical:15,
    paddingHorizontal:5,
    alignItems: 'center',
    borderColor: colors.accentBorder,
    borderWidth: 1,
    height:55
  },
  desc:{
    color: colors.lightGray,
    fontSize: 12,
    marginTop:-5,

  },
  liveBorder: {
    borderWidth: 1.5,
    borderColor:colors.accentBorder,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  liveBadge: {
    backgroundColor: colors.red,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    position: 'absolute',
    // top: 40,
    bottom:12,
    left: 22,
  },
  liveText: {
    color: colors.white,
    fontSize: 6,
    fontWeight: '700',
  },
  trendingLiveBadge: {
    backgroundColor: colors.red,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    position: 'absolute',
    // top: 40,
    bottom:3,
    left: 17,
  },
  timeValue: {
    color: colors.success,
    fontSize: 12,
  },
  time: {
    color: colors.lightGray,
    fontSize: 12,
  },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 6,
    justifyContent: 'flex-end',
  },
  progressBar: {
    height: 6,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    marginRight: 8,
  },
  progressFill: {
    height: 6,
    backgroundColor: colors.success,
    borderRadius: 4,
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
  value: { color: 'white' },
  change: { fontSize: 12, fontWeight: '600' },

});

export default styles;
