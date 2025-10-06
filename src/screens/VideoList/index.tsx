import { View, Text, Dimensions, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import { navigate } from '../../navigation/navigationReference';

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    title: "LAB | 9mo",
    user: "4hksgxc",
    avatar: "https://i.pravatar.cc/100?img=1",
    videoUrl:
      "https://cdn.pixabay.com/download/video/2016/06/06/06-58-34-954_512x288.mp4?filename=kitten-15579.mp4",
    thumbnail:
      "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    mcDelta: "+45.97%",
    ath: "$203.9k",
  },
  {
    id: "2",
    title: "LAB | 9mo",
    user: "4hksgxc",
    avatar: "https://i.pravatar.cc/100?img=2",
    videoUrl:
      "https://cdn.pixabay.com/download/video/2020/03/17/08-29-48-126_512x288.mp4?filename=people-laughing-39677.mp4",
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    mcDelta: "+45.97%",
    ath: "$203.9k",
  },
  {
    id: "3",
    title: "DOGE | 2yr",
    user: "dogelover",
    avatar: "https://i.pravatar.cc/100?img=3",
    videoUrl:
      "https://cdn.pixabay.com/download/video/2017/01/04/00-12-10-512_512x288.mp4?filename=dog-12345.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    mcDelta: "+12.34%",
    ath: "$150.0k",
  },
  {
    id: "4",
    title: "BTC | 5yr",
    user: "satoshi",
    avatar: "https://i.pravatar.cc/100?img=4",
    videoUrl:
      "https://cdn.pixabay.com/download/video/2018/02/20/12-34-56-789_512x288.mp4?filename=btc-67890.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    mcDelta: "-8.76%",
    ath: "$1.2M",
  },
  {
    id: "5",
    title: "ETH | 3yr",
    user: "vitalik",
    avatar: "https://i.pravatar.cc/100?img=5",
    videoUrl:
      "https://cdn.pixabay.com/download/video/2019/03/15/10-20-30-456_512x288.mp4?filename=eth-54321.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    mcDelta: "+22.10%",
    ath: "$500.5k",
  },
  {
    id: "6",
    title: "APE | 1yr",
    user: "apeking",
    avatar: "https://i.pravatar.cc/100?img=6",
    videoUrl:
      "https://cdn.pixabay.com/download/video/2020/01/01/01-23-45-678_512x288.mp4?filename=ape-98765.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    mcDelta: "-3.21%",
    ath: "$75.0k",
  },
];

const CARD_W = width - 18;
const CARD_H = Math.round(CARD_W * 0.52);

const VideoList = () => {


    const renderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => {navigate("CoinDetailScreen",item)}}
    
    >
      <View style={{ width: '100%', height: CARD_H, position: 'relative',  borderRadius: 8, overflow: 'hidden' }}>
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
          onError={(event) => console.warn('Image load error:', event)}
        />
        <View style={[styles.livePill, { position: 'absolute', top: 10, left: 10, bottom: undefined }]}> 
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      </View>

      <View style={styles.meta}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.user}>{item.user}</Text>
        </View>
        <View style={styles.chipWrap}>
          <Text style={styles.grayText}>{"MC "}
            <Text style={styles.chipBlue}>{item.mcDelta}</Text>
          </Text>
                    <Text style={styles.grayText}>{"ATH "}
          <Text style={styles.chipGray}>{item.ath}</Text>
          </Text>
          

        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View >
    <FlatList
      data={DATA}
      style={styles.flatList}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
    />
    </View>
  )
}

export default VideoList