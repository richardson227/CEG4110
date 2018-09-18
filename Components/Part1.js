import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'; // Version can be specified in package.json

/**
 * Zach Richardson
 * Ceg 4110
 This class allows the user to generate a hex number values
 This value will be displayed on a modifyable text output on the screen
 The RGB values of the specified hex color will be displayed as well
 */
export default class ColorPage extends React.Component {

  constructor(props) {
    super(props);
    //State of the class consists of the text output and the color
    this.state = {
      textOutput: 'Tap to change color',
      color: '#000000',
    };
  }

  //This function will generate a random color and set state
  changeColor = () => {
    //generate hex color code
    var newColor =
      '#' + Math.random().toString(16).substr(-6);
    //Set the color in the state to the new value
    this.setState({color: newColor });
  };

  /**
  Referenced this resource:
  https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  for hex to rgb conversion
  **/
  rgbValues = () => {
    //Convert the hex value to an rgb value
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      this.state.color
    );
    return result
      ? {
          //Parses the resulting value into its 3 color components
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  render() {
    return (
      <View style={styles.container}>
      //Changeable text value that adjusts color based on state
      <TextInput
        style={{ color: this.state.color, fontSize: 30}}
        onChangeText={(textOutput) => {
          this.setState({textOutput})}}
        value={this.state.textOutput}
      />
        //States color hex value
        <Text
          style={{ fontSize: 20, marginBottom: 5 }}>
          {this.state.color}
        </Text>
        //States RGB values
        <Text style={{ fontSize: 15, marginBottom: 20 }}>
          R:{this.rgbValues().r} G:{this.rgbValues().g} B:{this.rgbValues().b}
        </Text>
        //Button that will change the hex color code on press
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
