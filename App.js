import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

// Retorna as dimensões na tela
const { height, width } = Dimensions.get('window');

export default class App extends Component 
{
  state = {
    places: [
      {
        id: 1,
        title: 'Balada Mix',
        description: 'Barrashopping',
        latitude: -22.9992938,
        longitude: -43.3585351,
      },
      {
        id: 2,
        title: 'Valhalla Burguer',
        description: 'Melhor hamburguer',
        latitude: -22.9372898,
        longitude: -43.3295254
      },
      {
        id: 3,
        title: 'The Burguer Experience',
        description: 'Shopping Downtown',
        latitude: -23.0035708,
        longitude: -43.3173069
      }
    ]
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.state.places[0];

    return (
      <View style={ styles.container }>
        <MapView
          ref={ map => this.mapView = map }
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          rotateEnabled={ false }
          scrollEnabled={ false }
          zoomEnabled={ false }
          showsPointsOfInterest={ false }
          showBuildings={ false }
          style={ styles.mapView }
          onMapReady={ this._mapReady }
        >
        { this.state.places.map(place => (
          <MapView.Marker
            key={ place.id }
            ref={ mark => place.mark = mark }
            title={ place.title }
            description={ place.description }
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude
            }}
          />
        ))}
        </MapView>
        <ScrollView 
          style={ styles.placesContainer } 
          horizontal
          showsHorizontalScrollIndicator={ false }
          pagingEnabled
          onMomentumScrollEnd={e => {
            const scrolled = e.nativeEvent.contentOffset.x;

            const place = (scrolled > 0)
              ? scrolled / Dimensions.get('window').width
              : 0;

              const { latitude, longitude, mark } = this.state.places[place];

              this.mapView.animateToCoordinate({
                latitude, 
                longitude
              }, 1000);

              setTimeout(() => {
                mark.showCallout()
              }, 1000);
          }}
        >
          { this.state.places.map(place => (
            <View key={ place.id } style={ styles.place }>
              <Text>{ place.title }</Text>
              <Text>{ place.description }</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

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
    width: '100%',
    maxHeight: 200
  },
  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#fff',
    marginHorizontal: 20
  }
});
