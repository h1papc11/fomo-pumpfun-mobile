import AppText from '@/components/AppText'
import AppView from '@/components/AppView'
import { fontFamily } from '@/constants/fonts'
import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { vw } from '@/utils/dimension'
import { Image } from 'expo-image'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'


const dummyTrendingData = [
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: false,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'

    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'

    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    },
    {
        title: 'The bunny',
        subtitle: '$fsh',
        currency: 'MC',
        price: '19.8K',
        change: '45.97',
        isGain: true,
        description: 'Sad Dfe Announces Mr. Beast Style last text message'
    }
]


const CoinCard = ({ title, subtitle, currency, price, change, isGain, description }: { title: string, subtitle: string, currency: string, price: string, change: string, isGain: boolean, description: string }) => {
    const colorScheme = useColorScheme() ?? 'dark';

    return (
            <AppView style={{ padding: 5, width: '100%', borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: Colors[colorScheme].coinCardBg  }}>

                <AppView style={{ borderWidth: 1, borderRadius: 8, borderColor: Colors[colorScheme].white, width: 48, height: 48,  }}>
                    <Image
                        source={require("@/assets/images/dummy-trending.jpg")}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        contentFit="cover"
                    />
                </AppView>

                <AppView>
                    <AppText type='default' style={{ fontSize: 14, maxWidth: vw(25) }} ellipsizeMode='tail' numberOfLines={1}>{title}</AppText>
                    <AppText type='default' style={{ fontSize: 10, maxWidth: vw(25), color: Colors[colorScheme].subtitle }} ellipsizeMode='tail' numberOfLines={1}>{subtitle}</AppText>
                </AppView>

                <AppView style={{marginLeft: 'auto'}}>
                    <AppText type='default' style={{ fontSize: 10, maxWidth: vw(25), fontFamily: fontFamily[700] }} ellipsizeMode='tail' numberOfLines={1}><AppText style={{ color: Colors[colorScheme].subtitle, fontSize: 10 }}>{currency}</AppText>&nbsp;${price}</AppText>
                    <AppView style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>

                        <Image source={require("@/assets/icons/home/arrow.svg")} style={{ width: 9, height: 9, tintColor: isGain ? Colors[colorScheme].gain : Colors[colorScheme].loss, transform: isGain ? [{ rotate: '0deg' }] : [{ rotate: '180deg' }] }} />
                        <AppText type='title' style={{ fontSize: 10, maxWidth: vw(25), color: isGain ? Colors[colorScheme].gain : Colors[colorScheme].loss, textAlign: 'right' }} ellipsizeMode='tail' numberOfLines={1}>
                            {change}%</AppText>

                    </AppView>

                </AppView>

            </AppView>
    )
}

function CoinCardList() {
  return (
   <AppView>
    <ScrollView  showsVerticalScrollIndicator={false}
    
    contentContainerStyle={styles.tabsContainer}>
 {dummyTrendingData.map((data, index) => <CoinCard key={data.title + index} {...data} />)}
    </ScrollView>
   </AppView>
  )
}

const styles = StyleSheet.create({
    tabsContainer: {
        gap: 10,
        alignItems: 'center',
        flexGrow: 1,
    },
})


export default CoinCardList
