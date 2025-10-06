import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, Modal } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { SvgProps } from "react-native-svg";

type OverlayCardProps = {
    visible: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    icon?: ImageSourcePropType;
    SvgIcon?: React.FC<SvgProps>;
    backgroundColor?: string;
    titleColor?: string;
    messageColor?: string;
    custom?: React.ReactNode;
};

const OverlayCard = ({
    visible,
    onClose,
    title,
    message,
    icon,
    SvgIcon,
    backgroundColor = "#111",
    titleColor = "#fff",
    messageColor = "#ccc",
    custom
}: OverlayCardProps) => {

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={[styles.container, { backgroundColor }]}>
                    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                        <Icon name="close" size={22} color="#aaa" />
                    </TouchableOpacity>

                    {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}

                    {SvgIcon && <SvgIcon width={60} height={60} style={styles.icon} />}

                    {title && (
                        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                    )}

                    {message && (
                        <Text style={[styles.message, { color: messageColor }]}>{message}</Text>
                    )}
                    {custom && custom}
                </View>
            </View>
        </Modal>
    );
};

export default OverlayCard;
