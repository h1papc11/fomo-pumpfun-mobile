import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { memo, useState } from 'react';
import DepositHeader from '../../components/DepositHeader';
import ChipTabs from '../../components/ChipTabs';
import { Icons } from '../../utils/icons';
import styles from './styles';
import ChatSettings from './ChatSettings';

const TABS = ['All', 'Unread', 'Groups', 'DMs', 'Coins'];
const MOCK = new Array(6).fill(null).map((_, i) => ({
  id: String(i + 1),
  name: 'SKETCHY Community',
  subDetail: 'fomo.gg',
  url: 'https://fomo.gg/sdjkd/1234564837643...',
  avatar: Icons.placeholder,
}));
type HeaderProps = {
  didClickSetting: () => void;
};

const Header: React.FC<HeaderProps> = ({ didClickSetting }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={didClickSetting}>
        <Image source={Icons.setting} style={styles.closeIcon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}> Inbox </Text>
      <TouchableOpacity>
        <Image source={Icons.editIcon} style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const MessageCard = memo(({ token }: any) => {
  return (
    <View style={styles.messageCard}>
      <Image source={token.avatar} style={styles.placeholder} />
      <View>
        <Text style={styles.name}>{token.name}</Text>
        <Text style={styles.desc}>{token.subDetail}</Text>
        <Text style={styles.url}>{token.url}</Text>
      </View>
    </View>
  );
});
const MessageScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showChatSettingSheet, setShowChatSettingSheet] =
    useState<boolean>(false);
  const [_settingType, setSettingType] = useState<string>('');

  const didClickSetting = () => {
    setShowChatSettingSheet(!showChatSettingSheet);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Icons.BGImage} style={styles.bgImage}>
        <DepositHeader />
        <View style={styles.contentWrapper}>
          <Header didClickSetting={didClickSetting} />

          <ChipTabs tabs={TABS} activeIndex={tabIndex} onChange={setTabIndex} />

          <FlatList
            data={MOCK}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <MessageCard token={item} />}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </ImageBackground>

      <ChatSettings
        visible={showChatSettingSheet}
        onClose={() => setShowChatSettingSheet(false)}
        onSelectType={value => {
          setShowChatSettingSheet(true);
          setSettingType(value);
        }}
      />
    </View>
  );
};

export default MessageScreen;
