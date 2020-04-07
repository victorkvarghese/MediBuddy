import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function profileCard({
  name,
  avatar,

  onSelected,
  disableRightBtn,
}) {
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
  return (
    <Card.Title
      title={name}
      subtitle="View profile"
      left={LeftContent}
      right={disableRightBtn ? null : RightContent}
      titleStyle={styles.cardTitle}
      subtitleStyle={styles.cardSub}
    />
  );
}

const styles = StyleSheet.create({
  cardTitle: { fontWeight: 'normal' },
  cardSub: { fontSize: 13, color: '#0097e8' },
});
