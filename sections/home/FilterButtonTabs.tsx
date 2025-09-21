import AppText from '@/components/AppText'
import AppTouchableOpacity from '@/components/AppTouchableOpacity'
import AppView from '@/components/AppView'
import { fontFamily } from '@/constants/fonts'
import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Image } from 'expo-image'
import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const TABS = [
    { key: 'all', label: 'All', icon: '' },
    { key: 'gaming', label: 'Gaming', icon: require('@/assets/icons/home/joystick.svg') },
    { key: 'animalAntics', label: 'Animal Antics', icon: require('@/assets/icons/home/dog.svg') },
    { key: 'financialSatire', label: 'Financial Satire', icon: require('@/assets/icons/home/money-bag.svg') },
    { key: 'sockValue', label: 'Sock Value', icon: require('@/assets/icons/home/increase.svg') },
    { key: 'liveChaos', label: 'Live Chaos', icon: require('@/assets/icons/home/flash.svg') },
    { key: 'news', label: 'News', icon: require('@/assets/icons/home/speaker.svg') },
    { key: 'fire', label: 'Edgy Humor', icon: require('@/assets/icons/home/fire.svg') },
]


function FilterButtonTabs() {
    const [selected, setSelected] = useState(TABS[0].key);

    const colorScheme = useColorScheme() ?? 'dark';
  return (
    <AppView style={{ marginBottom: 10 ,display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
                onPress={() => setSelected(tab.key)}
                style={[
                  styles.tabButton,
                  {
                    backgroundColor: isSelected ? Colors[colorScheme].skyBlue : Colors[colorScheme].buttonBackground,
                    borderColor: Colors[colorScheme].blue,
                  }
                ]}
              >
                  {tab.icon ? (
                    <Image
                      source={tab.icon}
                      style={{
                        width: 18,
                        height: 18,
                        // tintColor: isSelected ? 'black' : Colors[colorScheme].blue
                      }}
                    />
                  ) : null}
                  <AppText
                  type="default"
                    style={{
                      color: isSelected ? 'black' : Colors[colorScheme].white,
                      fontSize: 12,
                      fontFamily: isSelected ? fontFamily[600] : fontFamily[400]
                    }}
                  >
                    {tab.label}
                  </AppText>
              </AppTouchableOpacity>
            );
          })}
        </ScrollView>
</AppView>
  );
}

export default FilterButtonTabs;



const styles = StyleSheet.create({
    tabsContainer: {
      paddingHorizontal: 4,
      alignItems: 'center',
      flexGrow: 1,
      gap: 8,
    },
    tabButton: {
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
    }
});