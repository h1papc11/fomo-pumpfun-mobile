import { KeyboardType, Text, TextInput, View } from 'react-native';
import styles from './styles';
import { colors } from '../../utils/colors';

type TextBoxProps = {
  title?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  customStyle?: object;
  isHideTitle?: boolean;
  keyboardType?: KeyboardType;
};
const CustomTextInput: React.FC<TextBoxProps> = ({
  title,
  placeholder,
  multiline,
  customStyle,
  onChangeText,
  isHideTitle = false,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.content}>
      {!isHideTitle && <Text style={styles.title}>{title}</Text>}
      <TextInput
        style={[styles.textBox, customStyle]}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={colors.lightGray}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomTextInput;
