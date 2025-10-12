import Config from 'react-native-config';

export const ENV = {
  PRIVY_APP_ID: Config.NEXT_PUBLIC_PRIVY_APP_ID!,
  PRIVY_CLIENT_ID: Config.NEXT_PUBLIC_PRIVY_CLIENT_ID!,
  FIREBASE_CONFIG: JSON.parse(Config.NEXT_PUBLIC_FIREBASE_CONFIG || '{}'),
  TWITTER: {
    CLIENT_ID: Config.TWITTER_CLIENT_ID!,
    REDIRECT_URI: Config.TWITTER_REDIRECT_URI!,
    SCOPES: (Config.TWITTER_SCOPES || '').split(' ').filter(Boolean),
  },
};
