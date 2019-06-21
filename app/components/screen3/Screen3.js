import React from 'react';
import { 
    StyleSheet,
    View,Text,Button,
    AsyncStorage, TextInput,
} from 'react-native';



export default class Screen3 extends React.Component {

     state = {
      'name': ''
   }
   componentDidMount = () => AsyncStorage.getItem('username').then((value) => this.setState({ 'name': value }))
   
   // Needed when user wants to update his name locally
 /*  setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   } */

    render() {

        return (

            
            <View >

                <View >

                    <View style={styles.item1}>
                        <Text style={{color:'#FFF', fontWeight:'bold'}}>
                           {this.state.name}, we will miss you. Come back soon !!!
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
        borderRadius: 24,
    },
	
});