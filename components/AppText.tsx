import { StyleSheet, Text, type TextProps } from 'react-native';

import globalStyles from '@/constants/baseStyles';
import { fontFamily } from '@/constants/fonts';
import { useThemeColor } from '@/hooks/use-theme-color';

export type AppTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export default function AppText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: AppTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        globalStyles.baseText,
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: fontFamily[400]
  },
  defaultSemiBold: {
    fontSize: 16,
    fontFamily: fontFamily[600],
  },
  title: {
    fontSize: 32,
    fontFamily: fontFamily[700],
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fontFamily[700],
  },
  link: {
    fontSize: 16,
    color: '#0a7ea4',
  },
});
