import React from 'react';
import { SafeAreaViewBase, StyleSheet, View } from 'react-native';
// import FlatListCompo from './src/component/FlatListCompo';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SectionListCompo from './src/component/SectionListCompo';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* <FlatListCompo /> */}
        <SectionListCompo/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1ccc5dff',
  },
});

export default App;
