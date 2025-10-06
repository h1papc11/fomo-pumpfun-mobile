import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

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
  time: { color: '#aaa', fontSize: 12, marginRight: 6 },
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
  card1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  avatar1: { width: 50, height: 50, borderRadius: 12, marginRight: 12 },
  cardText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  drawerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  drawerItem: {
    width: 70,
    height: 70,
    backgroundColor: '#0A1A2F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  drawerIcon: { width: 25, height: 25, marginBottom: 4 },
  drawerText: { color: '#00CFFF', fontSize: 10, fontWeight: '600' },
  container: { width: '100%', overflow: 'hidden', backgroundColor: 'black' },
  actions: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
});

export default styles;
