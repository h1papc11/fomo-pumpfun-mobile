import { usePrivy, useLoginWithEmail } from '@privy-io/expo';

// Hook style usage inside components:
export function usePrivyAuth() {
  const { user } = usePrivy();
  const { sendCode, loginWithCode } = useLoginWithEmail();

  return {
    user,
    sendCode,
    loginWithCode,
  };
}
