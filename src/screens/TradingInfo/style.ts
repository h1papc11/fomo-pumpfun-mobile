import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Primary dark background
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 5,
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },

  // 1. Top Bar Styles
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingTop: 20, // Space for status bar on mobile
    backgroundColor: 'black',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#112338',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#00CFFF15', // Subtle border
  },
  actionButtonText: {
    color: '#00CFFF',
    fontSize: 16,
    marginRight: 4,
    fontWeight: 'bold',
    transform: [{ scaleY: 1.5 }], // Visual trick for the "≡" icon
  },
  actionButtonLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  settingsButton: {
    padding: 5,
  },

  // 2. Navigation Tabs Styles
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#112338',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  tab: {
    paddingVertical: 12,
    marginHorizontal: 4,
  },
  tabText: {
    color: '#7C8A9B',
    fontSize: 14,
    fontWeight: '600',
  },
  tabActiveText: {
    color: 'white',
  },
  tabActiveIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#00CFFF',
  },

  // 3. Stats Block Styles
  statsContainer: {
    paddingVertical: 15,
    backgroundColor: '#191919',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  statSeparator: {
    width: 1,
    backgroundColor: '#112338',
    marginHorizontal: 20,
  },
  statLabel: {
    color: '#7C8A9B',
    fontSize: 13,
    marginBottom: 4,
    fontWeight: '400',
  },
  statValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  changesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  changeCard: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  changeCardTime: {
    color: '#7C8A9B',
    fontSize: 12,
    marginBottom: 4,
  },
  changeCardPercent: {
    fontSize: 14,
    fontWeight: '700',
  },

  // General Section Headers
  sectionHeader: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 5,
  },

  // 4. About Section Styles
  aboutText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 20,
    paddingHorizontal: 5,
  },

  // 5 & 6. User Card Styles
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#191919',
    borderRadius: 12,
    padding: 12,
    marginTop: 5,
    marginHorizontal: 5,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#00CFFF50',
  },
  userContent: {
    flex: 1,
  },
  userTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  userSub: {
    color: '#7C8A9B',
    fontSize: 12,
  },
  userButton: {
    backgroundColor: '#00CFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  userButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  joinChatButton: {
    backgroundColor: '#112338',
    borderWidth: 1,
    borderColor: '#00CFFF',
  },

  // 7. Position/Indicator Block Styles
  positionBlock: {
    backgroundColor: '#191919',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    marginHorizontal: 5,
  },
  positionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  positionAmount: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 5,
  },
  positionCoin: {
    color: '#7C8A9B',
    fontSize: 14,
    marginRight: 10,
  },
  positionIndicator: {
    flex: 1,
    height: 2,
    backgroundColor: '#7C8A9B30',
  },
  positionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  positionLabel: {
    color: 'white',
    fontSize: 13,
  },
  positionStatus: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  positionStatusText: {
    color: '#00CFFF',
    fontSize: 11,
    marginLeft: 4,
  },
  positionProfitLoss: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
    marginLeft: '49%',
  },
  profitIndicatorLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },

  // 8. Bonding Curve Progress Styles
  bondingCurveBlock: {
    backgroundColor: '#191919',
    borderRadius: 12,
    padding: 15,
    marginTop: 5,
    marginHorizontal: 5,
  },
  bondingCurvePercent: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginLeft: '30%',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  progressBarFill1: {
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 4,
  },
  bondingCurveStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bondingCurveText: {
    color: '#7C8A9B',
    fontSize: 12,
  },

  // 9. Similar Coins Styles
  similarCoinsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  seeAllText: {
    color: '#00CFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  similarCoinsRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  similarCoinCard: {
    width: width * 0.45, // Responsive width
    backgroundColor: '#17273A',
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  similarCoinAvatar: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 8,
  },
  similarCoinContent: {
    flex: 1,
  },
  similarCoinTitle: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  similarCoinPrice: {
    color: '#7C8A9B',
    fontSize: 11,
  },
  similarCoinTrend: {
    fontSize: 16,
    marginRight: 4,
  },
  smallChartPlaceholder: {
    width: 25,
    height: 15,
    borderRadius: 2,
  },

  // 10. Bottom Bar Styles (Floating Button)
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'black', // Match background for seamless look
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  depositButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CFFF',
    borderRadius: 30,
    paddingVertical: 15,
  },
  depositButtonIcon: {
    color: '#17273A',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
    // Using a similar-looking unicode character for the information icon
  },
  depositButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '900',
  },
  backBtn: {
    width: 24,
    height: 24,
    tintColor: colors.white,
    marginLeft: 10,
    marginRight: 5,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 10,
  },
  desc: {
    color: colors.lightGray,
    fontSize: 8,
    fontWeight: '400',
    marginLeft: 10,
  },
  shareIcon: {
    width: 24,
    height: 24,
    tintColor: colors.white,
    marginLeft: 85,
    alignContent: 'flex-end',
  },
  starIcon: {
    width: 24,
    height: 24,
    tintColor: colors.white,
    marginLeft: 10,
    alignContent: 'flex-end',
  },
  activityBox: {
    flex: 1,
    gap: 15,
  },
  cardActivity: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  imageBox: {
    flexDirection: 'row',
    gap: 6,
  },
  imageMargin: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.lightGray,
  },
  leftSection: {},
  rightSection: {
    alignItems: 'flex-end',
  },
  whiteText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
  graySmallText: {
    color: colors.lightGray,
    fontSize: 10,
  },
  greenText: {
    color: colors.success,
    fontSize: 10,
    fontWeight: 'bold',
  },
  activityTabHeader: {
    paddingHorizontal: 0,
  },
  activityTabButton: {
    borderRadius: 12,
  },
  holdersValue: {
    marginTop: 10,
    fontSize: 14,
  },
  holderText: {
    color: '#3AB5F8',
    fontWeight: 'bold',
    fontSize: 14,
  },
  holderCreatorText: {
    color: '#00E98C',
    fontWeight: 'bold',
    fontSize: 14,
  },
  holderTopText: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 14,
  },
  segmentButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3AB5F8',
  },
  segmentActiveButton: {
    backgroundColor: colors.accent,
    borderColor: colors.accentBorder,
    borderWidth: 1,
  },
});

export default styles;
