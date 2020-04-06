import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton, withTheme } from 'react-native-paper';

const Section = ({ icon, name, color }) => (
  <View style={styles.section}>
    <IconButton icon={icon} color={color} size={22} onPress={() => {}} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

function AppointmentInfo({ theme, appointment }) {
  const { colors } = theme;

  return (
    <React.Fragment>
      <Text style={styles.title}>Appointment Information</Text>
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
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
    marginTop: 24,
  },
  section: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 16 },
});

export default withTheme(AppointmentInfo);
