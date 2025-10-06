import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    ListRenderItem,
    ImageSourcePropType,
    Pressable,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import Button from "../../components/Button";
import { navigate } from "../../navigation/navigationReference";

type Account = {
    id: string;
    name: string;
    address: string;
    balance: string;
    isCurrent: boolean;
    avatar: ImageSourcePropType;
};

const accounts: Account[] = [
    {
        id: "1",
        name: "Account 1",
        address: "5dsjhd...8dsjh",
        balance: "$12.45",
        isCurrent: true,
        avatar: require("../../assets/images/avatar1.png"),
    },
    {
        id: "2",
        name: "Account 2",
        address: "78dsjhd...9yesdr",
        balance: "$156.45",
        isCurrent: false,
        avatar: require("../../assets/images/avatar1.png"),
    },
];

type AccountItemProps = {
    account: Account;
};

const AccountItem: React.FC<AccountItemProps> = ({ account }) => (
    <Pressable style={styles.accountCard}>
        <Image source={account.avatar} style={styles.avatar} />

        <View style={styles.accountInfo}>
            <Text style={styles.accountName}>{account.name}</Text>
            <Text style={styles.accountAddress}>{account.address}</Text>
        </View>

        <View style={styles.rightSection}>
            <Text style={styles.balance}>{account.balance}</Text>
            <Feather name="edit-2" size={18} color="white" />
        </View>
    </Pressable>
);

const AccountScreen: React.FC = () => {
    const current = accounts.filter((acc) => acc.isCurrent);
    const others = accounts.filter((acc) => !acc.isCurrent);

    const renderItem: ListRenderItem<Account> = ({ item }) => (
        <AccountItem account={item} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Accounts</Text>

            <Text style={styles.sectionTitle}>Currently used</Text>
            {current.map((acc) => (
                <AccountItem key={acc.id} account={acc} />
            ))}

            <Text style={styles.sectionTitle}>Other accounts</Text>
            <FlatList
                data={others}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />

            <Button
                label="Add Account"
                onPress={() => navigate('LoginScreen')}
                style={styles.addButtonSpacing}
            />
        </View>
    );
};

export default AccountScreen;
