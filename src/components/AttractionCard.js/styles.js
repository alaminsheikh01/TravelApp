const {StyleSheet, Dimensions} = require('react-native');

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: 10,
  },
  image: {
    width: (width - 96) / 2,
    height: 100,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 8,
    fontWeight: '300',
    marginBottom: 12,
    marginLeft: 6,
    color: 'rgba(0,0,0,0.5)',
  },
  imgIcon: {
    width: 12,
    height: 12,
    marginRight: 2,
    marginBottom: 5,
  },
  row: {
    marginBottom: 12,
    marginLeft: 6,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
