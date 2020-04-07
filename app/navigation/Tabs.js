import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useSafeArea } from 'react-native-safe-area-context';
import { Portal, FAB } from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';

import MyAppointments from 'app/screens/MyAppointments';
import Departments from 'app/screens/Departments';
import Patients from 'app/screens/Patients';
import Reports from 'app/screens/Reports';

import TabBar from 'app/components/tab-bar';

const isTablet = DeviceInfo.isTablet();
const Tab = isTablet
  ? createMaterialTopTabNavigator()
  : createMaterialBottomTabNavigator();

function Tabs() {
  const isFocused = useIsFocused();
  const safeArea = useSafeArea();
  let tabBarProps = {};

  if (isTablet) {
    tabBarProps = {
      tabBar: props => <TabBar {...props} />,
    };
  }

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        shifting={true}
        labeled={false}
        sceneAnimationEnabled={false}
        activeColor="#00aea2"
        inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: '#ffff' }}
        {...tabBarProps}>
        <Tab.Screen
          name="Appointments"
          component={MyAppointments}
          options={{
            tabBarIcon: 'calendar-clock',
          }}
        />

        <Tab.Screen
          name="Patients"
          component={Patients}
          options={{
            tabBarIcon: 'account-multiple',
          }}
        />
        <Tab.Screen
          name="Departments"
          component={Departments}
          options={{
            tabBarIcon: 'layers',
          }}
        />
        <Tab.Screen
          name="Reports"
          component={Reports}
          options={{
            tabBarIcon: 'book-open',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused} // show FAB only when this screen is focused
          icon="plus-box"
          label={isTablet ? 'Create new' : null}
          style={[
            styles.fab,
            {
              bottom: safeArea.bottom + 65,
            },
          ]}
        />
      </Portal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default Tabs;
