import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, IconButton, withTheme } from 'react-native-paper';

import styles from './styles';

function AppointmentDetail({ theme }) {
  const selectedID = useSelector(state => state.appointmentReducer.selectedID);

  const { colors } = theme;

  const Section = ({ icon, name }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <IconButton
        icon={icon}
        color={colors.accent}
        size={22}
        onPress={() => {}}
      />
      <Text style={{ fontSize: 16 }}>{name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 18, fontWeight: 'bold', margin: 8, marginTop: 16 }}>
        Appointment Information
      </Text>
      <Section name="11/18/2020" icon="calendar-blank-outline" />
      <Section name="10:00 AM - 10:30 AM" icon="clock-outline" />
      <Section name="Office visit" icon="plus-box" />
    </View>
  );
}

export default withTheme(AppointmentDetail);
