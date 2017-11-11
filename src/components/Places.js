import React, { Component } from 'react';
import { ScrollView, Text, View, Dimensions, Image } from 'react-native';
import MapView from 'react-native-maps';

import styles from '../styles/Places';

// Retorna as dimensões na tela
const { height, width } = Dimensions.get('window');

export default class Places extends Component 
{
  _mapReady = () => {
    this.props.places[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.props.places[0];

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
        { this.props.places.map(place => (
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
          onMomentumScrollEnd={ e => {
            const scrolled = e.nativeEvent.contentOffset.x;

            const index = (scrolled > 0)
              ? scrolled / Dimensions.get('window').width
              : 0;

              const { latitude, longitude, mark } = this.props.places[index];

              this.mapView.animateToCoordinate({
                latitude, 
                longitude
              }, 1000);

              setTimeout(() => {
                mark.showCallout()
              }, 1000);
          }}
        >
        { this.props.places.map(place => (
          <View key={ place.id } style={ styles.place }>
            <View style={ styles.placeHeader }>
              <Image style={ styles.imageIcon } source={{ uri: place.icon }} />
              <Text style={ styles.textTitle }>{ place.title }</Text>
            </View>
            <Text>{ place.description }</Text>
          </View>
        ))}
        </ScrollView>
      </View>
    )
  }
}