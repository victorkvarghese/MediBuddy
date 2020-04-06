/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2c3e50',
    accent: '#00aea2',
    background: '#f0f6f9',
    text: '#34495e',
  },
};

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
