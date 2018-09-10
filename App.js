import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, label } from 'react-native'; // Version can be specified in package.json
import ColorPage from './Components/Part1.js'
/**
 * Zach Richardson
 * Ceg 4110
 */
export default class App extends React.Component {

  render() {
    return (
      <ColorPage />
    );
  }
}
