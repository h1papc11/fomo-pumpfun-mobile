import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../../utils/colors';

type Props = {
  tabs: any[];
  activeIndex: number;
  onChange: (i: number) => void;
  customStyle?: object;
  activityTabButton?: object;
};

const ChipTabs: React.FC<Props> = ({
  tabs,
  activeIndex,
  onChange,
  customStyle,
  activityTabButton,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((t, i) => {
          const active = i === activeIndex;
          return (
            <TouchableOpacity
              key={t + i}
              onPress={() => onChange(i)}
              style={[
                styles.chip,
                activityTabButton,
                active && styles.chipActive,
              ]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {t}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 16,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 22,
    backgroundColor: colors.chip,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  chipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accentBorder,
    borderWidth: 1,
  },
  chipText: { color: colors.textSecondary, fontSize: 12 },
  chipTextActive: { color: colors.textPrimary, fontWeight: '600' },
});

export default ChipTabs;
