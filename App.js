import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image } from 'react-native';

import styles from './src/styles';
import Places from './src/components/Places';

export default class App extends Component 
{
  constructor(props) {
    super(props);

    this.state = {
      places: [
        {
          id: 1,
          title: 'Balada Mix',
          description: 'Barrashopping',
          latitude: -22.9992938,
          longitude: -43.3585351,
          icon: 'https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-9/15977753_1857028337844974_7739648665639193750_n.jpg?oh=cf3a4b03d5aa0371464d66591ab3ac57&oe=5A96C2AE'
        },
        {
          id: 2,
          title: 'Valhalla Burguer',
          description: 'Melhor hamburguer',
          latitude: -22.9372898,
          longitude: -43.3295254,
          icon: 'https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-9/15977753_1857028337844974_7739648665639193750_n.jpg?oh=cf3a4b03d5aa0371464d66591ab3ac57&oe=5A96C2AE'
        },
        {
          id: 3,
          title: 'The Burguer Experience',
          description: 'Shopping Downtown',
          latitude: -23.0035708,
          longitude: -43.3173069,
          icon: 'https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-9/15977753_1857028337844974_7739648665639193750_n.jpg?oh=cf3a4b03d5aa0371464d66591ab3ac57&oe=5A96C2AE'
        }
      ]
    };
  }

  render() {
    return (
        <Places places={ this.state.places } />
    );
  }
}
