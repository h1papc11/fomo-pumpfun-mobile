import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import BottomSheet from '../../../components/BottomSheet';
import styles from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import ChipTabs from '../../../components/ChipTabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { Icons } from '../../../utils/icons';

const TABS = ['New', 'About To Graduate', 'Graduate', 'Featured'];

const segment = ['Metrics', 'Audit', 'Socials'];
interface ChatSettingsProps {
  visible: boolean;
  onClose: () => void;
  didAddClick?: () => void;
}

const Metrics = () => {
  const [_name, setName] = useState('');

  return (
    <>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Bonding Curve%"
          placeholder="Min %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Vol"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Market Cap"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Transactions"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Transactions"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Total Transactions"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
    </>
  );
};
const Audit = () => {
  const [_name, setName] = useState('');

  return (
    <>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Holders"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Age (mins)"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Top 10 holders %"
          placeholder="Min %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Dev Holdings %"
          placeholder="Min %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Snipers Owned %"
          placeholder="Min %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max %"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
    </>
  );
};
const Socials = () => {
  const [_name, setName] = useState('');

  return (
    <>
      <View style={styles.socialBox}>
        <Text style={styles.socialTitle}>Twitter</Text>
        <TouchableOpacity>
          <Image source={Icons.switch} style={styles.switch} />
        </TouchableOpacity>
      </View>
      <View style={styles.socialBox}>
        <Text style={styles.socialTitle}>Website</Text>
        <TouchableOpacity>
          <Image source={Icons.switch} style={styles.switch} />
        </TouchableOpacity>
      </View>
      <View style={styles.socialBox}>
        <Text style={styles.socialTitle}>Telegram</Text>
        <TouchableOpacity>
          <Image source={Icons.switch} style={styles.switch} />
        </TouchableOpacity>
      </View>
      <View style={styles.socialBox}>
        <Text style={styles.socialTitle}>At least one social</Text>
        <TouchableOpacity>
          <Image source={Icons.switch} style={styles.switch} />
        </TouchableOpacity>
      </View>
      <View style={styles.doubleBox}>
        <CustomTextInput
          title="Twitter reuses"
          placeholder="Min"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          keyboardType="number-pad"
        />
        <CustomTextInput
          placeholder="Max"
          onChangeText={setName}
          customStyle={styles.customTextBox}
          isHideTitle={true}
          keyboardType="number-pad"
        />
      </View>
    </>
  );
};

const Filter: React.FC<ChatSettingsProps> = ({ visible, onClose }) => {
  const [_name, setName] = useState<string>('');
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [selectedSegment, setSelectedSegment] = useState<string>(segment[0]);

  const handleAdd = () => {
    onClose();
  };
  return (
    <BottomSheet
      visible={visible}
      onClose={onClose}
      title="Filter"
      height={'90%'}
      headerRight={
        <TouchableOpacity onPress={onClose}>
          <Entypo name={'cross'} size={20} color="#fff" />
        </TouchableOpacity>
      }
    >
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <ChipTabs tabs={TABS} activeIndex={tabIndex} onChange={setTabIndex} />
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollBox}
          >
            <CustomTextInput
              title="Search Keywords"
              placeholder="Keyword1, Keyword2, Keyword3"
              onChangeText={setName}
            />
            <CustomTextInput
              title="Exclude Keywords"
              placeholder="Keyword1, Keyword2, Keyword3"
              onChangeText={setName}
            />
            <View style={styles.segmentView}>
              {segment.map(item => {
                const active = item === selectedSegment;

                return (
                  <TouchableOpacity
                    style={[
                      styles.segmentBtn,
                      active && styles.selectedSegment,
                    ]}
                    onPress={() => setSelectedSegment(item)}
                  >
                    <Text
                      style={[
                        styles.segmentText,
                        active && styles.selectedText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {selectedSegment === 'Metrics' && <Metrics />}
            {selectedSegment === 'Audit' && <Audit />}
            {selectedSegment === 'Socials' && <Socials />}
          </ScrollView>
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleAdd}>
              <Text style={styles.depositButtonText}> Clear </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.depositButton} onPress={handleAdd}>
              <Text style={styles.depositButtonText}> Apply </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </BottomSheet>
  );
};

export default Filter;
