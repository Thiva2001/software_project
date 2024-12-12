import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginPage({ navigation }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Login</ThemedText>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <ThemedText style={styles.linkText}>Don't have an account? Register</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 24, marginBottom: 16 },
  input: { width: '80%', height: 48, borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
  button: { width: '80%', height: 48, backgroundColor: '#007BFF', justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  buttonText: { color: '#fff' },
  linkText: { color: '#007BFF', marginTop: 16 },
});
