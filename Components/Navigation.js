import { createBottomTabNavigator } from 'react-navigation';

import ScreenOne from './Part1.js';
import ScreenTwo from './DrawPage.js';

export default createBottomTabNavigator({
  Part1: ScreenOne,
  Part2: ScreenTwo,
}


);
