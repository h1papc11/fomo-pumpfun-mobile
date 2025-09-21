
  import AppText from '@/components/AppText';
import AppTouchableOpacity from '@/components/AppTouchableOpacity';
import AppView from '@/components/AppView';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

  const TABS = [
    { key: 'for_you', label: 'Movers' },
    { key: 'trending', label: 'Live' },
    { key: 'following', label: 'News' },
    { key: 'news', label: 'Featured' },
    { key: 'sports', label: 'Leaderboard' },
    { key: 'music', label: 'Watchlist' },
    // Add more tabs as needed
  ];

  export default function MainHorizontalTabs() {
    const [selected, setSelected] = useState(TABS[0].key);
    const colorScheme = useColorScheme() ?? 'dark';

    return (
      <AppView style={{ marginBottom: 10 ,display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
     <Image source={require("@/assets/icons/home/isolation.svg")} style={{height: 49, width: 33}} />
     
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {TABS.map(tab => {
            const isSelected = selected === tab.key;
            return (
              <AppTouchableOpacity
                key={tab.key}
                style={styles.tabButton}
                onPress={() => setSelected(tab.key)}
              >
                <View style={styles.tabInner}>
                  <AppText
                    type={isSelected ? 'defaultSemiBold' : 'default'}
                    style={{
                      color: isSelected
                        ? Colors[colorScheme].blue
                        : Colors[colorScheme].text,
                      fontSize: 14,
                    }}
                  >
                    {tab.label}
                  </AppText>
                  {isSelected && (
                    <View
                      style={[
                        styles.underline,
                        { backgroundColor: Colors[colorScheme].blue },
                      ]}
                    />
                  )}
                </View>
              </AppTouchableOpacity>
            );
          })}
        </ScrollView>

        <Image source={require("@/assets/icons/home/notification-bell.svg")} style={{height: 32, width: 32}} />
     
      </AppView>
    );
  }

  const styles = StyleSheet.create({
    tabsContainer: {
      paddingHorizontal: 4,
      alignItems: 'center',
      flexGrow: 1,
    },
    tabButton: {
      marginHorizontal: 8,
      paddingVertical: 6,
    },
    tabInner: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    underline: {
      marginTop: 1,
      height: 2,
      borderRadius: 2,
      width: '100%',
    },
  });