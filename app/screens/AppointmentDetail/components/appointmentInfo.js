import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';

import Section from 'app/components/section-item';

function AppointmentInfo({ theme, appointment }) {
  const { colors } = theme;

  const isTablet = DeviceInfo.isTablet();
  return (
    <View style={{ marginTop: 24 }}>
      {isTablet && <Text style={styles.title}>Appointment Information</Text>}
      <Section
        name={appointment?.date}
        icon="calendar-blank-outline"
        color={colors.accent}
      />
      <Section
        name={`${appointment?.startTime}-${appointment?.endTime}`}
        icon="clock-outline"
        color={colors.accent}
      />
      <Section
        name={appointment?.tags[0]}
        icon="plus-box"
        color={colors.accent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  section: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 16 },
});

export default withTheme(AppointmentInfo);
