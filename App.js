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

import { FontAwesome } from '@expo/vector-icons';

import Screen1 from './app/components/screen1/Screen1';
import Screen2 from './app/components/screen2/Screen2';
import Screen3 from './app/components/screen3/Screen3';
import Screen4 from './app/components/screen4/Screen4';
import Screen5 from './app/components/screen5/Screen5';

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

const LogoutStack = createStackNavigator ({
          Screen3: { 
                screen: Screen3,
                navigationOptions: {
                    title: false,
                    header: null,
                }
            }
        });

const MapStack = createStackNavigator ({
          Screen5: { 
                screen: Screen5,
                navigationOptions: {
                    title: false,
                    header: null,
                }
            }
        });

RootStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: <FontAwesome 
                name={"home"}
                size={30}
                color='black'
            />,
};

LogoutStack.navigationOptions = {
  tabBarLabel: "Logout",
  tabBarIcon: <FontAwesome 
                name={"unlock-alt"}
                size={30}
                color='black'
            />,
};
MapStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: <FontAwesome 
                name={"map"}
                size={30}
                color='black'
            />,
};

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
  Home: RootStack,
  Map:MapStack,
  Logout: LogoutStack,
});

const App = createAppContainer(StackNavigator);
const TabApp= createAppContainer(TabNavigator);
const swtichingApp = createAppContainer(createSwitchNavigator(
                      {
                        AuthLoading: AuthLoadingScreen,
                        App: TabApp,
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