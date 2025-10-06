// CarouselWithDots.tsx
import React, { useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Text,
} from 'react-native';
import { colors } from '../../utils/colors';
import { Icons } from '../../utils/icons';

type Slide = { id: string; uri: string };

type Props = {
  data: Slide[];
  height?: number; // defaults to 56% of screen width (16:9-ish)
  dotSize?: number; // default 8
  dotGap?: number; // default 8
};

const { width } = Dimensions.get('window');

export default function CarouselWithDots({
  data,
  // height = Math.round(width * 0.56),
  dotSize = 6,
  dotGap = 6,
}: Props) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef<ScrollView>(null);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true },
  );

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={ref}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
        contentContainerStyle={{ alignItems: 'center' }}
        decelerationRate="fast"
      >
        {data.map(item => (
          <View key={item.id} style={styles.slide}>
            <Text style={styles.date}>14h</Text>

            <Image
              source={Icons.graphIcon}
              style={{ width: '100%' }}
              resizeMode="contain"
            />

            <View style={styles.heading}>
              <Text>5m 0% 24h 193.02% MC 3.16M</Text>
            </View>
            <Text style={styles.title}>
              StreamQuest Gets Followed & Shouted out by Kai Cenat
            </Text>
            <Text style={styles.desc} numberOfLines={3}>
              StreamQuest is built around community challenges for content
              creators. The project launched on September 15. Its idea: people
              propose quests for streamers, and the project funds them through
              creator rewards and a public pool...
            </Text>
          </View>
        ))}
      </Animated.ScrollView>

      {/* Pagination */}
      <View style={[styles.dotsRow]}>
        {data.map((_, i) => {
          // input range so each page drives its own dot
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          //   const scale = scrollX.interpolate({
          //     inputRange,
          //     outputRange: [1, 1.8, 1],
          //     extrapolate: "clamp",
          //   });

          //   const opacity = scrollX.interpolate({
          //     inputRange,
          //     outputRange: [0.4, 1, 0.4],
          //     extrapolate: "clamp",
          //   });

          const color = scrollX.interpolate({
            inputRange,
            outputRange: [colors.lightGray, colors.success, colors.lightGray],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${i}`}
              style={[
                styles.dot,
                {
                  width: dotSize,
                  height: dotSize,
                  marginHorizontal: dotGap / 2,
                  backgroundColor: color,
                  //   opacity,
                  //   transform: [{ scale }],
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', gap: 8 },
  slide: {
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
    height: 300,
    width: width - 36,
    backgroundColor: colors.solidDarkGray,
    padding: 16,
    gap: 10,
  },
  dotsRow: {
    // position: "absolute",
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: 'white', 
    borderRadius: 999,
  },
  heading: {
    backgroundColor: colors.darkGray,
    paddingVertical: 8,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 16,
    textAlign:"center"
  },
  desc: {
    color: colors.lightGray,
    fontSize: 12,
    textAlign:"center"

  },
  date: {
    color: colors.lightGray,
    fontSize: 12,
  },
});
