/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
import RouteContainer from './src/routes';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#171725"
        barStyle="light-content"
        translucent={true}
      />
      <RouteContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171725',
  },
});

export default App;
