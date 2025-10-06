import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef } from './navigationReference'
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigation from './BottomTabNavigation';
import OnboardingScreen from '../screens/OnboardingScreen';
import AccountScreen from '../screens/AccountsScreen';
import CoinDetailScreen from '../screens/TradingInfo';

const Stack = createNativeStackNavigator();
const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
                name="MainTabs"
                component={BottomTabNavigation}
            />
            <Stack.Screen name="CoinDetailScreen" component={CoinDetailScreen} />
        </Stack.Navigator>

    );
}

export default function InitialNavigation() {


    return (<NavigationContainer ref={navigationRef}>
        <RootStack />
    </NavigationContainer>);
}