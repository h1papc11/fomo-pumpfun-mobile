import React, { useState, useEffect, ReactNode } from "react";
import { Image, BackHandler } from "react-native";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import Screen from "../../components/Screen";
import WalletOptions from "./components/WalletOptions";
import SocialOptions from "./components/SocialOptions";
import WalletSelection from "./components/WalletSelection";
import OtpInput from "./components/OtpInput";
import styles from "./styles";
import { navigate } from "../../navigation/navigationReference";
// import OverlayCard from "../../components/OverlayCard";
// import GoogleIcon from '../../assets/icons/google-fill.svg'
// import TickIcon from '../../assets/icons/tick.svg'

type Step = "walletOptions" | "socialOptions" | "walletSelection" | "otpInput";

interface StepConfig {
    key: Step;
    component: ReactNode;
}

const LoginScreen: React.FC = () => {
    const [step, setStep] = useState<Step>("walletOptions");

    const stepOrder: Step[] = ["walletOptions", "socialOptions", "walletSelection", "otpInput"];

    useEffect(() => {
        const backAction = () => {
            const currentIndex = stepOrder.indexOf(step);
            if (currentIndex > 0) {
                setStep(stepOrder[currentIndex - 1]);
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step]);

    const steps: StepConfig[] = [
        { key: "walletOptions", component: <WalletOptions goToSocial={() => setStep("socialOptions")} /> },
        { key: "socialOptions", component: <SocialOptions goToWallet={() => setStep("walletSelection")} /> },
        { key: "walletSelection", component: <WalletSelection onWalletSelect={() => setStep("otpInput")} /> },
        { key: "otpInput", component: <OtpInput email="ravantmedia@gmail.com" onSubmit={() => navigate('MainTabs')} /> },
    ];

    const currentStep = steps.find(s => s.key === step);

    return (
        <Screen contentContainerStyle={styles.scroll}>
            {currentStep && (
                <Animated.View
                    key={currentStep.key}
                    entering={FadeInRight}
                    exiting={FadeOutLeft}
                    style={styles.stepContainer}
                >
                    <Image
                        source={require("../../assets/images/syringe.png")}
                        style={styles.icon}
                    />
                    {currentStep.component}
                    <Image
                        source={require("../../assets/images/protected_by_privy.png")}
                        style={styles.footerImage}
                        resizeMode="contain"
                    />
                </Animated.View>
            )}
            {/* <OverlayCard
                visible={true}
                onClose={() => { }}
                title="Successfully connected with google"
                message="You're good to go!"
                SvgIcon={GoogleIcon}
                backgroundColor="#000"
                titleColor="#fff"
                messageColor="#fff"
            /> */}
            {/* <OverlayCard
                visible={true}
                onClose={() => { }}
                title="Welcome to fomo.gg"
                message="You’re successfully created an account"
                SvgIcon={TickIcon}
                backgroundColor="#000"
                titleColor="#fff"
                messageColor="#fff"
                custom={<Image
                    source={require("../../assets/images/protected_by_privy.png")}
                    style={[styles.footerImage, styles.footerAlign]}
                    resizeMode="contain"
                />}
            /> */}
        </Screen>
    );
};

export default LoginScreen;
