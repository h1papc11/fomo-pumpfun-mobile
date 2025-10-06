import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { memo, useState } from 'react';
import ChipTabs from '../../components/ChipTabs';
import styles from './styles';
import { Icons } from '../../utils/icons';
import { navigate } from '../../navigation/navigationReference';

const TABS = ['All', 'Watchlist', 'Gaming'];
const mockData = [
  {
    id: '1',
    name: 'The Bunny',
    sub: 'Bunny',
    price: '$40.67',
    mc: '$19.8K',
    change: '+45.97%',
    live: false,
    time: '15m',
    trend: 'up',
    img: 'https://placekitten.com/200/200',
  },
  {
    id: '2',
    name: 'Sad Cat',
    sub: 'Sad',
    price: '$40.67',
    mc: '$19.8K',
    change: '-45.97%',
    live: true,
    time: '2m',
    trend: 'down',
    img: 'https://placekitten.com/210/210',
  },
];
// ----- Helpers -----
const getTrendColor = (trend: string) =>
  trend === 'up' ? '#4CAF50' : '#FF5252';

const getTrendIcon = (trend: string) =>
  trend === 'up'
    ? require('./../../assets/images/up.png')
    : require('./../../assets/images/down.png');


// ----- Card Component -----
const Card = memo(({ item }: any) => {
  return (
    <TouchableOpacity style={styles.card}
      onPress={() => navigate('CoinDetailScreen')}>
      <Image
        source={require('./../../assets/images/icon.png')}
        style={[styles.avatar, item.live && styles.liveBorder]}
      />

      <View style={styles.cardContent}>
        {/* Left column */}
        <View style={styles.leftColumn}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name} <Image source={Icons.timerIcon} resizeMode="contain" />{' '}
            <Text style={styles.sub}>{'15m'}</Text>
          </Text>
          <Text style={styles.sub}>{item.sub}</Text>
        </View>

        {/* Right column */}
        <View style={styles.rightColumn}>
          <View style={styles.statsRow}>
            <Text style={styles.label}>
              ATH <Text style={styles.value}>{item.price}</Text>
            </Text>
            <Text style={styles.label}>
              MC <Text style={styles.value}>{item.mc}</Text>
            </Text>
          </View>

          <View style={styles.progressRow}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: item.trend === 'up' ? '70%' : '40%' },
                ]}
              />
            </View>
            <Text style={styles.time}>{item.time}</Text>
            <Image source={getTrendIcon(item.trend)} />
            <Text style={[styles.change, { color: getTrendColor(item.trend) }]}>
              {item.change}
            </Text>
          </View>
        </View>
      </View>

      {/* Live badge */}
      {item.live && (
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )}
    </TouchableOpacity>
  );
});
// ----- Card Component -----
const TrendingCard = memo(({ item }: any) => {
  return (
    <TouchableOpacity style={{height:120}} onPress={() => navigate('CoinDetailScreen')}>

    <View style={styles.trendingCard}>
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
          
            <Text style={styles.label}>
              MC <Text style={styles.value}>{item.mc}</Text>
            </Text>
          </View>

          <View style={styles.progressRow}>
            
            <Image source={getTrendIcon(item.trend)} />
            <Text style={[styles.change, { color: getTrendColor(item.trend) }]}>
              {item.change}
            </Text>
          </View>
        </View>
      </View>

      {/* Live badge */}
      {item.live && (
        <View style={styles.trendingLiveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )}
    </View>
    <Text style={styles.desc}>Sad Dfe Announces Mr. Beast Style....</Text>
    </TouchableOpacity>
  );
});

const FeaturedScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trending Now</Text>
        <FlatList
        data={[...mockData, ...mockData, ...mockData]} // repeat for scroll
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => <TrendingCard item={item} />}
        contentContainerStyle={styles.trendingContent}
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal:18}}
        horizontal
      />
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

export default FeaturedScreen;
