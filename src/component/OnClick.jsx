import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Chiled from './Chiled';

const OnClick = () => {
  const [values, setValues] = useState(0);

  const increment = () => setValues(values + 1);
  const decrement = () => setValues(values - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`The value: ${values}`}</Text>
      
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button title="Increment" onPress={increment} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Decrement" onPress={decrement} />
        </View>
      </View>
      <Chiled data={values}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10, // ✅ works in React Native >= 0.71
  },
  buttonWrapper: {
    marginHorizontal: 5, // fallback for gap
  },
});

export default OnClick;
