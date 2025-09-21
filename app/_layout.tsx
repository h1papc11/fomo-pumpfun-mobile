import { Geist } from '@/constants/fonts';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    [Geist.Black]: require("../assets/fonts/Geist/Geist-Black.ttf"),
    [Geist.Bold]: require("../assets/fonts/Geist/Geist-Bold.ttf"),
    [Geist.ExtraBold]: require("../assets/fonts/Geist/Geist-ExtraBold.ttf"),
    [Geist.ExtraLight]: require("../assets/fonts/Geist/Geist-ExtraLight.ttf"),
    [Geist.Light]: require("../assets/fonts/Geist/Geist-Light.ttf"),
    [Geist.Medium]: require("../assets/fonts/Geist/Geist-Medium.ttf"),
    [Geist.Regular]: require("../assets/fonts/Geist/Geist-Regular.ttf"),
    [Geist.SemiBold]: require("../assets/fonts/Geist/Geist-SemiBold.ttf"),
    [Geist.Thin]: require("../assets/fonts/Geist/Geist-Thin.ttf"),
  });


  const initApp = async () => {
    // Force dark mode
    Appearance.setColorScheme("dark");
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (loaded) {
      initApp();
    }

  }, [loaded]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
