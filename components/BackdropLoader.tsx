import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ColorsType } from '@/constants/colors';

const BackdropLoader = ({ isVisible }: { isVisible: boolean }) => {
  const color: ColorsType = useThemeColor() as ColorsType;

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      presentationStyle="overFullScreen"
    //   statusBarTranslucent={true}
      
    >
      <View style={styles.modalOverlay}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator 
            size="large" 
            color={color.primary}
            style={{ transform: [{ scale: 1.5 }] }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default BackdropLoader;