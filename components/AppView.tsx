import { View, type ViewProps } from 'react-native';


export type AppViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function AppView({ style, lightColor, darkColor, ...otherProps }: AppViewProps) {

  return <View style={[style]} {...otherProps} />;
}
