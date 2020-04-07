import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

function SectionItem({ icon, name, color }) {
  return (
    <View style={styles.section}>
      <IconButton icon={icon} color={color} size={20} onPress={() => {}} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 16 },
});

export default SectionItem;
