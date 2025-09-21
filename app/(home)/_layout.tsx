import { Tabs } from 'expo-router';
import React from 'react';

import AppView from '@/components/AppView';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image } from 'expo-image';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
     
      screenOptions={{
        tabBarShowLabel: false, 
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].blue,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'dark'].white,
        headerShown: false,
        animation:"shift",
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'dark'].black,
          height: 72,
          // paddingVertical: 16,
          paddingHorizontal: 16,
          borderTopWidth: 0
        },
        tabBarItemStyle: {
          paddingTop: 10,
          justifyContent: "center",
          alignItems: "center",
        },
      }}>
        
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            
                <AppView
                  style={{
                    backgroundColor: focused ? Colors[colorScheme ?? 'dark'].selectedBackground : Colors[colorScheme ?? 'dark'].background,
                    borderRadius: '100%',
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={require("@/assets/icons/navbar/home.svg")}
                    style={{ height: 21, width: 21, tintColor: color }}
                  />
                </AppView>
              
          ),
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            
                <AppView
                  style={{
                    backgroundColor: focused ? Colors[colorScheme ?? 'dark'].selectedBackground : Colors[colorScheme ?? 'dark'].background,
                    borderRadius: '100%',
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={require("@/assets/icons/navbar/magnify.svg")}
                    style={{ height: 21, width: 21, tintColor: color }}
                  />
                </AppView>
              
          ),
        }}
      />

<Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            
                <AppView
                  style={{
                    backgroundColor: Colors[colorScheme ?? 'dark'].skyBlue,
                    borderRadius: '100%',
                    borderWidth: 2,
                    borderColor: Colors[colorScheme??'dark'].blue,
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={require("@/assets/icons/navbar/plus.svg")}
                    style={{ height: 21, width: 21, tintColor: color }}
                  />
                </AppView>
              
          ),
        }}
      />

<Tabs.Screen
        name="chat"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            
                <AppView
                  style={{
                    backgroundColor: focused ? Colors[colorScheme ?? 'dark'].selectedBackground : Colors[colorScheme ?? 'dark'].background,
                    borderRadius: '100%',
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={require("@/assets/icons/navbar/chat.svg")}
                    style={{ height: 21, width: 21, tintColor: color }}
                  />
                </AppView>
              
          ),
        }}
      />

<Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            
                <AppView
                  style={{
                    backgroundColor: focused ? Colors[colorScheme ?? 'dark'].selectedBackground : Colors[colorScheme ?? 'dark'].background,
                    borderRadius: '100%',
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={require("@/assets/icons/navbar/profile.svg")}
                    style={{ height: 21, width: 21, tintColor: color }}
                  />
                </AppView>
              
          ),
        }}
      />
    </Tabs>
  );
}
