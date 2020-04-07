import React from 'react';
import { View } from 'react-native';

import MyAppointments from './index.mobile';
import AppointmentDetail from 'app/screens/AppointmentDetail';
import Calendar from 'app/screens/Calendar';

export default function Appointments({ navigation }) {
  const onClick = () => navigation.navigate('AppointmentDetail');
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1.2 }}>
        <MyAppointments />
      </View>
      <View style={{ flex: 1.2 }}>
        <AppointmentDetail />
      </View>
      <View style={{ flex: 2 }}>
        <Calendar />
      </View>
    </View>
  );
}
