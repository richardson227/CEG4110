import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import DrawRN from 'rn-draw';
const {height, width} = Dimensions.get('window');

/**
This class features a canvas, color picker, and option bar
A scrollable color picker allows you to navigate the color selection
A canvas allows you to draw using the selected colorPicker
An option bar at the top allows for clearing, undoing, and saving
**/
export default class DrawPage extends React.Component {
  constructor(props) {
    super(props);
    //State consists of drawing color
    this.state = {
      color: '#000000'
    };
  }

//Call this method to save the image to the phone
  _save(){
    Alert.alert("Picture Saved!");
  }

  render() {
    return (
      <View style={styles.container}>
      <View style = {styles.optionButtons}>
        //Undo Button Component
        <Button
        buttonStyle={styles.undoButton}
        onPress={() => {
        this._undo && this._undo()
        }}
        title="Undo"
        />
        //Clear Button Component
        <Button
        buttonStyle={styles.clearButton}
        onPress={() => {
        this._clear && this._clear()
        }}
        title="Clear"
        />
        //Save Button Component
        <Button
        buttonStyle={styles.saveButton}
        onPress={() => {
        this._save()
        }}
        title="Save"
        />
      </View>
      <View style={styles.drawCanvas}>
        //Canvas drawing component
        <DrawRN
          strokes={[]}
          containerStyle={{ backgroundColor: 'white' }}
          rewind={undo => {
            this._undo = undo;
          }}
          clear={clear => {
            this._clear = clear;
          }}
          {/* Stroke color is determined by the state */}
          color={this.state.color}
          strokeWidth={8}
          onChangeStrokes={strokes => console.log(strokes)}
        />
      </View>
        <View style={styles.colorPicker}>
          //Scrollable color picker
          <ScrollView horizontal={true} style={styles.colorScroll}>
            //Black color button
            <Button
              buttonStyle={styles.blackButton}
              onPress={() => {
                this.setState({ color: 'black' });
              }}
            />
            //Red color button
            <Button
              buttonStyle={styles.redButton}
              onPress={() => {
              this.setState({ color: 'red' });
              }}
            />
            //Orange color button
            <Button
              buttonStyle={styles.orangeButton}
              onPress={() => {
                this.setState({ color: 'orange' });
              }}
            />
            //Yellow Button
            <Button
              buttonStyle={styles.yellowButton}
              onPress={() => {
                this.setState({ color: 'yellow' });
              }}
            />
            //Green Button
            <Button
              buttonStyle={styles.greenButton}
              onPress={() => {
                this.setState({ color: 'green' });
              }}
            />
            //Blue Button
            <Button
              buttonStyle={styles.blueButton}
              onPress={() => {
                this.setState({ color: 'blue' });
              }}
            />
            //Indigo Button
            <Button
              buttonStyle={styles.indigoButton}
              onPress={() => {
                this.setState({ color: 'indigo' });
              }}
            />
            //Violet Button
            <Button
              buttonStyle={styles.violetButton}
              onPress={() => {
                this.setState({ color: 'violet' });
              }}
            />
          </ScrollView>
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  optionButtons: {
    marginTop: height*.025,
    height: height*.05,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'space-between'
  },
  drawCanvas: {
    height: height*.7,
  },
  colorPicker: {
    backgroundColor: '#eff2f7',
    height: height*.1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderTopWidth: 1,
    marginTop: 1
  },
  undoButton: {
    backgroundColor: 'grey'
  },
  clearButton: {
    backgroundColor: 'grey'
  },
  saveButton: {
    backgroundColor: 'grey'
  },
  blackButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  redButton: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  orangeButton: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  yellowButton: {
    backgroundColor: 'yellow',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  greenButton: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  blueButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  indigoButton: {
    backgroundColor: 'indigo',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
  violetButton: {
    backgroundColor: 'violet',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
});
