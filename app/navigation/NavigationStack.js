import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';

import { navigationRef } from './NavigationService';
import Login from 'app/screens/Login';
import AppointmentDetail from 'app/screens/AppointmentDetail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

function App() {
  const stackProps = DeviceInfo.isTablet() ? { headerMode: 'none' } : {};

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator {...stackProps}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
