import * as React from 'react';
import { Text } from 'react-native'; // Version can be specified in package.json
import { createBottomTabNavigator } from 'react-navigation';
import Navigation from './Components/Navigation.js';

/**
 * Zach Richardson
 This app allows for color randomisation and drawing
 The first tab allows for the generation of a random color code and the corresponding RGB values
 The second tab uses a canvas and color pallette to create a simple drawing application
 */
export default class App extends React.Component {
  render() {
    return (
      <Navigation />
    );
  }
}
