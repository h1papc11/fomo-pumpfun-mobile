import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import Button from "../../../../components/Button";

const OtpInput = ({ email, onSubmit }: { email: string, onSubmit: (code: string) => void }) => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const handleChange = (value: string, index: number) => {
        let newCode = [...code];
        newCode[index] = value.slice(-1);
        setCode(newCode);
    };

    const handleLogin = () => {
        onSubmit(code.join(""));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter confirmation code</Text>
            <Text style={styles.subtitle}>
                Please check {email} for an email from privy.io and enter your code below.
            </Text>

            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={[styles.codeInput, focusedIndex === index && styles.selectedCodeInput,]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onFocus={() => setFocusedIndex(index)}
                        onBlur={() => setFocusedIndex(null)}
                        onChangeText={(value) => handleChange(value, index)}
                    />
                ))}
            </View>
            <Button
                label="Log in"
                variant="solid"
                style={styles.loginButton}
                onPress={handleLogin}
            />
        </View>
    );
};

export default OtpInput;
