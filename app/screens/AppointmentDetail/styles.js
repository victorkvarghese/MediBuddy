import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
  },
  documents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  docView: {
    width: 100,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  head: { marginTop: 24 },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  cancel: { color: '#f7646e' },
  ok: { color: '#0097e8' },
});

export default styles;
