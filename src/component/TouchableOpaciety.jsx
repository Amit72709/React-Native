import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,Alert
} from 'react-native';
import React from 'react';

const TouchableOpaciety = () => {
  return (
    <View>
      <Text>TouchableOpaciety</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text>Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
      style={styles.heilight}
        activeOpacity={0.6}
        underlayColor="#e6f3a1ff"
        onPress={() => Alert.alert('Pressed!')}
      >
      <Text>Helight</Text>
      </TouchableHighlight>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#a2ecc4ff',
    padding: 10,
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:10,
    marginHorizontal:10
  },
  heilight: {
    alignItems: 'center',
    backgroundColor: '#f49f9fff',
    padding: 10,
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:10,
    marginHorizontal:10
  },
});
export default TouchableOpaciety;
