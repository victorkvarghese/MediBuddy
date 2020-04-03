import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function MyAppointments() {
  const navigation = useNavigation();
  const onClick = () => navigation.navigate('AppointmentDetail');
  return (
    <View style={styles.container}>
      <Text>MyAppointments Mobile</Text>
      <Button icon="camera" mode="outlined" onPress={onClick}>
        Details
      </Button>
    </View>
  );
}
