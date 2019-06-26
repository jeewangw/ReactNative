import React from 'react';
import { 
    StyleSheet,
    View,Text,Button,
    AsyncStorage, TextInput,
} from 'react-native';
import {  Thumbnail} from 'native-base';



export default class Screen3 extends React.Component {

     state = {
      'Username': '',
      'Useremail': '',
   }
   //componentDidMount = () => AsyncStorage.getItem('username').then((value) => this.setState({ 'name': value }))
   
   // Needed when user wants to update his name locally
 /*  setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   } */

   componentDidMount = () => AsyncStorage.multiGet(['username','useremail','password']).then(value => {this.setState({
   'Username': value[0][1],
   'Useremail': value[1][1],
   'Userpassword': value[2][1],
  })
   });

    render() {

        return (

            
            <View >

                <View >

                    <View style={styles.item1}>
                        <Thumbnail source={{ uri: 'https://cdn4.iconfinder.com/data/icons/people-std-pack/512/hiker-512.png'}} />
                        <Text style={{color:'#e5e8e6', fontWeight:'bold'}}>
                           {this.state.Useremail} {"\n"}
                        </Text>

                        <Text style={{color:'#FFF', fontWeight:'bold'}}>
                           {this.state.Username}, we will miss you. Come back soon !!! {"\n"}
                        </Text>
                        <Button onPress={this._logout} title="Logout" />

                    </View>

                </View>

            </View>

        );
    }

    _logout = async() => {

        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,1)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
        item1: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 10,
        backgroundColor: 'rgba(96,125,139,1)',
    },
	
});