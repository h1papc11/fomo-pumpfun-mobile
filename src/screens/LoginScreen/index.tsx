import React, { useState } from "react";
import {
    Text,
    TextInput,
    Image,
    ScrollView,
    View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import Button from "../../components/button";
import PhantomIcon from '../../assets/icons/phantom.svg'
import GoogleIcon from '../../assets/icons/google.svg'
import AppleIcon from '../../assets/icons/apple.svg'
import XIcon from '../../assets/icons/x.svg'
import { Wallet, WalletCards } from 'lucide-react-native'

const LoginScreen = () => {
    const [showSocial, setShowSocial] = useState(false);

    return (
        <LinearGradient colors={["#3AB5F8", "#000000", "#000000"]} style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
            >
                <Image
                    source={require("../../assets/images/syringe.png")}
                    style={styles.icon}
                />

                {!showSocial ? (
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
                            onPress={() => setShowSocial(true)}
                        />

                        <Text style={styles.orText}>OR</Text>

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
                ) : (
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
                            style={styles.buttonContainer}
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
                            placeholderTextColor="#666"
                        />
                        <Button label="Log in" />
                    </>
                )}

                <Image
                    source={require("../../assets/images/protected_by_privy.png")}
                    style={styles.footerImage}
                    resizeMode="contain"
                />
            </ScrollView>
        </LinearGradient>
    );
};

export default LoginScreen;
