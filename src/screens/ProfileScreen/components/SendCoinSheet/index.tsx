import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from '../../../../components/BottomSheet';
import styles from './styles';

interface Coin {
    id: string;
    name: string;
    amount: string;
    value: string;
    icon: any;
}

interface SendCoinSheetProps {
    visible: boolean;
    onClose: () => void;
    onSelectCoin: (coin: Coin) => void;
}

const SendCoinSheet: React.FC<SendCoinSheetProps> = ({ visible, onClose, onSelectCoin }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const coins: Coin[] = [
        {
            id: '1',
            name: 'SOL',
            amount: '0.051 SOL',
            value: '$12.45',
            icon: require('../../../../assets/images/crypto.png'),
        },
        {
            id: '2',
            name: 'SOL',
            amount: '0.051 SOL',
            value: '$12.45',
            icon: require('../../../../assets/images/crypto.png'),
        },
        {
            id: '3',
            name: 'SOL',
            amount: '0.051 SOL',
            value: '$12.45',
            icon: require('../../../../assets/images/crypto.png'),
        },
        {
            id: '4',
            name: 'SOL',
            amount: '0.051 SOL',
            value: '$12.45',
            icon: require('../../../../assets/images/crypto.png'),
        },
        {
            id: '5',
            name: 'SOL',
            amount: '0.051 SOL',
            value: '$12.45',
            icon: require('../../../../assets/images/crypto.png'),
        },
    ];

    const renderCoinItem = ({ item }: { item: Coin }) => (
        <TouchableOpacity style={styles.coinItem} onPress={() => onSelectCoin(item)}>
            <View style={styles.coinLeft}>
                <Image source={item.icon} style={styles.coinIcon} />
                <View>
                    <Text style={styles.coinName}>{item.name}</Text>
                    <Text style={styles.coinAmount}>{item.amount}</Text>
                </View>
            </View>
            <Text style={styles.coinValue}>{item.value}</Text>
        </TouchableOpacity>
    );

    return (
        <BottomSheet visible={visible} onClose={onClose} title="Send Coin">
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Feather name="search" size={20} color="#949494" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for a coin"
                        placeholderTextColor="#949494"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <FlatList
                    data={coins}
                    renderItem={renderCoinItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </BottomSheet>
    );
};

export default SendCoinSheet;
