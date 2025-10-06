import React from "react";
import { Text, View, TextInput } from "react-native";
import Button from "../../../../components/Button";
import GoogleIcon from "../../../../assets/icons/google.svg";
import AppleIcon from "../../../../assets/icons/apple.svg";
import XIcon from "../../../../assets/icons/x.svg";
import { WalletCards } from "lucide-react-native";
import styles from "./styles";

interface Props {
    goToWallet: () => void;
}


const SocialOptions = ({ goToWallet }: Props) => {
    return (
        <>
            <Text style={styles.subheader}>Select your account</Text>
            <Text style={styles.subtitleSmall}>
                Choose a method to create or sign in to your wallet...
            </Text>

            <Button
                label="Continue with Google"
                variant="outline"
                leftSvgIcon={GoogleIcon}
                style={styles.buttonContainer}
            />
            <Button
                label="Apple"
                variant="outline"
                leftSvgIcon={AppleIcon}
                style={styles.buttonContainer}
            />
            <Button
                label="Twitter"
                variant="outline"
                leftSvgIcon={XIcon}
                style={styles.buttonContainer}
            />
            <Button
                label="Continue with a wallet"
                variant="outline"
                leftLucideIcon={WalletCards}
                rightIconName="chevron-right"
                rightIconFamily="Feather"
                style={styles.buttonContainer}
                onPress={goToWallet}
            />

            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Enter Email address</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#949494"
            />
            <Button label="Log in" />
        </>
    );
};

export default SocialOptions;
