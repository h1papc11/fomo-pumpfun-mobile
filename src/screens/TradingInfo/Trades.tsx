import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './style';

const getTrendColor = (percent : number) =>
    percent >= 0 ? '#4CAF50' : '#FF5252'; // Green for positive/zero, Red for negative

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

const Trades = () => {
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
  return (
    <View>
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
      <View
        style={{
          width: '100%',
          backgroundColor: '#191919',
          marginTop: 15,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              marginHorizontal: 8,
              borderBottomWidth: 1,
              borderBottomColor: '#191919',
              paddingVertical: 6,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
              Comments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 8,
              borderBottomWidth: 1,
              borderBottomColor: '#25E9FF',
              paddingVertical: 6,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
              Trades
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: 8,
              borderBottomWidth: 1,
              borderBottomColor: '#191919',
              paddingVertical: 6,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
              Holders
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: 15 }}
        >
          <Text style={{ fontSize: 9, fontWeight: '400', color: '#949494' }}>
            Filter By Size
          </Text>
          <Image
            source={require('./../../assets/images/crypto.png')}
            style={{ height: 20, width: 20 }}
          />
          <Text style={{ fontSize: 9, fontWeight: '400', color: 'white' }}>
            0.05
          </Text>
          <Text
            style={{ fontSize: 9, fontWeight: '400', color: '#949494' }}
          >{`(Showing trade greater than 0.05 SOL)`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#949494',
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 9,
              color: '#949494',
              textAlign: 'center',
            }}
          >
            Account
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 9,
              color: '#949494',
              textAlign: 'center',
            }}
          >
            Type
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 9,
              color: '#949494',
              textAlign: 'center',
            }}
          >{`Amount(SOL)`}</Text>
          <Text
            style={{
              flex: 1,
              fontSize: 9,
              color: '#949494',
              textAlign: 'center',
            }}
          >{`Amount(SOM)`}</Text>
          <Text
            style={{
              flex: 1,
              fontSize: 9,
              color: '#949494',
              textAlign: 'center',
            }}
          >
            Txn
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#949494',
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            5UxeT
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            Sell
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            0.001
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            33.65k
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            2ZPtmt
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#949494',
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            5UxeT
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            Sell
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            0.001
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            33.65k
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            2ZPtmt
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#949494',
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            5UxeT
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            Sell
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            0.001
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            33.65k
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            2ZPtmt
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#949494',
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            5UxeT
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            Sell
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            0.001
          </Text>
          <Text
            style={{ flex: 1, fontSize: 10, color: 'red', textAlign: 'center' }}
          >
            33.65k
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
          >
            2ZPtmt
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Trades;
