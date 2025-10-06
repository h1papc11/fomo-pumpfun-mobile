import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Modal,
    Animated,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    PanResponder,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface BottomSheetProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    height?: number;
    headerRight?: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
    visible,
    onClose,
    title,
    children,
    height = SCREEN_HEIGHT * 0.7,
    headerRight,
}) => {
    const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

    useEffect(() => {
        if (visible) {
            translateY.setValue(SCREEN_HEIGHT);
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
                damping: 20,
                stiffness: 90,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: SCREEN_HEIGHT,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return gestureState.dy > 5;
            },
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    translateY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 100 || gestureState.vy > 0.5) {
                    onClose();
                } else {
                    Animated.spring(translateY, {
                        toValue: 0,
                        useNativeDriver: true,
                        damping: 20,
                        stiffness: 90,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="none"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <Animated.View
                            style={[
                                styles.bottomSheet,
                                {
                                    height,
                                    transform: [{ translateY }],
                                },
                            ]}
                        >
                            <View {...panResponder.panHandlers} style={styles.header}>
                                <View style={styles.dragIndicator} />
                                {title && (
                                    <View style={styles.titleContainer}>
                                        <TouchableOpacity onPress={onClose} style={styles.backButton}>
                                            <Feather name="chevron-left" size={24} color="#fff" />
                                        </TouchableOpacity>
                                        <Text style={styles.title}>{title}</Text>
                                        {headerRight ? (
                                            <View style={styles.headerRightContainer}>{headerRight}</View>
                                        ) : (
                                            <View style={styles.placeholder} />
                                        )}
                                    </View>
                                )}
                            </View>
                            <View style={styles.content}>{children}</View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default BottomSheet;
