import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from '../../../../components/BottomSheet';
import styles from './styles';

interface Recipient {
    id: string;
    username: string;
    followers: string;
    avatar: any;
}

interface SelectRecipientSheetProps {
    visible: boolean;
    onClose: () => void;
    onSelectRecipient: (recipient: Recipient) => void;
}

const SelectRecipientSheet: React.FC<SelectRecipientSheetProps> = ({ visible, onClose, onSelectRecipient }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('Recent');

    const recipients: Recipient[] = [
        {
            id: '1',
            username: 'or6chjd..dsn89',
            followers: '18723 followers',
            avatar: require('../../../../assets/images/avatar2.png'),
        },
        {
            id: '2',
            username: 'hgsvds56..d68',
            followers: '18723 followers',
            avatar: require('../../../../assets/images/avatar2.png'),
        },
        {
            id: '3',
            username: 'or6chjd..dsn89',
            followers: '18723 followers',
            avatar: require('../../../../assets/images/avatar2.png'),
        },
        {
            id: '4',
            username: 'or6chjd..dsn89',
            followers: '18723 followers',
            avatar: require('../../../../assets/images/avatar2.png'),
        },
    ];

    const renderRecipientItem = ({ item }: { item: Recipient }) => (
        <TouchableOpacity style={styles.recipientItem} onPress={() => onSelectRecipient(item)}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.recipientInfo}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.followers}>{item.followers}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <BottomSheet
            visible={visible}
            onClose={onClose}
            title="Select Recipient"
            headerRight={
                <TouchableOpacity>
                    <Text style={styles.nextButton}>Next</Text>
                </TouchableOpacity>
            }
        >
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Feather name="search" size={20} color="#949494" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search username or address"
                        placeholderTextColor="#949494"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'Recent' && styles.activeTab]}
                        onPress={() => setActiveTab('Recent')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Recent' && styles.activeTabText]}>
                            Recent
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'Follower Count' && styles.activeTab]}
                        onPress={() => setActiveTab('Follower Count')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Follower Count' && styles.activeTabText]}>
                            Follower Count
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={recipients}
                    renderItem={renderRecipientItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </BottomSheet>
    );
};

export default SelectRecipientSheet;
