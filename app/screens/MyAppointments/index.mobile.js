import React, { useState } from 'react';
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

import { DATA } from './fake_data';
import styles from './styles';

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
  const [selectedIndex, setSelectedIndex] = useState(0);
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
