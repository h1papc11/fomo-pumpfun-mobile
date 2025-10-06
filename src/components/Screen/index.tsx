import { ScrollView, StyleProp, ViewStyle } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"

type ScreenProps = {
    children: React.ReactNode
    contentContainerStyle?: StyleProp<ViewStyle>
};

const Screen: React.FC<ScreenProps> = ({ children, contentContainerStyle }) => {
    return (
        <LinearGradient colors={["#3AB5F8", "#000000", "#000000"]} style={styles.container}>
            <SafeAreaView>
                <ScrollView
                    contentContainerStyle={contentContainerStyle}
                    keyboardShouldPersistTaps="handled"
                >
                    {children}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Screen