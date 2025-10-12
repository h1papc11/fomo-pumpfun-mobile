import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';

export function initGoogle() {
  GoogleSignin.configure({
    webClientId: Config.GOOGLE_WEB_CLIENT_ID, // from .env
    iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
  });
}

export async function googleLogin() {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}
