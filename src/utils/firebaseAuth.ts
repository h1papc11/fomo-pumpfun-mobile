import { ensureFirebase } from './firebase';

export async function signInWithEmailPassword(email: string, password: string) {
  const a = ensureFirebase();
  return a.signInWithEmailAndPassword(email.trim(), password);
}

export async function signUpWithEmailPassword(email: string, password: string) {
  const a = ensureFirebase();
  return a.createUserWithEmailAndPassword(email.trim(), password);
}

export async function signOutFirebase() {
  const a = ensureFirebase();
  return a.signOut();
}
