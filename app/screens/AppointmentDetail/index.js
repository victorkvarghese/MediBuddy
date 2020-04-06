import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { withTheme } from 'react-native-paper';

import AppointmentInfo from './components/appointmentInfo';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function AppointmentDetail({ theme }) {
  const selectedID = useSelector(state => state.appointmentReducer.selectedID);

  const appointments = useSelector(
    state => state.appointmentReducer.appointments,
  );

  const appointment = appointments.find(itx => itx.id === selectedID);

  return (
    <SafeAreaView style={styles.container}>
      {selectedID !== -1 && (
        <View style={{ marginHorizontal: 10 }}>
          <AppointmentInfo theme={theme} appointment={appointment} />
        </View>
      )}
    </SafeAreaView>
  );
}

export default withTheme(AppointmentDetail);
