import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BottomSheet from '../../../components/BottomSheet';
import styles from './styles';

interface ChatSettingsProps {
  visible: boolean;
  onClose: () => void;
  onSelectType: (value: string) => void;
}

const ChatSettings: React.FC<ChatSettingsProps> = ({ visible, onClose }) => {
  return (
    <BottomSheet
      visible={visible}
      onClose={onClose}
      title="Chat Settings"
      height={350}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Message requests</Text>
        <Text style={styles.subtitle}>
          Select which user can send you DM requests.
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Everyone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Only people you follow</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default ChatSettings;
