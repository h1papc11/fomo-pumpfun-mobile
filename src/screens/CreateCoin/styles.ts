import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
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
    height: 24,
    width: 24,
  },
  supportIcon: {
    height: 24,
    width: 64,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.black, // Match background for seamless look
    borderTopWidth: 1,
    borderTopColor: colors.black,
  },
  depositButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 30,
    paddingVertical: 14,
  },

  depositButtonText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '500',
  },
  content: {
    gap: 10,
  },
  formBox: {
    backgroundColor: colors.darkGray,
    marginHorizontal: 18,
    borderRadius: 10,
    padding: 16,
    gap: 14,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
  textBox: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 12,
    paddingHorizontal: 16,
    color: colors.white,
  },
  multilineTextBox: {
    height: 126,
  },
  addSocialLinkBox: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  linkText: {
    color: colors.white,
  },
  scrollView: {
    gap: 8,
    marginTop: 10,
  },
  scrollContainer: {
    paddingBottom: 110,
    gap: 8,
  },
  imageBox: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderStyle: 'dotted',
    borderRadius: 6,
    alignItems: 'center',
  },
  imageIcon: {
    width: 42,
    height: 42,
    color: colors.white,
    marginTop: 30,
  },
  imageTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 14,
  },
  imageDesc: {
    color: colors.lightGray,
    fontSize: 12,
    fontWeight: '400',
  },
  fileBtn: {
    marginBottom: 14,
    width: 132,
    backgroundColor: colors.accent,
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginTop: 20,
  },
  fileText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
  createCoinBox: {
    paddingHorizontal: 18,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinsCreate: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  coinsCreateDesc: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.lightGray,
  },
  msgBox: {
    flexDirection: 'row',
    gap: 6,
  },
  coinMSG: {
    color: colors.lightGray,
    fontSize: 10,
    // gap: 6,
  },
  switch: {
    width: 32,
    height: 16,
  },
  attachment: {
    width: 14,
    height: 14,
  },
  arrow: {
    width: 14,
    height: 14,
  },
  publish: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '400',
  },
  publishBtn: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    width: 137,
    borderRadius: 8,
    marginLeft: 18,
    marginTop: 12,
  },
});

export default styles;
