import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'; // Version can be specified in package.json

/**
 * Zach Richardson
 * Ceg 4110
 */
export default class ColorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textOutput: 'Tap to change color',
      color: '#000000',
    };
  }

  changeColor = () => {
    var newColor =
      '#' +
      Math.random()
        .toString(16)
        .substr(-6);
    this.setState({color: newColor });
  };

  /**
  Referenced this resource:
  https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  **/
  rgbValues = () => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      this.state.color
    );
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{ color: this.state.color, fontSize: 30}}
        onChangeText={(textOutput) => {
          this.setState({textOutput})}}
        value={this.state.textOutput}
      />
        <Text
          style={{ fontSize: 20, marginBottom: 5 }}>
          {this.state.color}
        </Text>
        <Text style={{ fontSize: 15, marginBottom: 20 }}>
          R:{this.rgbValues().r} G:{this.rgbValues().g} B:{this.rgbValues().b}
        </Text>
        <Button onPress={this.changeColor} title="Change Color" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
