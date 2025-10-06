import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "../../../../components/Button";
import styles from "./styles";
import Feather from 'react-native-vector-icons/Feather';

interface Props {
    onWalletSelect: () => void;
}

type Wallet = {
    id: number;
    name: string;
};

const wallets: Wallet[] = [
    { id: 1, name: "ABWallet" },
    { id: 2, name: "Alicebob Wallet" },
];

const WalletSelection = ({ onWalletSelect }: Props) => {
    const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);

    if (selectedWallet) {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.titleAlign]}>Open or install {selectedWallet.name}</Text>
                <Text style={styles.subtitle}>
                    To connect to {selectedWallet.name}, install and open the app. Then confirm the connection when prompted.
                </Text>
                <Button
                    label={selectedWallet.name}
                    variant="outline"
                    leftIconName="credit-card"
                    leftIconFamily="Feather"
                    style={styles.buttonContainer}
                    onPress={onWalletSelect}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connect wallet</Text>
            <View style={styles.input}>
                <Feather name="search" size={20} color="#949494" />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search wallets"
                    placeholderTextColor="#949494"
                />
            </View>
            <View>
                {wallets.map(wallet => (
                    <Button
                        key={wallet.id}
                        label={wallet.name}
                        variant="outline"
                        leftIconName="credit-card"
                        leftIconFamily="Feather"
                        style={styles.buttonContainer}
                        onPress={() => setSelectedWallet(wallet)}
                    />
                ))}
            </View>
        </View>
    );
}

export default WalletSelection;
