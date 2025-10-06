import { View, FlatList, ImageBackground } from 'react-native';
import React, { useMemo, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import styles from './styles';
import DepositHeader from '../../components/DepositHeader';
import ChipTabs from '../../components/ChipTabs';
import TokenCard from '../../components/TokenCard';
import { Icons } from '../../utils/icons';

export type Token = {
  id: string;
  name: string;
  age: string; // e.g. "3s"
  vol: string; // e.g. "$40.67"
  mc: string; // e.g. "$19.8K"
  tx: number; // e.g. 13
  tags: string[]; // e.g. ["A1","6%","15%"]
  avatar?: any; // require(...) or {uri}
};

const TABS = ['New', 'About To Graduate', 'Graduate', 'Featured'];
const MOCK: Token[] = new Array(6).fill(null).map((_, i) => ({
  id: String(i + 1),
  name: 'Sad Dfe Monk',
  age: '3s',
  vol: '$40.67',
  mc: '$19.8K',
  tx: 13,
  tags: ['A1', '6%', '15%'],
  // avatar: require("../../assets/token.jpg"),
}));
const SearchScreen = () => {
  const [q, setQ] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  const data = useMemo(() => {
    if (!q.trim()) return MOCK;
    const term = q.toLowerCase();
    return MOCK.filter(t => t.name.toLowerCase().includes(term));
  }, [q]);
  return (
    <View style={styles.container}>
      <ImageBackground source={Icons.BGImage} style={styles.bgImage}>
        <DepositHeader />
        <View style={styles.contentWrapper}>
          
          <SearchBar value={q} onChangeText={setQ} />
          <ChipTabs tabs={TABS} activeIndex={tabIndex} onChange={setTabIndex} />
        
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TokenCard token={item} />}
          contentContainerStyle={styles.flatListContainer}
        />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SearchScreen;
