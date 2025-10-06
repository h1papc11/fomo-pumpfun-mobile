import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  card: {
    backgroundColor: colors.darkGray,
    padding: 5,
    borderRadius: 12,
  },
  rowTop: {
    flexDirection: 'row',
    gap: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  avatarView: {
    width: 55,
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 12,
  },
  desc: {
    color: colors.lightGray,
    fontSize: 10,
  },
  chipWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  grayText: {
    fontSize:10,
    color: colors.lightGray,
  },
  chipGray: {
    fontSize:10,
    color: colors.white,
},
  flatList: { paddingHorizontal: 18 },
  flatListContainer: { gap: 10, paddingBottom: 100 },
  sliderBox: {
    height: 300,
    width: width - 36,
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginBottom: 10,
    backgroundColor: colors.darkGray,
    borderRadius: 12,
  },
  scroll: {
    marginBottom: 10,
    height: 300,
    width: width - 36,
  },
  headerText:{
    color: 'white', 
    fontSize: 14, 
    fontWeight: '600'
  }
});

export default styles;
