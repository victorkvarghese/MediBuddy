import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f6f9',
  },
  list: { marginHorizontal: 20 },
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

export default styles;
