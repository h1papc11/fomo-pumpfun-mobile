import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';

const MOCK_DATA = {
  vol24h: '$32.2k',
  price: '$0.000000727',
  about:
    'New SpongeBob meme is going viral on tiktok. Millions of views last 24 hours and it will just get more viral.',
  changes: [
    { time: '5m', percent: -89.64 },
    { time: '1h', percent: -27.57 },
    { time: '6h', percent: -27.57 },
  ],
  creator: {
    name: 'CorpoRAT Chat',
    members: '100+ Members',
    img: 'https://placekitten.com/50/50?image=1',
  },
  group: {
    name: 'SKETCHY Community',
    members: '100+ Members',
    img: 'https://placekitten.com/50/50?image=2',
  },
  position: { amount: '$0.00', coin: 'SDM', status: 'Traded', profitLoss: '-' },
  bondingCurve: {
    progress: 6.0,
    totalSol: '1362 SOL',
    goal: '$7,954 To Graduate',
  },
  similarCoins: [
    {
      id: '1',
      name: '$DROPIT',
      price: '$0.08',
      trend: 'up',
      img: 'https://placekitten.com/60/60?image=3',
    },
    {
      id: '2',
      name: '$DROPIT',
      price: '$0.08',
      trend: 'up',
      img: 'https://placekitten.com/60/60?image=4',
    },
    {
      id: '3',
      name: '$COINX',
      price: '$0.12',
      trend: 'down',
      img: 'https://placekitten.com/60/60?image=5',
    },
  ],
};

const getTrendColor = (percent: number) =>
  percent >= 0 ? '#4CAF50' : '#FF5252'; // Green for positive/zero, Red for negative

// ----- SUB-COMPONENTS -----

const ChangeCard = ({ time, percent }: any) => {
  const color = getTrendColor(percent);
  return (
    <View style={styles.changeCard}>
      <Text style={styles.changeCardTime}> {time} </Text>
      <Text style={[styles.changeCardPercent, { color }]}>
        {percent > 0 ? '+' : ''}
        {percent.toFixed(2)}%
      </Text>
    </View>
  );
};

const UserCard = ({ item, isCreator = true }: any) => {
  return (
    <View style={styles.userCard}>
      <Image source={{ uri: item.img }} style={styles.userAvatar} />
      <View style={styles.userContent}>
        <Text style={styles.userTitle}> {item.name} </Text>
        <Text style={styles.userSub}> {item.members} </Text>
      </View>
      <TouchableOpacity style={[styles.userButton]}>
        <Text style={styles.userButtonText}>
          {isCreator ? 'Follow' : 'Join Chat'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const Info = () => {
  return (
    <View style={styles.contentContainer}>
      {/* 3. Stats Block */}
      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}> {MOCK_DATA.vol24h} </Text>
            <Text style={styles.statLabel}> Vol 24h </Text>
          </View>
          <View style={styles.statSeparator} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}> Price </Text>
            <Text style={styles.statValue}> {MOCK_DATA.price} </Text>
          </View>
        </View>

        <View style={styles.changesRow}>
          {MOCK_DATA.changes.map((item, index) => (
            <ChangeCard key={index} {...item} />
          ))}
        </View>
      </View>

      {/* 4. About Section */}
      <Text style={styles.sectionHeader}> About Alexa Rawles </Text>
      <Text style={styles.aboutText}> {MOCK_DATA.about} </Text>

      {/* 5. Coin Creator */}
      <Text style={styles.sectionHeader}> Coin Creator </Text>
      <UserCard item={MOCK_DATA.creator} isCreator={true} />

      {/* 6. Join The Group Chat */}
      <Text style={styles.sectionHeader}> Join The Group Chat </Text>
      <UserCard item={MOCK_DATA.group} isCreator={false} />

      {/* 7. Position/Indicator Block */}
      <View style={styles.positionBlock}>
        <View style={styles.positionHeader}>
          <Text style={styles.positionAmount}>
            {' '}
            {MOCK_DATA.position.amount}{' '}
          </Text>
          <Text style={styles.positionCoin}> {MOCK_DATA.position.coin} </Text>
          <View style={styles.positionIndicator} />
        </View>
        <View style={styles.positionRow}>
          <Text style={styles.positionLabel}> Position </Text>
          <Image
            source={require('./../../assets/images/Group.png')}
            style={{ marginLeft: 5 }}
          />
          <Text style={styles.positionStatusText}> Trades </Text>

          <Text style={styles.positionProfitLoss}> Profit/Loss </Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBarFill1,
              { width: `${MOCK_DATA.bondingCurve.progress}%` },
            ]}
          />
        </View>
        <Text style={styles.profitIndicatorLabel}> Profit Indicator </Text>
      </View>

      {/* 8. Bonding Curve Progress */}
      <View style={styles.bondingCurveBlock}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.sectionHeader}> Bonding Curve Progress </Text>

          <Text style={styles.bondingCurvePercent}>
            {' '}
            {MOCK_DATA.bondingCurve.progress.toFixed(1)} %{' '}
          </Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${MOCK_DATA.bondingCurve.progress}%` },
            ]}
          />
        </View>
        <View style={styles.bondingCurveStats}>
          <Text style={styles.bondingCurveText}>
            {' '}
            {MOCK_DATA.bondingCurve.totalSol} Bonding Curve{' '}
          </Text>
          <Text style={styles.bondingCurveText}>
            {' '}
            {MOCK_DATA.bondingCurve.goal}{' '}
          </Text>
        </View>
      </View>
         {/* 9. Similar Coins */}
                                    {/* <View style={styles.similarCoinsHeader}>
                                <Text style={styles.sectionHeader}> Similar Coins </Text>
                                < TouchableOpacity >
                                    <Text style={styles.seeAllText}> See All </Text>
                                </TouchableOpacity>
                            </View>
                            < ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.similarCoinsRow} >
                                {
                                    MOCK_DATA.similarCoins.map((coin) => (
                                        <SimilarCoinCard key={coin.id} item={coin} />
                                    ))
                                }
                            </ScrollView> */}

      <View style={{ height: 100 }} />
    </View>
  );
};

export default Info;
