import { View, Text, FlatList, Image } from 'react-native';
import React, { memo, useState } from 'react';
import styles from './styles';
import ChipTabs from '../../components/ChipTabs';
import { Icons } from '../../utils/icons';

const mockData = [
  {
    id: '1',
    name: 'The Bunny',
    sub: '@adjhba',
    price: '$24,999.93',
    mc: '$19.8K',
    change: '+45.97%',
    live: false,
    time: '64.8',
    trend: 'up',
    img: 'https://placekitten.com/200/200',
  },
  {
    id: '2',
    name: 'Sad Cat',
    sub: '@adjhba',
    price: '$24,999.93',
    mc: '$19.8K',
    change: '-45.97%',
    live: true,
    time: '64.8',
    trend: 'down',
    img: 'https://placekitten.com/210/210',
  },
];
const TABS = ['Daily', 'Weekly', 'Monthly'];

// ----- Card Component -----
const Card = memo(({ item }: any) => {
  return (
    <View style={styles.card}>
      <Image
        source={require('./../../assets/images/icon.png')}
        style={[styles.avatar, item.live && styles.liveBorder]}
      />

      <View style={styles.cardContent}>
        {/* Left column */}
        <View style={styles.leftColumn}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.sub}>{item.sub}</Text>
        </View>

        {/* Right column */}
        <View style={styles.rightColumn}>
          <View style={styles.statsRow}>
            <Text style={styles.label}>+{item.price}</Text>
          </View>

          <View style={styles.progressRow}>
            <Image source={Icons.cryptoIcon} resizeMode="contain" style={styles.coinIcon}/>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      </View>

      {/* Live badge
      {item.live && (
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )} */}
    </View>
  );
});

const LeaderboardScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.enterImage}>Enter Image</Text>
      </View>
      <ChipTabs tabs={TABS} activeIndex={tabIndex} onChange={setTabIndex} />

      <FlatList
        data={[...mockData, ...mockData, ...mockData]} // repeat for scroll
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => <Card item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default LeaderboardScreen;
