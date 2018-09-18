This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

# Overview
This project was written in javascript with a React Native Framework.
The goal of this project was to create a simple 2 tab app that includes the following functionalities:
1. A random color generator screen - This page features one button, one editable text field, and regular text field. Upon press of the button, the hex code will generate a new random value. The color of the editable text field will change to the corresponding color, and the regular text field will display the new hex code and the RGB values of the color.
2. A simple drawing application. This page features a toolbar containing 3 buttons, a drawing canvas, and a scrollable color picker. The toolbar holds buttons for undoing a stroke, clearing the canvas, and saving the picture to the device. The canvas allows the user to draw using the selected color. The color picker is a scrollable selection of the 7 ROYGBIV color values, pressing the color will change the color of the new strokes to that selection.

## Usage Instructions
Inside the "Bin" directory is an APK file that can be run on an android device. Just move this APK file to the device and open it. This will launch the application.

## Operation Instructions
Some Stuff Here

## Design Choices
I decided to do this app in React Native because the community has a diverse library of options for components that allow for an app to be made effeciently, in a simple manner. Discussed below are a few of the design choices I decided to make within the app

### Bottom Tab Navigation
I decided that a bottom tab navigation option would make the most sense. The other options were drawer navigation or a button that navigates to another page. A drawer navigation system makes more sense for a large number of page options, but this project only uses consists of 2 pages, so that would not be ideal. Also a button leading to another page doesn't make good design sense due to the two pages not sharing any similarities or capabilities. 

## Color Picker
The design of the color picker is a side scrolling selection of color swatches. This design decision was made because it would be difficult to display all of the color options on the same page without some way of navigating through them. It would become much too cluttered and take away from the aesthetics of the page. 
