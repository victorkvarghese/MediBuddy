import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, withTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import ProfileCard from 'app/components/profile-card';
import Section from 'app/components/section-item';

const Detail = ({ title, value }) => (
  <View style={styles.detail}>
    <Text style={styles.heading}>{title} : </Text>
    <Text style={styles.value}>{' ' + value}</Text>
  </View>
);

function PatientInfo({ theme }) {
  const { colors } = theme;
  const selectedID = useSelector(state => state.appointmentReducer.selectedID);
  const appointments = useSelector(
    state => state.appointmentReducer.appointments,
  );
  const appointment = appointments.find(itx => itx.id === selectedID);

  return (
    <React.Fragment>
      <Text style={styles.title}>Patient Information</Text>
      <Card style={styles.card}>
        <React.Fragment>
          <ProfileCard
            name={appointment.name}
            avatar={appointment.avatar}
            disableRightBtn={true}
          />
          <View style={styles.content}>
            <Detail title="Date of Birth" value="02/14/1980" />
            <Detail title="Gender" value="Male" />
            <Detail title="Previous Visit" value="02/03/2020" />

            <Text style={[styles.title, styles.head]}>Contacts</Text>
            <Section
              name="+1-202-555-0194"
              icon="phone-outline"
              color={colors.accent}
            />
            <Section
              name="doughlas.schneider@gmail.com"
              icon="email-outline"
              color={colors.accent}
            />
            <Section
              name="615 CArter Roadus Suitr 286"
              icon="home-outline"
              color={colors.accent}
            />
          </View>
        </React.Fragment>
      </Card>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 4 },
  content: { padding: 16 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  head: { marginTop: 24 },
  detail: { flexDirection: 'row', marginVertical: 6 },
  heading: { color: 'grey', fontSize: 16 },
  value: { fontSize: 16 },
  documents: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default withTheme(PatientInfo);
