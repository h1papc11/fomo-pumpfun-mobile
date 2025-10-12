import React, { memo } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BottomSheet from '../../../components/BottomSheet';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  addAsFavorite,
  WatchItem,
} from '../../../redux/reducers/watchListSlice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ChatSettingsProps {
  visible: boolean;
  onClose: () => void;
  didAddClick?: () => void;
}

interface CardProps extends WatchItem {
  onPress: (dict: any) => void;
}

const Card = memo(({ id, name, isFavorite, onPress }: CardProps) => {
  const didClickButton = () => {
    let dict = {
      id,
      isFavorite: isFavorite ? false : true,
    };
    onPress(dict);
  };
  return (
    <View style={styles.card} key={id}>
      <View>
        <Text style={styles.cardText}>{name}</Text>
        <Text style={styles.cardSubText}>{'0 coin'}</Text>
      </View>
      <TouchableOpacity onPress={didClickButton}>
        <FontAwesome
          name={isFavorite ? 'star' : 'star-o'}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
});

const AddWatch: React.FC<ChatSettingsProps> = ({
  visible,
  onClose,
  didAddClick,
}) => {
  const watchLists = useSelector(
    (state: RootState) => state.watchList?.watchLists ?? [],
  );
  const dispatch = useDispatch();

  const didPressFavoriteButton = (dict: any) => {
    dispatch(addAsFavorite(dict)); // Only name — ID auto-generated inside slice
  };
  return (
    <BottomSheet
      visible={visible}
      onClose={onClose}
      title="Add to watchlist"
      height={450}
      addPopUp={true}
      didAddClick={didAddClick}
    >
      <View style={styles.container}>
        <FlatList
          data={watchLists} // repeat for scroll
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <Card {...item} onPress={didPressFavoriteButton} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </BottomSheet>
  );
};

export default AddWatch;
