import React, { memo } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './style';
import VideoList from '../VideoList';
import NewsList from '../NewsList';
import FeaturedScreen from '../FeaturedScreen';
import LeaderboardScreen from '../LeaderboardScreen';
import WatchlistScreen from '../WatchlistScreen';

// ----- Constants -----
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { navigate } from '../../navigation/navigationReference';
// ----- Constants -----

const TABS = ['Movers', 'Live', 'News', 'Featured', 'Leaderboard', 'Watchlist'];

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

const SwipeableRow = ({ children, actionsWidth = 180, renderActions }: any) => {
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);
  // 1. Change maxTranslate to a positive value for left-to-right swipe
  const maxTranslate = actionsWidth;

  const pan = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
    })
    .onUpdate(e => {
      let newX = startX.value + e.translationX;
      // 2. Adjust clamping: newX must be between 0 (closed) and positive maxTranslate (open)
      if (newX > maxTranslate) newX = maxTranslate;
      if (newX < 0) newX = 0;
      translateX.value = newX;
    })
    .onEnd(() => {
      // 3. Adjust onEnd: check if translateX is greater than half the maxTranslate
      if (translateX.value > maxTranslate / 2) {
        translateX.value = withSpring(maxTranslate, { damping: 15 });
      } else {
        translateX.value = withSpring(0, { damping: 15 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    // Note: The actions need to be positioned on the left side.
    // Assuming 'styles.actions' uses absolute positioning,
    // we set 'left: 0' to ensure they appear on the left.
    <View style={styles.container}>
      {/* Actions behind the row - positioned on the left */}
      <View style={[styles.actions, { width: actionsWidth, left: 0 }]}>
        {renderActions && renderActions()}
      </View>
      {/* Foreground row */}
      <GestureDetector gesture={pan}>
        <Animated.View style={[animatedStyle]}>{children}</Animated.View>
      </GestureDetector>
    </View>
  );
};

// ----- Card Component -----
const Card = memo(({ item }: any) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigate('CoinDetailScreen');
      }}
    >
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

// ----- Screen Component -----
const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = React.useState(TABS[0]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('./../../assets/images/Isolation_Mode.png')}
      >
        {/* Header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Instant Deposit With  Pay</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.contentWrapper}>
          <View style={styles.tabRow}>
            <Image
              source={require('./../../assets/images/syringe.png')}
              style={styles.syringeIcon}
            />
            <ScrollView horizontal contentContainerStyle={{gap:8}}>
            {TABS.map((tab, i) => (
              <TouchableOpacity
                key={i}
                style={styles.tab}
                onPress={() => setSelectedTab(tab)}
              >
                <Text
                  style={[styles.tabText, tab === selectedTab && styles.tabActive]}
                >
                  {tab}
                </Text>
                {tab === selectedTab && <View style={styles.tabActiveBar} />}
              </TouchableOpacity>
            ))}
            </ScrollView>
            <Image
              source={require('./../../assets/images/bell.png')}
              style={styles.bellIcon}
            />
          </View>

          {selectedTab === 'Movers' && (
            <FlatList
              data={[...mockData, ...mockData, ...mockData]}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({ item }) => (
                <SwipeableRow
                  actionsWidth={305}
                  renderActions={() => (
                    <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                      {[
                        {
                          id: '1',
                          label: '+0.05 SOL',
                          icon: require('./../../assets/images/crypto.png'),
                        },
                        {
                          id: '2',
                          label: '+0.1 SOL',
                          icon: require('./../../assets/images/crypto.png'),
                        },
                        {
                          id: '3',
                          label: '+0.2 SOL',
                          icon: require('./../../assets/images/crypto.png'),
                        },
                        {
                          id: '4',
                          label: 'Option',
                          icon: require('./../../assets/images/Frame.png'),
                          isOption: true,
                        },
                      ].map(btn => (
                        <View
                          key={btn.id}
                          style={{
                            width: 70,
                            height: 70,
                            backgroundColor:
                              btn.id === '4' ? '#1F1F1F' : '#0A1A2F',
                            borderRadius: 0,
                            borderTopLeftRadius: btn.id === '1' ? 8 : 0,
                            borderBottomLeftRadius: btn.id === '1' ? 8 : 0,
                            borderTopRightRadius: btn.id === '4' ? 8 : 0,
                            borderBottomRightRadius: btn.id === '4' ? 8 : 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Animated.Image
                            source={btn.icon}
                            style={{ width: 18, height: 18, marginBottom: 5 }}
                          />
                          <Animated.Text
                            style={{
                              color: btn.id === '4' ? 'white' : '#00CFFF',
                              fontSize: 12,
                            }}
                          >
                            {btn.label}
                          </Animated.Text>
                        </View>
                      ))}
                    </View>
                  )}
                >
                  <Card item={item} />
                </SwipeableRow>
              )}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
            />
          )}

          {selectedTab === 'Live' && <VideoList />}
          {selectedTab === 'News' && <NewsList />}
          {selectedTab === 'Featured' && <FeaturedScreen />}
          {selectedTab === 'Leaderboard' && <LeaderboardScreen />}
          {selectedTab === 'Watchlist' && <WatchlistScreen />}
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
