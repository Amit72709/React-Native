import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!user || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password');
      return;
    }

    try {
      const response = await axios.post(
        'https://reqres.in/api/login',
        {
          email: user,
          password: password,
        },

        {
          headers: {
            'x-api-key': 'reqres-free-v1', // <-- your API key here
          },
        },
      );

      Alert.alert('Success', 'Login successful!');
      console.log('Response:', response.data);

      setUser('');
      setPassword('');
    } catch (error) {
      if (error.response) {
        Alert.alert(
          'Login Failed',
          error.response.data.error || 'Invalid credentials',
        );
      } else {
        Alert.alert('Network Error', 'Please try again later.');
      }
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        value={user}
        placeholder="Enter email"
        onChangeText={setUser}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter password"
        onChangeText={setPassword}
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
