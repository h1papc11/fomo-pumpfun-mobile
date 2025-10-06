import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import TradingChart from '../../components/TradingChart';
import { Icons } from '../../utils/icons';
import styles from './style';
import { goBack } from '../../navigation/navigationReference';
import Activity from './Activity';
import Holders from './Holders';
import Trades from './Trades';
import Comments from './Comments';
import Info from './Info';

// ----- MOCK DATA & CONSTANTS -----

const TABS = ['Info', 'Comments', 'Trades', 'Holders', 'Activity'];

// const SimilarCoinCard = ({ item }: any) => {
//     const color = getTrendColor(item.trend === 'up' ? 1 : -1);
//     const trendSymbol = item.trend === 'up' ? '▲' : '▼'; // Simple trend indicator
//     const trendColor = item.trend === 'up' ? '#4CAF50' : '#FF5252';

//     return (
//         <View style={styles.similarCoinCard} >
//             <Image
//                 source={{ uri: item.img }}
//                 style={styles.similarCoinAvatar}
//             />
//             <View style={styles.similarCoinContent}>
//                 <Text style={styles.similarCoinTitle}> {item.name} </Text>
//                 < Text style={styles.similarCoinPrice} > {item.price} </Text>
//             </View>
//             < View style={{ flexDirection: 'row', alignItems: 'center' }
//             }>
//                 <Text style={[styles.similarCoinTrend, { color: trendColor }]}>
//                     {trendSymbol}
//                 </Text>
//                 {/* Placeholder for small chart line */}
//                 <View style={[styles.smallChartPlaceholder, { backgroundColor: trendColor }]} />
//             </View>
//         </View>
//     );
// };

//MARK: - Did Click Back Button
const didClickBack = () => {
  goBack();
};

const TopHeader = () => {
  return (
    <View style={styles.headerBox}>
      <TouchableOpacity onPress={didClickBack}>
        <Image source={Icons.backIcon} style={styles.backBtn} />
      </TouchableOpacity>
      <Image
        source={Icons.placeholder}
        // style={{ marginTop: 30 }}
      />
      <View>
        <Text style={styles.title}>Alexa Rawles</Text>
        <Text style={styles.desc}>DRkUuLBTWT</Text>
      </View>
      <Image source={Icons.shareIcon} style={styles.shareIcon} />
      <Image source={Icons.starIcon} style={styles.starIcon} />
    </View>
  );
};

const TabBox = ({
  didClickTab,
  activeTab,
}: {
  didClickTab: (tab: string) => void;
  activeTab: string;
}) => {
  return (
    <View style={styles.tabRow}>
      {TABS.map(tab => (
        <TouchableOpacity
          key={tab}
          style={styles.tab}
          onPress={() => didClickTab(tab)}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.tabActiveText]}
          >
            {tab}
          </Text>
          {activeTab === tab && <View style={styles.tabActiveIndicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// ----- MAIN COMPONENT -----

const CoinDetailScreen = () => {
  const [activeTab, setActiveTab] = useState('Info');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../../assets/images/Isolation_Mode.png')}
        style={{ height: '100%', width: '100%' }}
      >
        {/* 1. Top Action Bar */}
        <View style={{ height: 50 }} />
        <View style={{ backgroundColor: 'black', flex: 1 }}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{ paddingBottom: 110 }}
            showsVerticalScrollIndicator={false}
          >
            <TopHeader />

            <TradingChart />
            <View style={styles.topBar}>
              <View style={styles.actionButtons}>
                {['+0.05 SOL', '+0.1 SOL', '+0.2 SOL'].map((label, index) => (
                  <TouchableOpacity key={index} style={styles.actionButton}>
                    <Image
                      source={require('./../../assets/images/crypto.png')}
                      style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.actionButtonLabel}> {label} </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* 2. Navigation Tabs */}
            <TabBox didClickTab={setActiveTab} activeTab={activeTab} />

            {/* Content based on Tab (for 'Info' tab) */}
            {activeTab === 'Info' && <Info />}
            {activeTab === 'Comments' && <Comments />}
            {activeTab === 'Trades' && <Trades />}
            {activeTab === 'Holders' && <Holders />}
            {activeTab === 'Activity' && <Activity />}
          </ScrollView>
        </View>
        {/* 10. Bottom Floating Deposit Button */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.depositButton}>
            <Image source={require('./../../assets/images/deposit.png')} />
            <Text style={styles.depositButtonText}> Deposit </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CoinDetailScreen;
