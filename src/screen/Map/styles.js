const {StyleSheet, Dimensions} = require('react-native');

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    width: 50,
    height: 50,
  },
  map: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 20,
  },

  header: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    width: width - 48,
    margin: 24,
  },
});

export default styles;
