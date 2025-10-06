import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from '../../../../components/BottomSheet';
import HeadsetIcon from '../../../../assets/icons/headset.svg';
import BarcodeIcon from '../../../../assets/icons/barcode.svg';
import styles from './styles';

interface CryptoDepositSheetProps {
    visible: boolean;
    onClose: () => void;
    amount?: string;
}

const CryptoDepositSheet: React.FC<CryptoDepositSheetProps> = ({ visible, onClose, amount = '13.0 USDT' }) => {
    return (
        <BottomSheet
            visible={visible}
            onClose={onClose}
            title="Crypto Deposit"
            height={500}
            headerRight={
                <>
                    <TouchableOpacity>
                        <HeadsetIcon width={20} height={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BarcodeIcon width={20} height={20} color="#fff" />
                    </TouchableOpacity>
                </>
            }
        >
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="swap-horizontal" size={48} color="#00A8E8" />
                </View>

                <Text style={styles.mainText}>
                    We got your {amount} - working on your swap.
                </Text>

                <View style={styles.messageBox}>
                    <Text style={styles.messageText}>
                        Your deposit is confirmed. We're now processing your swap and will send the funds shortly.
                    </Text>
                </View>
            </View>
        </BottomSheet>
    );
};

export default CryptoDepositSheet;
