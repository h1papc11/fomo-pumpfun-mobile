import { Ionicons } from '@expo/vector-icons'
import { useLoginWithEmail } from '@privy-io/expo'
import React, { useState } from 'react'
import {
  // KeyboardAvoidingView,
  // Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function SendOtpScreen() {
  const [email, setEmail] = useState('')
  const { sendCode } = useLoginWithEmail()

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // >
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Log in or sign up</Text>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialIcon}>
            <Ionicons name="logo-google" size={22} color="#fff" />
            {/* <Image source={require('../assets/icons/navbar/google.png')} style={styles.iconImg} /> */}
          </View>
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialIcon}>
            <Ionicons name="logo-apple" size={22} color="#fff" />
          </View>
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialIcon}>
            <Ionicons name="logo-twitter" size={22} color="#fff" />
          </View>
          <Text style={styles.socialText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialIcon}>
            <Ionicons name="wallet" size={22} color="#fff" />
          </View>
          <Text style={styles.socialText}>Continue with a wallet</Text>
          <Ionicons
            name="chevron-forward"
            size={18}
            color="#fff"
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.divider} />
        </View>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text
            onPress={async () => {
              await sendCode({ email })
              console.log('passed')
              // setCodeSent(true);
            }}
            style={styles.loginButtonText}
          >
            Log in
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}
        >
          <Text style={styles.privyProtection}>Protected by </Text>
          <Ionicons
            name="bulb"
            size={16}
            color="#fff"
            style={{ marginTop: 16, marginLeft: 4 }}
          />
          <Text
            style={[
              styles.privyProtection,
              { fontWeight: '600', fontSize: 16 },
            ]}
          >
            privy
          </Text>
        </View>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 14,
    backgroundColor: '#111',
  },
  socialIcon: {
    width: 28,
    alignItems: 'center',
    marginRight: 12,
  },
  iconImg: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  privyProtection: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#222',
  },
  orText: {
    color: '#aaa',
    marginHorizontal: 10,
    fontWeight: '600',
  },
  label: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 2,
  },
  input: {
    backgroundColor: '#181818',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 18,
  },
  loginButton: {
    backgroundColor: '#6EC1FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
