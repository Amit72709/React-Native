import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const TextInputss = () => {
  const [userName, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>TextInput</Text>
      <Text style={styles.output}>UserName: {userName}</Text>
      <TextInput
        style={styles.input}
        value={userName}
        placeholder="Enter Name"
        onChangeText={setName}
      />
      <Button title="Clear" onPress={() => setName('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  output: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
    height: 50, // <-- Ensure height is fixed
    borderColor: 'green',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10, // <-- Add padding to avoid text touching border
    textAlign: 'left', // Optional, default is 'left'
    textAlignVertical: 'center', // Helps on Android
  },
});

export default TextInputss;
