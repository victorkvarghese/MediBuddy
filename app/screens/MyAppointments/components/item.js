import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Divider, Text } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

import { random_rgba } from 'app/utils/random_rgba';
import ProfileCard from 'app/components/profile-card';

import * as appointmentActions from 'app/actions/appointmentActions';

const Item = ({ item }) => {
  const { id, name, startTime, endTime, tags, avatar } = item;
  const navigation = useNavigation();
  const isTablet = DeviceInfo.isTablet();

  const dispatch = useDispatch();
  const onSelected = () => {
    dispatch(appointmentActions.appointmentSelected(id));
    if (!isTablet) {
      navigation.navigate('AppointmentDetail');
    }
  };

  return (
    <Card style={styles.card}>
      <ProfileCard name={name} avatar={avatar} onSelected={onSelected} />
      <Card.Content>
        <Divider />
        <Text style={styles.duration}>
          {startTime} - {endTime}
        </Text>
        <View style={styles.tags}>
          {tags.map((itx, i) => {
            const { labelColor, buttonColor } = random_rgba();
            return (
              <Button
                key={i}
                mode="contained"
                disabled
                compact
                uppercase={false}
                style={[styles.tag, { backgroundColor: buttonColor }]}
                labelStyle={[styles.tagLabel, { color: labelColor }]}>
                {itx}
              </Button>
            );
          })}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { marginVertical: 12, borderRadius: 4 },
  cardTitle: { fontWeight: 'normal' },
  cardSub: { fontSize: 13, color: '#0097e8' },
  duration: { fontSize: 16, marginVertical: 16 },
  tags: { flexDirection: 'row' },
  tag: {
    marginRight: 4,
    borderRadius: 4,
  },
  tagLabel: { fontSize: 12 },
});

export default Item;
