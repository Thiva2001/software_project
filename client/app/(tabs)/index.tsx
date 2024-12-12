import { ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginPage() {
  return (
    <ImageBackground
      source={require('@/assets/images/background1.jpg')}
      style={styles.backgroundImage}>
      <ThemedView style={styles.tileContainer}>
        <Image
          source={require('@/assets/images/Logo.jpg')}
          style={styles.reactLogo}
        />
        <ThemedText type="title" style={styles.title}>Login</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <ThemedText type="buttonText" style={styles.buttonText}>Login</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ThemedText style={styles.forgotPassword}>Forgot Password?</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  reactLogo: {
    height: 100,
    width: 100,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 48,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 14,
  },
});
