import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Text, Divider, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AppointmentInfo from './components/appointmentInfo';
import PatientInfo from './components/patientInfo';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const DocIcon = ({ icon, name, type, fileSize }) => {
  let background, iconColor;
  if (type === 'image') {
    iconColor = 'rgba(255,183,104,1)';
    background = 'rgba(255,183,104,0.1)';
  } else {
    iconColor = 'rgba(19,69,149,1)';
    background = 'rgba(19,69,149,0.1)';
  }

  return (
    <View style={[styles.docView, { backgroundColor: background }]}>
      <Icon name={icon} size={50} color={iconColor} />
      <Text style={{ marginTop: 12, color: iconColor }}>{name}</Text>
      <Text style={{ color: iconColor }}>{fileSize}</Text>
    </View>
  );
};

const Footer = () => (
  <SafeAreaView>
    <Divider />
    <View style={styles.footer}>
      <View style={{ flex: 1 }}>
        <Button
          style={styles.btn}
          labelStyle={styles.cancel}
          mode="text"
          onPress={() => console.log('Pressed')}>
          Cancel
        </Button>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          style={styles.btn}
          labelStyle={styles.ok}
          mode="text"
          onPress={() => console.log('Pressed')}>
          Reschedule
        </Button>
      </View>
    </View>
  </SafeAreaView>
);

function AppointmentDetail({ theme }) {
  const selectedID = useSelector(state => state.appointmentReducer.selectedID);

  const appointments = useSelector(
    state => state.appointmentReducer.appointments,
  );

  const appointment = appointments.find(itx => itx.id === selectedID);

  return (
    <View forceInset={{ top: 'never' }} style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 24 }}>
          {selectedID !== -1 && (
            <React.Fragment>
              <AppointmentInfo theme={theme} appointment={appointment} />
              <PatientInfo />
              <Text style={[styles.title, styles.head]}>Recent Documents</Text>

              <View style={styles.documents}>
                <DocIcon
                  name="Chest X-ray"
                  fileSize="1.7 MB"
                  icon="image"
                  type="image"
                />
                <DocIcon
                  name="Blood Test"
                  fileSize="1.4 MB"
                  icon="picture-as-pdf"
                  type="PDF"
                />
                <DocIcon
                  name="Lab results"
                  fileSize="1.2 MB"
                  icon="picture-as-pdf"
                  type="PDF"
                />
              </View>
            </React.Fragment>
          )}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

export default withTheme(AppointmentDetail);
