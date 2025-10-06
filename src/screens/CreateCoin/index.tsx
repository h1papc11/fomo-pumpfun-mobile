import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Icons } from '../../utils/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';
import InlinePublishSchedulerCal from '../../components/InlinePublishSchedulerCal';
import { launchImageLibrary, Asset, ImageLibraryOptions } from "react-native-image-picker";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={Icons.supportIcon} style={styles.supportIcon} />
      <Text style={styles.headerTitle}> Create Coin </Text>
      <TouchableOpacity>
        <Image source={Icons.cancelIcon} style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

type TextBoxProps = {
  title: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  customStyle?: object;
};
const TextBox: React.FC<TextBoxProps> = ({
  title,
  placeholder,
  multiline,
  customStyle,
}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[styles.textBox, customStyle]}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={colors.lightGray}
      />
    </View>
  );
};

const CreateCoin = () => {
  const [socialLinkOpen, setSocialLinkOpen] = React.useState(false);
  const [_when, setWhen] = useState<Date | null>(null);
  const [showCalender, setShowCalender] = useState<boolean>(false);
  const [assets, setAssets] = useState<Asset>();

  const didClickSocialLink = () => {
    setSocialLinkOpen(!socialLinkOpen);
  };

  const didClickPublishBtn = () =>{
    setShowCalender(!showCalender)
  }

    const openLibrary = async () => {
    const opts: ImageLibraryOptions = {
      mediaType: "mixed",      // images + videos
      selectionLimit: 0,       // 0 = unlimited (Android/iOS dependent)
      includeExtra: true,
      quality: 1,
    };

    const res = await launchImageLibrary(opts);
    if (res.didCancel) return;
    if (res.errorCode) {
      Alert.alert("Picker error", res.errorMessage || res.errorCode);
      return;
    }
    setAssets(res.assets && res.assets[0] ? res.assets[0] : undefined);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.formBox}>
            <TextBox title="Coin Name" placeholder="Name Your Coin" />
            <TextBox title="Ticker" placeholder="Name Ticker" />
            <TextBox
              title="Description (Optional)"
              placeholder="Write a short Description"
              multiline={true}
              customStyle={styles.multilineTextBox}
            />
            <View style={styles.addSocialLinkBox}>
              <Image source={Icons.attachment} style={styles.attachment} />

              <TouchableOpacity
                onPress={didClickSocialLink}
                style={styles.addSocialLinkBox}
              >
                <Text style={styles.linkText}>Add social links (optional)</Text>
                <Image source={Icons.arrow} style={styles.arrow} />
              </TouchableOpacity>
            </View>
            {socialLinkOpen && (
              <View>
                <TextBox title="Website" placeholder="Add URL" />
                <TextBox title="Twitter Link" placeholder="Add URL" />
                <TextBox title="Telegram Link" placeholder="Add URL" />
              </View>
            )}
          </View>

          <View style={styles.formBox}>
            <View style={styles.imageBox}>
              {assets && assets.uri ? (
                <Image source={{ uri: assets.uri }} style={{ width: "96%", height: 210, margin: 6, borderRadius: 8 }} />
              ) :
              <><Image source={Icons.imageIcon} style={styles.imageIcon} />
              <Text style={styles.imageTitle}>
                Select video or image to upload
              </Text>
              <Text style={styles.imageDesc}>or drag and drop it here</Text>
              <TouchableOpacity style={styles.fileBtn} onPress={openLibrary}>
                <Text style={styles.fileText}>Select File</Text>
              </TouchableOpacity></>
              }

              
            </View>
          </View>
          <View style={styles.createCoinBox}>
            <View>
              <Text style={styles.coinsCreate}>Create coin chat</Text>
              <Text style={styles.coinsCreateDesc}>
                A fomo-gg group chat for coin discussion
              </Text>
            </View>
            <TouchableOpacity>
              <Image source={Icons.switch} style={styles.switch} />
            </TouchableOpacity>
          </View>
          <View style={styles.formBox}>
            <View style={styles.msgBox}>
              <Image source={Icons.coinBroken} style={styles.arrow} />
              <Text style={styles.coinMSG}>
                Coin data (social links, banner, etc) can only be added now, and
                can't be changed or edited after creation
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.publishBtn} onPress={didClickPublishBtn}>
            <Image source={Icons.clockIcon} style={styles.arrow} />
            <Text style={styles.publish}>Publish (Immediate)</Text>
          </TouchableOpacity>

          {showCalender && (
            <InlinePublishSchedulerCal
              timezoneLabel="IST"
              onChange={setWhen}
              minDate="2025-01-01"
              didClickCross={didClickPublishBtn}
            />
          )}
        </ScrollView>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositButtonText}> Create coin </Text>
          </TouchableOpacity>
        </View>
      </View>

    
    </SafeAreaView>
  );
};

export default CreateCoin;
