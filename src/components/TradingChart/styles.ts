import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    width: '100%',
    height: 300,
  },
  header: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginRight: 8,
  },
  changeContainer: {
    backgroundColor: '#1e3a1e',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  changeText: {
    color: '#4CAF50',
    fontSize: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 4,
    gap: 12,
  },
  tab: {
    paddingVertical: 4,
  },
  tabText: {
    color: '#888888',
    fontSize: 11,
  },
  marketInfo: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2a2a2a',
  },
  marketText: {
    fontSize: 10,
  },
  marketLabel: {
    color: '#888888',
  },
  marketValue: {
    color: '#ffffff',
  },
  marketChange: {
    color: '#888888',
  },
  greenText: {
    color: '#4CAF50',
  },
  redText: {
    color: '#FF5252',
  },
  chartContainer: {
    flexDirection: 'row',
    height: 250,
    width: '100%',
  },
  leftToolbar: {
    width: 30,
    backgroundColor: '#0f0f0f',
    paddingVertical: 8,
    gap: 12,
    alignItems: 'center',
  },
  toolButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolIcon: {
    color: '#666666',
    fontSize: 14,
  },
  chartArea: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
  },
  chartSvg: {
    flex: 1,
  },
  priceLabels: {
    width: 45,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingRight: 4,
  },
  priceLabel: {
    color: '#666666',
    fontSize: 9,
    textAlign: 'right',
  },
  currentPriceLabel: {
    backgroundColor: '#FF5252',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
    alignSelf: 'flex-end',
  },
  currentPriceLabelText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '600',
  },
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 50,
    paddingVertical: 4,
    borderTopWidth: 0.5,
    borderTopColor: '#2a2a2a',
  },
  timeLabel: {
    color: '#666666',
    fontSize: 9,
  },
  footer: {
    paddingLeft: 40,
    paddingRight: 12,
    paddingVertical: 4,
    borderTopWidth: 0.5,
    borderTopColor: '#2a2a2a',
  },
  footerText: {
    color: '#666666',
    fontSize: 9,
  },
});

export default styles;
