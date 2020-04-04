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

import { useNavigation } from '@react-navigation/native';

import { random_rgba } from 'app/utils/random_rgba';
import { random_sex } from 'app/utils/random_sex';

import styles from './styles';

const DATA = [
  {
    title: 'Today, March 4',
    data: [
      {
        id: 1,
        name: 'Douglas Schneider',
        sex: 'M',
        startTime: '10:30 AM',
        endTime: '10:30 AM',
        tags: ['Office visit', 'Urgent'],
      },
      {
        id: 3,
        name: 'Rhoda Underwood',
        sex: 'F',
        startTime: '11:00 AM',
        endTime: '12:00 AM',
        tags: ['Video Consultation'],
      },
    ],
  },
  {
    title: 'March 5',
    data: [
      {
        id: 4,
        name: 'Jeremey Mclaughlin',
        sex: 'M',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        tags: ['Home visit', 'Follow-up'],
      },
      {
        id: 5,
        name: 'Barbara Wade',
        sex: 'F',
        startTime: '11:00 AM',
        endTime: '13:00 AM',
        tags: ['Office-visit', 'Check-up'],
      },

      {
        id: 6,
        name: 'Douglas Schneider',
        sex: 'M',
        startTime: '10:30 AM',
        endTime: '10:30 AM',
        tags: ['Office visit', 'Urgent'],
      },
      {
        id: 7,
        name: 'Rhoda Underwood',
        sex: 'F',
        startTime: '11:00 AM',
        endTime: '12:00 AM',
        tags: ['Video Consultation'],
      },
    ],
  },
];

const Item = ({ item }) => {
  const { name, startTime, endTime, tags, sex } = item;

  /**
   * Condtional based on tab or mobile
   */
  const navigation = useNavigation();
  const onNavigate = () => navigation.navigate('AppointmentDetail');

  const LeftContent = props => (
    <Avatar.Image
      {...props}
      source={{
        uri: random_sex(sex),
      }}
    />
  );
  const RightContent = props => (
    <IconButton
      icon="arrow-right"
      color="#0097e8"
      size={20}
      onPress={onNavigate}
      style={{ marginBottom: 24 }}
    />
  );

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
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.list}
        sections={DATA}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { title } }) => <Title>{title}</Title>}
        ListHeaderComponent={() => (
          <Headline style={{ marginVertical: 8 }}>My Appointments</Headline>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
