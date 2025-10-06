import React, { useState } from "react";
import {
    View, Text, Image, TouchableOpacity, ImageBackground,
    // FlatList,
    // TextInput
} from "react-native";
import Screen from "../../components/Screen";
import styles from "./styles";
import Feather from "react-native-vector-icons/Feather";
import Octicons from 'react-native-vector-icons/Octicons'
import Svg, { Circle } from "react-native-svg";
import CoinDollarIcon from '../../assets/icons/coin-dollar.svg'
import ShareIcon from '../../assets/icons/share.svg'
import CoinBrokenIcon from '../../assets/icons/coin-broken.svg'
import SendCoinSheet from './components/SendCoinSheet';
import SelectRecipientSheet from './components/SelectRecipientSheet';
import CryptoDepositSheet from './components/CryptoDepositSheet';
// import Entypo from "react-native-vector-icons/Entypo";
// import OverlayCard from "../../components/OverlayCard";

const ProfileScreen = () => {
    const [profile] = useState({
        name: "Alexa Rawles",
        walletId: "DrKuUBtWT...X5xZ",
        balance: 99999.0,
        solBalance: 0,
        followers: 0,
        following: 0,
        createdCoins: 0,
    });

    const [showSendCoinSheet, setShowSendCoinSheet] = useState(false);
    const [showRecipientSheet, setShowRecipientSheet] = useState(false);
    const [showDepositSheet, setShowDepositSheet] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState<any>(null);

    // const [activeTab, setActiveTab] = useState("Balances");

    // const [coins] = useState([
    //     {
    //         id: "1",
    //         title: "Solana balance",
    //         subtitle: "0.0000 SOL",
    //         value: "$2352.00",
    //         mcap: "-",
    //         icon: require("../../assets/images/avatar3.png"),
    //     },
    //     {
    //         id: "2",
    //         title: "Solana balance",
    //         subtitle: "0.0000 SOL",
    //         value: "$2352.00",
    //         mcap: "-",
    //         icon: require("../../assets/images/avatar3.png"),
    //     },
    // ]);

    // const [username, setUsername] = useState("")
    // const [bio, setBio] = useState("")

    // const tabs = ["Balances", "Replies", "Notifications"];

    return (
        <Screen>
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image source={require("../../assets/images/avatar2.png")} style={styles.avatar} />
                    <View>
                        <Text style={styles.username}>{profile.name}</Text>
                        <View style={styles.walletIdContainer}>
                            <Text style={styles.wallet}>{profile.walletId}</Text>
                            <Feather name="copy" size={12} color="#949494" />
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Feather name="menu" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.balanceContainer}>
                <Text style={styles.balance}>${profile.balance.toFixed(2)}</Text>
                <Text style={styles.subBalance}>{profile.solBalance} SOL</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>{profile.followers}</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>{profile.following}</Text>
                    <Text style={styles.statLabel}>Following</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>{profile.createdCoins}</Text>
                    <Text style={styles.statLabel}>Created coins</Text>
                </View>
            </View>

            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <View style={[styles.actionIconContainer, { backgroundColor: '#00A8E8' }]}>
                        <Feather name="download" size={24} color="#fff" />
                    </View>
                    <Text style={styles.actionButtonLabel}>Receive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => setShowSendCoinSheet(true)}>
                    <View style={[styles.actionIconContainer, { backgroundColor: '#333' }]}>
                        <Feather name="arrow-up-right" size={24} color="#fff" />
                    </View>
                    <Text style={styles.actionButtonLabel}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <View style={[styles.actionIconContainer, { backgroundColor: '#333' }]}>
                        <CoinDollarIcon width={24} height={24} color="#fff" />
                    </View>
                    <Text style={styles.actionButtonLabel}>Deposit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <View style={[styles.actionIconContainer, { backgroundColor: '#333' }]}>
                        <ShareIcon width={24} height={24} color={'#fff'} />
                    </View>
                    <Text style={styles.actionButtonLabel}>Share</Text>
                </TouchableOpacity>
            </View>

            <ImageBackground
                source={require("../../assets/images/Isolation_Mode.png")}
                style={styles.completeProfileCard}
                imageStyle={styles.completeProfileBackgroundImage}
                resizeMode="cover"
            >
                <TouchableOpacity style={styles.completeProfileCardContent}>
                    <View style={styles.progressCircle}>
                        <Svg width="56" height="56" viewBox="0 0 56 56">
                            <Circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="#333"
                                strokeWidth="4"
                                fill="none"
                            />
                            <Circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="#00A8E8"
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 24}`}
                                strokeDashoffset={`${2 * Math.PI * 24 * (1 - 0.25)}`}
                                strokeLinecap="round"
                                rotation="-90"
                                origin="28, 28"
                            />
                        </Svg>
                        <Text style={styles.progressText}>25%</Text>
                    </View>
                    <View style={styles.completeProfileTextContainer}>
                        <Text style={styles.completeProfileTitle}>Complete your profile 💰</Text>
                        <Text style={styles.completeProfileSubtitle}>Only noobs stop at 25%</Text>
                    </View>
                    <Feather name="chevron-right" size={24} color="#fff" />
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.balancesSection}>
                <View style={styles.balancesSectionHeader}>
                    <CoinBrokenIcon width={18} height={18} color={'#949494'} />
                    <Text style={styles.balancesSectionTitle}>Balances</Text>
                </View>
                <View style={styles.balanceItem}>
                    <View style={styles.balanceItemLeft}>
                        <Image source={require("../../assets/images/crypto.png")} style={styles.balanceIcon} />
                        <View>
                            <Text style={styles.balanceTokenName}>SOL</Text>
                            <Text style={styles.balanceTokenAmount}>0.051 SOL</Text>
                        </View>
                    </View>
                    <Text style={styles.balanceTokenValue}>$12.45</Text>
                </View>
            </View>

            <View style={styles.transactionSection}>
                <View style={styles.transactionSectionHeader}>
                    <Octicons name="arrow-switch" size={18} color="#949494" />
                    <Text style={styles.transactionSectionTitle}>Transaction</Text>
                </View>
                <View style={styles.transactionItem}>
                    <View style={styles.transactionItemLeft}>
                        <Image source={require("../../assets/images/crypto.png")} style={styles.transactionIcon} />
                        <View>
                            <Text style={styles.transactionTitle}>Deposit SOL</Text>
                            <Text style={styles.transactionSubtitle}>From 4dsu...8cvdb</Text>
                        </View>
                    </View>
                    <View style={styles.transactionItemRight}>
                        <Text style={styles.transactionAmount}>+0.06 SOL</Text>
                        <Text style={styles.transactionTime}>today at 6:34 PM</Text>
                    </View>
                </View>
            </View>

            {/* <View style={styles.tabs}>
                {tabs.map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                        <Text style={activeTab === tab ? styles.activeTab : styles.tab}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={coins}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.coinListContainer}
                renderItem={({ item, index }) => {
                    const isFirstActive = index === 0
                    return (
                        <View style={styles.coinsRow}>
                            <View>
                                {isFirstActive && <Text style={styles.coinHeaderTextStyle}>Coins</Text>}
                                <View style={styles.coinInitialContainer}>
                                    <Image source={item.icon} style={styles.coinIcon} />
                                    <View>
                                        <Text style={styles.coinTitle}>{item.title}</Text>
                                        <Text style={styles.coinSubtitle}>{item.subtitle}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.coinMiddleContainer}>
                                {isFirstActive && <Text style={styles.coinHeaderTextStyle}>MCap</Text>}
                                <Text style={styles.coinValue}>{item.mcap}</Text>
                            </View>
                            <View>
                                {isFirstActive && <Text style={styles.coinHeaderTextStyle}>Value</Text>}
                                <Text style={styles.coinValue}>{item.value}</Text>
                            </View>
                        </View>
                    )
                }}
            /> */}

            {/*    <OverlayCard
                visible={true}
                onClose={() => { }}
                custom={
                    <View style={styles.innerContainer}>
                        <View style={styles.avatarContainer}>
                            <View style={styles.overlayAvatar}>
                                <Image source={require('../../assets/images/avatar4.png')} style={styles.avatarEmoji} />
                                <View style={styles.cameraBtn}>
                                    <Entypo name="camera" size={20} color="#fff" />
                                </View>
                            </View>
                        </View>

                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#888"
                            value={username}
                            onChangeText={setUsername}
                        />
                        <Text style={styles.hint}>you can change your username once every day</Text>

                        <Text style={styles.label}>Bio</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Describe Your Profile"
                            placeholderTextColor="#888"
                            value={bio}
                            onChangeText={setBio}
                        />

                        <TouchableOpacity style={styles.saveBtn}>
                            <Text style={styles.saveBtnText}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>
                }
            /> */}

            <SendCoinSheet
                visible={showSendCoinSheet}
                onClose={() => setShowSendCoinSheet(false)}
                onSelectCoin={(coin) => {
                    setSelectedCoin(coin);
                    setShowSendCoinSheet(false);
                    setShowRecipientSheet(true);
                }}
            />

            <SelectRecipientSheet
                visible={showRecipientSheet}
                onClose={() => setShowRecipientSheet(false)}
                onSelectRecipient={(_recipient) => {
                    setShowRecipientSheet(false);
                    setShowDepositSheet(true);
                }}
            />

            <CryptoDepositSheet
                visible={showDepositSheet}
                onClose={() => setShowDepositSheet(false)}z
            />
        </Screen>
    );
};

export default ProfileScreen;
