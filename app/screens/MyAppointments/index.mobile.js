import React from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import { Headline, Title } from 'react-native-paper';

import { useSelector } from 'react-redux';
import moment from 'moment';

import Item from './components/item';
import styles from './styles';

export default function MyAppointments() {
  const appointments = useSelector(
    state => state.appointmentReducer.appointments,
  );

  const localData = [...appointments];
  // Sort data by datetime
  localData.sort((a, b) => {
    return moment(a.date).unix() - moment(b.date).unix();
  });

  // Reduce data for SectionList
  const groupedData = localData.reduce(
    (
      accumulator,
      currentValue,
      currentIndex,
      array,
      key = currentValue.date,
    ) => {
      const keyObjectPosition = accumulator.findIndex(item => item.key == key);
      if (keyObjectPosition >= 0) {
        accumulator[keyObjectPosition].data.push(currentValue);
        return accumulator;
      } else {
        return accumulator.concat({ data: [currentValue], key: key });
      }
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.list}
        sections={groupedData}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { key } }) => <Title>{key}</Title>}
        ListHeaderComponent={() => (
          <Headline style={styles.headline}>My Appointments</Headline>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
