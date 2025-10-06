import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },


  listContent: { paddingBottom: 250 },

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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.lightGray,
  },

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
  label: { color: colors.success, fontSize: 10, fontWeight: 'bold', marginLeft: 6 },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    justifyContent: 'flex-end',
  },

  time: {
    color: '#aaa',
    fontSize: 10,
  },
  change: {
    fontSize: 12,
    fontWeight: '600',
  },

  headerBox: {
    height: 100,
    backgroundColor: colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    borderRadius: 12,
  },
  enterImage: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '600',
  },
  coinIcon:{
    width:12,
    height:12,
    marginRight:4
  }
});

export default styles;
