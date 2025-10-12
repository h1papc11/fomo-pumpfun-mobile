import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';
const { width } = Dimensions.get('window');

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
  },
  cardText: {
    color: '#ffffff',
    fontSize: 14,
  },
  cardSubText: {
    color: colors.lightGray,
    fontSize: 10,
  },

  bottomBar: {
    paddingVertical: 15,
    backgroundColor: colors.black, // Match background for seamless look
    borderTopWidth: 1,
    borderTopColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  depositButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 12,
    paddingVertical: 12,
    width: (width - 45) / 2,
  },

  depositButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    borderRadius: 12,
    paddingVertical: 12,
    width: (width - 45) / 2,
  },
  doubleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scroll: {
    height: '70%',
  },
  scrollBox: {
    gap: 16,
    paddingBottom: 50,
  },
  customTextBox: {
    width: (width - 45) / 2,
  },
  switch: {
    width: 32,
    height: 16,
  },
  socialBox: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  segmentView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  segmentBtn: {
    width: (width - 35) / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSegment: {
    borderBottomColor: colors.accentBorder,
    borderBottomWidth: 1,
  },
  selectedText: {
    color: colors.white,
  },
  segmentText: {
    color: colors.lightGray,
    fontSize: 14,
    fontWeight: '600',
  },
});
