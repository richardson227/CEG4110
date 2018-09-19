import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ScreenOne from './Part1.js';
import ScreenTwo from './DrawPage.js';

//Creates a bottom navigation tab to switch between the two screens
export default createBottomTabNavigator({
  Part1: ScreenOne,
  Part2: ScreenTwo,
},
{
tabBarOptions:{
  labelStyle: {
  fontSize: 20,
},
}}

);
