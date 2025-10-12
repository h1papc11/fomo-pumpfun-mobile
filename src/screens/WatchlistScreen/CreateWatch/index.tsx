import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import BottomSheet from '../../../components/BottomSheet';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { addToWatchList } from '../../../redux/reducers/watchListSlice';
import CustomTextInput from '../../../components/CustomTextInput';

interface ChatSettingsProps {
  visible: boolean;
  onClose: () => void;
  didAddClick?: () => void;
}

const CreateWatch: React.FC<ChatSettingsProps> = ({
  visible,
  onClose,
  didAddClick,
}) => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addToWatchList(name)); // Only name — ID auto-generated inside slice
      setName('');
      onClose();
    } else {
      Alert.alert('Please Add WatchList Name');
    }
  };
  return (
    <BottomSheet
      visible={visible}
      onClose={onClose}
      title="Create New WatchList"
      height={350}
      addPopUp={true}
      didAddClick={didAddClick}
      hideLeftButton={true}
    >
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <CustomTextInput
            title="Watchlist title"
            placeholder="Enter WatchList Name"
            onChangeText={setName}
          />
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.depositButton} onPress={handleAdd}>
              <Text style={styles.depositButtonText}> Create WatchList </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </BottomSheet>
  );
};

export default CreateWatch;
