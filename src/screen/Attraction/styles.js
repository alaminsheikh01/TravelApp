const {StyleSheet, Dimensions} = require('react-native');

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  imageStyles: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 38,
    height: 38,
    margin: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(256,256,256,0.35)',
    margin: 16,
    paddingHorizontal: 8,
  },
  minImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    margin: 8,
  },
  moreImage: {
    position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    top: 8,
    left: 8,
    fontSize: 24,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 40,
    height: 40,
    top: 8,
    left: 9,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    color: '#000',
  },
  city: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 8,
  },
});

export default styles;
