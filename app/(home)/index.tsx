import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import AppText from '@/components/AppText';
import AppView from '@/components/AppView';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import FilterButtonTabs from '@/sections/home/FilterButtonTabs';
import MainHorizontalTabs from '@/sections/home/MainHorizontalTabs';
import TrendingNow from '@/sections/home/TrendingNow';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      contentContainerStyle={{
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        flex: 1,
      }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }

      headerBanner = {
        <AppView style={[
          {width: '90%', marginHorizontal: 'auto', borderRadius: 16, top: '50%', backgroundColor: Colors[colorScheme].white, paddingVertical: 15, justifyContent: 'center', alignItems: 'center'}
        ]}>
        <AppText type="defaultSemiBold" style={{ color: Colors[colorScheme].black }}>Instant deposit with Google Pay</AppText>
        </AppView>
    
      }
      >
        <MainHorizontalTabs />

        <TrendingNow />

        <FilterButtonTabs />
      {/* <ThemedView style={styles.titleContainer}>
        <AppText type="title">Welcome!</AppText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <AppText type="subtitle">Step 1: Try it</AppText>
        <AppText>
          Edit <AppText type="defaultSemiBold">app/(tabs)/index.tsx</AppText> to see changes.
          Press{' '}
          <AppText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </AppText>{' '}
          to open developer tools.
        </AppText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <AppText type="subtitle">Step 2: Explore</AppText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <AppText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </AppText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <AppText type="subtitle">Step 3: Get a fresh start</AppText>
        <AppText>
          {`When you're ready, run `}
          <AppText type="defaultSemiBold">npm run reset-project</AppText> to get a fresh{' '}
          <AppText type="defaultSemiBold">app</AppText> directory. This will move the current{' '}
          <AppText type="defaultSemiBold">app</AppText> to{' '}
          <AppText type="defaultSemiBold">app-example</AppText>.
        </AppText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
