const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 32,
  },
  backContainer: {
    position: 'absolute',
    margin: 40,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
});

export default styles;
