import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import CarouselWithDots from '../../components/CarouselWithDots/CarouselWithDots';
const slides = [
  { id: "1", uri: "https://images.unsplash.com/photo-1517816428104-797678c7cf0d" },
  { id: "2", uri: "https://images.unsplash.com/photo-1520975922284-9f8a5d1b1b0e" },
  { id: "3", uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
];

const DATA = [
  {
    id: '1',
    title: 'XBT Randomly shoots to $10M, Leaves CT Questioning',
    desc: 'XBT is Based on the lesser-known financial abbreviation for bitcoin. while most people...',
    user: 'XBT',
    date: '2d Ago',
    ath: '$203.9k',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: '2',
    title: 'XBT Randomly shoots to $10M, Leaves CT Questioning',
    desc: 'XBT is Based on the lesser-known financial abbreviation for bitcoin. while most people...',
    user: 'XBT',
    date: '2d Ago',
    ath: '$203.9k',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
];

const NewsList = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
      <View style={styles.rowTop}>
        <View style={styles.avatarView}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </View>

      <View style={styles.chipWrap}>
        <Text style={styles.grayText}>{item.user}</Text>
        <Text style={styles.grayText}>{item.date + ' MC '}
            <Text style={styles.chipGray}>{item.ath}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
           <CarouselWithDots data={slides} />
            <Text style={styles.headerText}>
              Older News
            </Text>
          </>
        }
        data={DATA}
        style={styles.flatList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default NewsList;
