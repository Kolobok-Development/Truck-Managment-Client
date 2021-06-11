import React from 'react';
import { StyleSheet, View} from 'react-native';
import Login  from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Login />
      </View>
        
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
