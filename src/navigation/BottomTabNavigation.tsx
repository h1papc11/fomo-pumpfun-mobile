import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { SvgProps } from "react-native-svg";
import ProfileScreen from "../screens/ProfileScreen";
import HomeIcon from '../assets/icons/home.svg'
import SearchIcon from '../assets/icons/search.svg'
import AddIcon from '../assets/icons/add.svg'
import ChatIcon from '../assets/icons/chat.svg'
import ProfileIcon from '../assets/icons/profile.svg'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CreateCoin from "../screens/CreateCoin";
import MessageScreen from "../screens/MessageScreen";

export type BottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Add: undefined;
    Chat: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type RenderTabIconProps = {
    route: RouteProp<BottomTabParamList, keyof BottomTabParamList>;
    focused: boolean;
    color: string;
    size: number;
};

const renderTabIcon = ({ route, focused, color = "#ffffff", size = 24 }: RenderTabIconProps) => {
    const activeColor = focused ? "#25E9FF" : color;

    let IconComponent: React.FC<SvgProps> | null = null;

    if (route.name === "Home") {
        IconComponent = HomeIcon;
    } else if (route.name === "Search") {
        IconComponent = SearchIcon;
    } else if (route.name === "Add") {
        return (
            <View style={[styles.highlightTab, styles.highlightAddTab]}>
                <AddIcon width={size} height={size} color="#fff" />
            </View>
        );
    } else if (route.name === "Chat") {
        IconComponent = ChatIcon;
    } else if (route.name === "Profile") {
        IconComponent = ProfileIcon;
    }

    if (!IconComponent) return null;

    return focused ? (
        <View style={styles.highlightTab}>
            <IconComponent width={size} height={size} color={activeColor} />
        </View>
    ) : (
        <IconComponent width={size} height={size} color={activeColor} />
    );
};


const BottomTabNavigation = () => {
    const { bottom } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            screenOptions={({
                route,
            }): BottomTabNavigationOptions => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                    height: 40,
                    paddingBottom: bottom + 50
                },
                tabBarIcon: ({ focused, color, size }) =>
                    renderTabIcon({ route, focused, color, size }),
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Add" component={CreateCoin} />
            <Tab.Screen name="Chat" component={MessageScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation

const styles = StyleSheet.create({
    addButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#3AB5F8",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    highlightTab: {
        width: 40,
        height: 40,
        borderRadius: 18,
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center",
    },
    highlightAddTab: { backgroundColor: "#3AB5F8", }
});
