import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, label } from 'react-native'; // Version can be specified in package.json
import { createBottomTabNavigator } from 'react-navigation';
import Navigation from './Components/Navigation.js';

/**
 * Zach Richardson
 * Ceg 4110
 */
export default class App extends React.Component {
  render() {
    return (
      <Navigation />
    );
  }
}
