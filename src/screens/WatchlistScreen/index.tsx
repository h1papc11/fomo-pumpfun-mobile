import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { memo, useState } from 'react';
import styles from './styles';
import { Icons } from '../../utils/icons';
import ChipTabs from '../../components/ChipTabs';
import { navigate } from '../../navigation/navigationReference';
import AddWatch from './AddWatch';
import CreateWatch from './CreateWatch';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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
// ----- Card Component -----
const Card = memo(({ item }: any) => {
  const didClickCard = () => {
    navigate('CoinDetailScreen');
  };
  return (
    <TouchableOpacity style={styles.card} onPress={didClickCard}>
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
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.timeValue}>{'5.97%'}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.timeValue}>{'45.97%'}</Text>
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

const WatchlistScreen = () => {
  const watchLists = useSelector(
    (state: RootState) => state.watchList?.watchLists ?? [],
  );

  const [tabIndex, setTabIndex] = useState<number>(0);
  const [showAddWatchList, setShowAddWatchList] = useState<boolean>(false);
  const [showCreateWatchList, setShowCreateWatchList] =
    useState<boolean>(false);

  const didClickAddWatch = () => {
    setShowAddWatchList(!showAddWatchList);
  };
  const didClickForCreateWatch = () => {
    setShowAddWatchList(false);
    setShowCreateWatchList(!showCreateWatchList);
  };

  return (
    <View>
      <View style={styles.tabView}>
        <ChipTabs
          tabs={watchLists.map(item => item.name)}
          activeIndex={tabIndex}
          onChange={setTabIndex}
          customStyle={styles.customTab}
        />
        <TouchableOpacity style={styles.addBtn} onPress={didClickAddWatch}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[...mockData, ...mockData, ...mockData]} // repeat for scroll
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => <Card item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <AddWatch
        visible={showAddWatchList}
        onClose={didClickAddWatch}
        didAddClick={didClickForCreateWatch}
      />
      <CreateWatch
        visible={showCreateWatchList}
        onClose={didClickForCreateWatch}
      />
    </View>
  );
};

export default WatchlistScreen;
