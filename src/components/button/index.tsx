import React from "react";
import {
    Text,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    View,
    Image,
    ImageSourcePropType,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";

type IconFamily = "Ionicons" | "Feather" | "FontAwesome" | "MaterialIcons" | "Entypo";

type ButtonProps = {
    label: string | React.ReactNode;
    onPress?: () => void;
    variant?: "solid" | "outline";
    style?: StyleProp<ViewStyle>;

    leftImageIcon?: ImageSourcePropType;
    leftSvgIcon?: React.ComponentType<{ width?: number; height?: number; color?: string; style?: StyleProp<ViewStyle> }>;
    leftLucideIcon?: React.ComponentType<{ size?: number; color?: string; style?: StyleProp<ViewStyle> }>;
    leftIconName?: string;
    leftIconFamily?: IconFamily;
    leftIconSize?: number;
    leftIconColor?: string;

    rightImageIcon?: ImageSourcePropType;
    rightSvgIcon?: React.ComponentType<{ width?: number; height?: number; color?: string; style?: StyleProp<ViewStyle> }>;
    rightLucideIcon?: React.ComponentType<{ size?: number; color?: string; style?: StyleProp<ViewStyle> }>;
    rightIconName?: string;
    rightIconFamily?: IconFamily;
    rightIconSize?: number;
    rightIconColor?: string;
};

const getIconComponent = (family: IconFamily) => {
    switch (family) {
        case "Feather": return Feather;
        case "FontAwesome": return FontAwesome;
        case "MaterialIcons": return MaterialIcons;
        case "Entypo": return Entypo;
        default: return Ionicons;
    }
};

const Button = ({
    label,
    onPress,
    variant = "solid",
    style,
    leftImageIcon,
    leftSvgIcon: LeftSvgIcon,
    leftLucideIcon: LeftLucideIcon,
    leftIconName,
    leftIconFamily = "Feather",
    leftIconSize = 20,
    leftIconColor = "#fff",
    rightImageIcon,
    rightSvgIcon: RightSvgIcon,
    rightLucideIcon: RightLucideIcon,
    rightIconName,
    rightIconFamily = "Feather",
    rightIconSize = 20,
    rightIconColor = "#fff",
}: ButtonProps) => {
    const LeftIconComponent = getIconComponent(leftIconFamily);
    const RightIconComponent = getIconComponent(rightIconFamily);

    return (
        <TouchableOpacity
            style={[
                variant === "solid" ? styles.buttonSolid : styles.buttonOutline,
                Boolean(leftImageIcon || LeftSvgIcon || LeftLucideIcon || leftIconName) && styles.leftButtonAlign,
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.buttonContent}>
                {leftImageIcon && <Image source={leftImageIcon} style={styles.assetIcon} />}
                {LeftSvgIcon && <LeftSvgIcon width={24} height={24} style={styles.svgIcon} />}
                {LeftLucideIcon && <LeftLucideIcon size={leftIconSize} color={leftIconColor} style={styles.vectorIcon} />}
                {leftIconName && (
                    <LeftIconComponent
                        name={leftIconName}
                        size={leftIconSize}
                        color={leftIconColor}
                        style={styles.vectorIcon}
                    />
                )}

                {typeof label === "string" ? (
                    <Text style={styles.buttonText}>{label}</Text>
                ) : (
                    label
                )}

                {Boolean(rightImageIcon || RightSvgIcon || RightLucideIcon || rightIconName) && (
                    <View style={styles.rightIcons}>
                        {rightImageIcon && <Image source={rightImageIcon} style={styles.assetIcon} />}
                        {RightSvgIcon && <RightSvgIcon width={24} height={24} style={styles.svgIcon} />}
                        {RightLucideIcon && <RightLucideIcon size={rightIconSize} color={rightIconColor} style={styles.vectorIcon} />}
                        {rightIconName && (
                            <RightIconComponent
                                name={rightIconName}
                                size={rightIconSize}
                                color={rightIconColor}
                                style={styles.vectorIcon}
                            />
                        )}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default Button;
