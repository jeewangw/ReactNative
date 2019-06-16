import React from 'react';
import { 
    StyleSheet, 
    View, Text,
} from 'react-native';

import {
  createStackNavigator,  createAppContainer,
} from 'react-navigation'; 

import Screen1 from './app/components/screen1/Screen1';
import Screen2 from './app/components/screen2/Screen2';

const StackNavigator = createStackNavigator({
    Screen1: { 
        screen: Screen1,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen2: { 
        screen: Screen2,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
},{ headerMode: 'screen' });

const App = createAppContainer(StackNavigator);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});