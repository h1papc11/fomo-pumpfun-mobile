import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { navigate } from "../../navigation/navigationReference";

const OnboardingScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/meme1.png")}
                style={styles.memeTopRight}
            />

            <Image
                source={require("../../assets/images/meme2.png")}
                style={styles.memeLeft}
            />

            <Image
                source={require("../../assets/images/meme3.png")}
                style={styles.memeBottom}
            />

            <Button
                label="Continue with account"
                onPress={() => navigate('AccountScreen')}
                style={styles.buttonAlign}
            />

            <Text style={styles.signInText}>
                More <Text style={styles.signInLink}>Sign in</Text> options
            </Text>

            <Text style={styles.terms}>
                By continuing, you agree to our Terms and Privacy Policy
            </Text>
        </View>
    );
};

export default OnboardingScreen;
