import { StyleSheet, Dimensions } from 'react-native';

// Retorna as dimensões na tela
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  placesContainer: {
    flex: 1,
    width: '100%',
    maxHeight: 200
  },
  place: {
    width: width - 40,
    maxHeight: 190,
    margin: 10,
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    padding: 20
  },
  placeHeader: {
    flexDirection: 'row',
    marginBottom: 20
  },
  imageIcon: {
    width: 70,
    height: 70,
    marginRight: 10
  },
  textTitle: {
    fontSize: 20,
  },

  viewPager: {
    flex: 1,
  },
  pageStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 10
  }
});

export default styles;