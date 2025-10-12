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
  Keyboard,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  height?: any;
  headerRight?: React.ReactNode;
  addPopUp?: boolean;
  hideLeftButton?: boolean;
  didAddClick?: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  onClose,
  title,
  children,
  height = SCREEN_HEIGHT * 0.7,
  headerRight,
  addPopUp = false,
  hideLeftButton = false,
  didAddClick,
}) => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  // Separate animated value to offset sheet when keyboard appears.
  const keyboardOffset = useRef(new Animated.Value(0)).current;

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

  // Adjust sheet when keyboard shows/hides
  useEffect(() => {
    const showEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const onShow = (e: any) => {
      const keyboardHeight = e?.endCoordinates?.height ?? 0;
      Animated.timing(keyboardOffset, {
        toValue: -keyboardHeight,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };

    const onHide = () => {
      Animated.timing(keyboardOffset, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    const showSub = Keyboard.addListener(showEvent, onShow);
    const hideSub = Keyboard.addListener(hideEvent, onHide);

    return () => {
      showSub.remove();
      hideSub.remove();
    };
    // keyboardOffset is a ref; no need to add to deps
  }, [keyboardOffset]);

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
    }),
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
                  transform: [{ translateY }, { translateY: keyboardOffset }],
                },
              ]}
            >
              <View {...panResponder.panHandlers} style={styles.header}>
                <View style={styles.dragIndicator} />
                {title && (
                  <View style={styles.titleContainer}>
                    {!hideLeftButton && (
                      <TouchableOpacity
                        onPress={addPopUp ? didAddClick : onClose}
                        style={styles.backButton}
                      >
                        {addPopUp ? (
                          <Ionicons name="add" size={24} color="#fff" />
                        ) : (
                          <Feather name="chevron-left" size={24} color="#fff" />
                        )}
                      </TouchableOpacity>
                    )}
                    <Text style={styles.title}>{title}</Text>
                    {headerRight ? (
                      <View style={styles.headerRightContainer}>
                        {headerRight}
                      </View>
                    ) : (
                      !hideLeftButton && <View style={styles.placeholder} />
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
