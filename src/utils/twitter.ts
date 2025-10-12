import {
  authorize,
  refresh,
  AuthorizeResult,
  RefreshResult,
} from 'react-native-app-auth';
import Config from 'react-native-config';

const serviceConfiguration = {
  authorizationEndpoint: 'https://twitter.com/i/oauth2/authorize',
  tokenEndpoint: 'https://api.twitter.com/2/oauth2/token',
  revocationEndpoint: 'https://api.twitter.com/2/oauth2/revoke',
};

const baseConfig = {
  clientId: Config.TWITTER_CLIENT_ID!,
  redirectUrl: Config.TWITTER_REDIRECT_URI!,
  scopes: (Config.TWITTER_SCOPES || '').split(' ').filter(Boolean),
  serviceConfiguration,
  usePKCE: true,
  dangerouslyAllowInsecureHttpRequests: false,
};

export async function twitterLogin(): Promise<AuthorizeResult> {
  // opens system browser, returns { accessToken, refreshToken, idToken?, tokenAdditionalParameters, ... }
  return authorize(baseConfig);
}

export async function twitterRefreshToken(
  refreshToken: string,
): Promise<RefreshResult> {
  return refresh({ ...baseConfig, refreshToken });
}
