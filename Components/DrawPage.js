import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DrawRN from 'rn-draw';

export default class DrawPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#000000'
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.drawCanvas}>
        <DrawRN
          strokes={[]}
          containerStyle={{ backgroundColor: 'white' }}
          rewind={undo => {
            this._undo = undo;
          }}
          clear={clear => {
            this._clear = clear;
          }}
          color={this.state.color}
          strokeWidth={8}
          onChangeStrokes={strokes => console.log(strokes)}
        />
      </View>
        <View style={styles.colorPicker}>
          <ScrollView horizontal={true} style={styles.colorScroll}>
          <Button
            buttonStyle={styles.blackButton}
            onPress={() => {
              this.setState({ color: 'black' });
            }}
          />
            <Button
              buttonStyle={styles.redButton}
              onPress={() => {
                this.setState({ color: 'red' });
              }}
            />
            <Button
              buttonStyle={styles.orangeButton}
              onPress={() => {
                this.setState({ color: 'orange' });
              }}
            />
            <Button
              buttonStyle={styles.yellowButton}
              onPress={() => {
                this.setState({ color: 'yellow' });
              }}
            />
            <Button
              buttonStyle={styles.greenButton}
              onPress={() => {
                this.setState({ color: 'green' });
              }}
            />
            <Button
              buttonStyle={styles.blueButton}
              onPress={() => {
                this.setState({ color: 'blue' });
              }}
            />
            <Button
              buttonStyle={styles.indigoButton}
              onPress={() => {
                this.setState({ color: 'indigo' });
              }}
            />
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
    flexDirection: 'column',
  },
  drawCanvas: {
    height: '90%',
  },
  colorPicker: {
    backgroundColor: '#eff2f7',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderTopWidth: 1
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