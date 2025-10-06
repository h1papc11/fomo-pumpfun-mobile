import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";
import { colors } from "../../utils/colors";
import { SvgProps } from "react-native-svg";
import SearchIcon from '../../assets/icons/search.svg'

interface searchProps  {
  value: string;
  onChangeText: (t: string) => void;
};

const SearchBar: React.FC<searchProps> = ({ value, onChangeText }) => {
    let IconComponent: React.FC<SvgProps> | null = SearchIcon;


  return (
    <View style={styles.wrap}>
      <IconComponent width={15} height={15} color={colors.white} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search..."
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;
