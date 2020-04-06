import React from 'react';
import { View, SafeAreaView, SectionList } from 'react-native';
import {
  Avatar,
  Button,
  Headline,
  Card,
  Divider,
  IconButton,
  Title,
  Text,
} from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

import { random_rgba } from 'app/utils/random_rgba';
import styles from './styles';

import * as appointmentActions from 'app/actions/appointmentActions';

const Item = ({ item }) => {
  const { id, name, startTime, endTime, tags, avatar } = item;
  const navigation = useNavigation();
  const isTablet = DeviceInfo.isTablet();
  const LeftContent = props => (
    <Avatar.Image
      {...props}
      source={{
        uri: avatar,
      }}
    />
  );
  const RightContent = props => (
    <IconButton
      icon="arrow-right"
      color="#0097e8"
      size={20}
      onPress={onSelected}
      style={{ marginBottom: 24 }}
    />
  );

  const dispatch = useDispatch();
  const onSelected = () => {
    dispatch(appointmentActions.appointmentSelected(id));
    if (!isTablet) {
      navigation.navigate('AppointmentDetail');
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Title
        title={name}
        subtitle="View profile"
        left={LeftContent}
        right={RightContent}
        titleStyle={styles.cardTitle}
        subtitleStyle={styles.cardSub}
      />
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

export default function MyAppointments() {
  const appointments = useSelector(
    state => state.appointmentReducer.appointments,
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.list}
        sections={appointments}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { title } }) => <Title>{title}</Title>}
        ListHeaderComponent={() => (
          <Headline style={{ marginVertical: 12 }}>My Appointments</Headline>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
