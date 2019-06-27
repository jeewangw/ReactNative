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
  createDrawNavigator,
} from 'react-navigation';

import { FontAwesome, Entypo } from '@expo/vector-icons';

import Screen1 from './app/components/screen1/Screen1';
import Screen2 from './app/components/screen2/Screen2';
import Screen3 from './app/components/screen3/Screen3';
import Screen4 from './app/components/screen4/Screen4';
import Screen5 from './app/components/screen5/Screen5';
import Screen6 from './app/components/screen6/Screen6';
import Screen8 from './app/components/screen8/Screen8';
import Screen9 from './app/components/screen9/Screen9';
import LocationChoose from './app/components/screen5/LocationChoose';
import FunPlaces from './app/components/screen5/FunPlaces';
import Map from './app/components/screen5/Map';
import ReligiousPlaces from './app/components/screen5/ReligiousPlaces';
import TrekkingPlaces from './app/components/screen5/TrekkingPlaces';
import EmbassyInfos from './app/components/screen9/EmbassyInfos';
import EmergencyNumbers from './app/components/screen9/EmergencyNumbers';
import Tabtop from './app/components/screen8/Tabtop';

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
       Screen6: {
        screen: Screen6,
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
          LocationChoose: {
                screen: LocationChoose,
                navigationOptions: {
                    title: false,
                    header: null,
                }
              },
                FunPlaces: {
                      screen: FunPlaces,
                      navigationOptions: {
                          title: false,
                          header: null,
                      }
                  },
                  ReligiousPlaces : {
                    screen : ReligiousPlaces,
                    navigationOptions: {
                      title: false,
                      header: null,
                    }
                  },
                  TrekkingPlaces : {
                    screen : TrekkingPlaces,
                    navigationOptions : {
                      title : false,
                      header : null,
                    }
                  },
                  Map : {
                    screen : Map,
                    navigationOptions: {
                      title: false,
                      headerStyle: {
                        backgroundColor: "#00ff00"
                      }
                    }
                  },
                },{ headerMode: 'screen' });


const MoneyStack = createStackNavigator ({
          Screen8: {
                screen: Screen8,
                navigationOptions: {
                    title: false,
                    header: null,
                }
            }
        });

const TabtopStack = createStackNavigator ({
          Tabtop: {
                screen: Tabtop,
                navigationOptions: {
                    title: false,
                    header: null,
                }
            }
        });

const MoreInfoStack = createStackNavigator({
        Screen9: {
              screen: Screen9,
              navigationOptions: {
                    title: false,
                    header:null,
              }
        },
        EmbassyInfos: {
              screen: EmbassyInfos,
              navigationOptions: {
                    title: false,
                    headerStyle: {
                      backgroundColor: "#00ff00" 
                    }
              }
        },
        EmergencyNumbers: {
          screen : EmergencyNumbers,
          navigationOptions: {
                title: false,
                headerStyle: {
                      backgroundColor: "#00ff00" 
                    }
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
MoneyStack.navigationOptions = {
  tabBarLabel: "Money",
  tabBarIcon: <FontAwesome
                name={"money"}
                size={30}
                color='black'
            />,
};

TabtopStack.navigationOptions = {
  tabBarLabel: "Utilities",
  tabBarIcon: <Entypo
                name={"tools"}
                size={30}
                color='black'
            />,
};

MoreInfoStack.navigationOptions = {
  tabBarLabel: "MoreInfo",
  tabBarIcon: <FontAwesome
                name={"info-circle"}
                size={30}
                color='black'
            />,
}


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
  Map: MapStack,
  Utilities: TabtopStack,
  MoreInfo: MoreInfoStack,
  Logout: LogoutStack

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
