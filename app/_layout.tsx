import { Geist } from '@/constants/fonts'
// import { PrivyProvider, usePrivy } from '@privy-io/expo';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

import '@ethersproject/shims'
import 'fast-text-encoding'
import 'react-native-get-random-values'

import { useColorScheme } from '@/hooks/use-color-scheme'
import { useEffect, useState } from 'react'
import { Appearance } from 'react-native'

import 'react-native-reanimated'

export const unstable_settings = {
  anchor: '(tabs)',
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // const {isReady} = usePrivy();
  const [authenitcated, setAuthenticated] = useState(false)
  const colorScheme = useColorScheme()
  const router = useRouter()

  const [loaded] = useFonts({
    [Geist.Black]: require('../assets/fonts/Geist/Geist-Black.ttf'),
    [Geist.Bold]: require('../assets/fonts/Geist/Geist-Bold.ttf'),
    [Geist.ExtraBold]: require('../assets/fonts/Geist/Geist-ExtraBold.ttf'),
    [Geist.ExtraLight]: require('../assets/fonts/Geist/Geist-ExtraLight.ttf'),
    [Geist.Light]: require('../assets/fonts/Geist/Geist-Light.ttf'),
    [Geist.Medium]: require('../assets/fonts/Geist/Geist-Medium.ttf'),
    [Geist.Regular]: require('../assets/fonts/Geist/Geist-Regular.ttf'),
    [Geist.SemiBold]: require('../assets/fonts/Geist/Geist-SemiBold.ttf'),
    [Geist.Thin]: require('../assets/fonts/Geist/Geist-Thin.ttf'),
  })

  const initApp = async () => {
    // // Force dark mode
    if (!authenitcated) {
      router.dismissAll()
      router.navigate('/auth/send-otp')
    }
    Appearance.setColorScheme('dark')
    await SplashScreen.hideAsync()
  }

  useEffect(() => {
    if (loaded) {
      initApp()
    }
  }, [loaded])

  const authRoute = () => (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth/send-otp" />
      <Stack.Screen name="auth/verify-otp" />
    </Stack>
  )
  const protectedRoute = () => {
    return (
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', title: 'Modal' }}
        />
      </Stack>
    )
  }
  return (
    // <PrivyProvider appId={CONFIG.privyAppID} clientId={CONFIG.privyClientID}>

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {authenitcated ? protectedRoute() : authRoute()}
      <StatusBar style="auto" />
    </ThemeProvider>
    // </PrivyProvider>
  )
}
