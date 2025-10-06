import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  headerWrapper: {
    height: 150,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  headerText: { color: 'black', fontSize: 16, fontWeight: '600' },

  contentWrapper: { flex: 1, backgroundColor: 'black' },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomColor: '#222',
  },
  syringeIcon: { height: 49, width: 36 },
  bellIcon: { height: 32, width: 32 },
  tab: { paddingHorizontal: 5, alignItems: 'center' },
  tabText: { color: 'white', fontSize: 14 },
  tabActive: { color: '#00CFFF', fontWeight: '700' },
  tabActiveBar: {
    backgroundColor: '#00CFFF',
    height: 2,
    marginTop: 4,
    borderRadius: 2,
    width: '100%',
  },

  listContent: { paddingBottom: 100 },

  card: {
    flexDirection: 'row',
    backgroundColor: '#111',
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  liveBorder: {
    borderWidth: 1.5,
    borderColor: '#00CFFF',
  },
  avatar: { width: 50, height: 50, borderRadius: 12 },

  cardContent: { flex: 1, marginLeft: 10, flexDirection: 'row' },
  leftColumn: { flex: 1 },
  rightColumn: { flex: 1 },

  title: { color: '#fff', fontSize: 14, fontWeight: '600' },
  sub: { color: '#aaa', fontSize: 12 },
  timeValue:{color:colors.success,fontSize:12},

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 3,
  },
  label: { color: '#bbb', fontSize: 12, fontWeight: 'bold', marginLeft: 6 },
  value: { color: 'white' },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap:6,
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
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  time: { color: '#aaa', fontSize: 12 },
  change: { fontSize: 12, fontWeight: '600' },

  liveBadge: {
    backgroundColor: '#C1070A',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  liveText: { color: '#fff', fontSize: 10, fontWeight: '700' },
});

export default styles;
