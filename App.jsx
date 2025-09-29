import React from 'react';
import { SafeAreaViewBase, StyleSheet, View } from 'react-native';
// import FlatListCompo from './src/component/FlatListCompo';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// import SectionListCompo from './src/component/SectionListCompo';
// import LoginPage from './src/component/LoginPage';
import ContactListscreen from './src/screen/contact/ContactListscreen.jsx';
import Grid from './src/component/Grid.jsx';
import TouchableOpaciety from './src/component/TouchableOpaciety.jsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* <FlatListCompo /> */}
        {/* <SectionListCompo/> */}
        {/* <LoginPage/> */}
        {/* <ContactListscreen/> */}
        {/* <Grid/> */}
        <TouchableOpaciety/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#8f9692ff',
  },
});

export default App;
