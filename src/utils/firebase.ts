import Config from 'react-native-config';
import { initializeApp, getApps } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = JSON.parse(Config.NEXT_PUBLIC_FIREBASE_CONFIG || '{}');

export function ensureFirebase() {
  if (!getApps().length) initializeApp(firebaseConfig);
  return auth();
}
