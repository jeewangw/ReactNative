import React, {Component} from 'react';
import { 
    StyleSheet, 
    View, Text,
    ActivityIndicator,
    StatusBar,
    AsyncStorage,
} from 'react-native';

import {
  createStackNavigator,  createAppContainer,  createBottomTabNavigator, createSwitchNavigator,
} from 'react-navigation'; 

import Screen1 from './app/components/screen1/Screen1';
import Screen2 from './app/components/screen2/Screen2';
import Screen3 from './app/components/screen3/Screen3';
import Screen4 from './app/components/screen4/Screen4';

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

const RootStack = createStackNavigator ({
          Screen4: { 
                screen: Screen4,
                navigationOptions: {
                    title: false,
                    header: null,
                }
            }
        });

const AuthStack = createStackNavigator ({Registration: Screen1});
class AuthLoadingScreen extends Component {
    constructor (props){
        super (props);
        this._loadData();
    }

    render(){
        return(
                <View style={styles.loading}>
                <ActivityIndicator />
                <StatusBar barstyle="default" />

                </View>
            );
    }


_loadData = async() => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App');
}

}


const TabNavigator = createBottomTabNavigator({
  Registration: Screen1,
  Login: Screen2,
});

const App = createAppContainer(StackNavigator);
//const TabApp= createAppContainer(TabNavigator);
//export default App;
const swtichingApp = createAppContainer(createSwitchNavigator(
                      {
                        AuthLoading: AuthLoadingScreen,
                        App: RootStack,
                        Auth: App,
                      },
                      {
                        initialRouteName: 'AuthLoading',
                      }
                    ));
export default swtichingApp;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});