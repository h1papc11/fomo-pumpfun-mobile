import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Button from "../../../../components/Button";
import PhantomIcon from "../../../../assets/icons/phantom.svg";
import { Wallet } from "lucide-react-native";

interface Props {
    goToSocial: () => void;
}

const WalletOptions = ({ goToSocial }: Props) => {
    return (
        <>
            <Text style={styles.title}>Connect or Create wallet</Text>
            <Text style={styles.subtitle}>Sign up to see more</Text>
            <Button
                label={
                    <View>
                        <Text style={styles.buttonText}>Login with email or Socials</Text>
                        <Text style={styles.helperText}>
                            zero confirmation trading
                        </Text>
                    </View>}
                variant="outline"
                leftIconName="user"
                leftIconFamily="Feather"
                leftIconColor="#949494"
                rightIconName="chevron-right"
                rightIconFamily="Feather"
                onPress={goToSocial}
                style={styles.loginButton}
            />

            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>

            <Button
                label="Phantom"
                variant="outline"
                leftSvgIcon={PhantomIcon}
                style={styles.buttonContainer}
            />
            <Button
                label="More Wallets"
                variant="outline"
                leftLucideIcon={Wallet}
                leftIconColor="#949494"
                style={styles.buttonContainer}
            />
        </>
    );
};

export default WalletOptions;
