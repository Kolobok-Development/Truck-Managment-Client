import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec } from './actions/auth';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>{state.count}</Text>
       
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
