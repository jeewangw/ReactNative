import * as React from 'react';
import { Button, Image, TouchableOpacity, Text, View, StyleSheet, Linking } from 'react-native';
import {Input} from './components/input';
import {ImagePicker, Permissions, Constants} from 'expo';


export default class Registration extends React.Component {

state={
  Username:'',
  Useremail:'',
  Userpassword:'',
}


userlogin = async () => {
var {Username} = this.state;
var {Useremail} = this.state;
var {Userpassword} = this.state;


  fetch("http://jgyawali.000webhostapp.com/awesomeapp/userRegistration.php",{
  method: 'POST',
  headers: {
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body: JSON.stringify({
    name:Username,
    email:Useremail,
    password:Userpassword
  })
}).then((response) => response.json())
  .then ((responseJson) => {
    alert(responseJson);
    this.setState({ Username: "" });
    this.setState({ Useremail: "" });
    this.setState({ Userpassword: "" });
  }).catch ((error) => {
    console.error(error);
  });
}

gotoLogin(){
  Linking.openURL('https://www.google.com');
}


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding: 20,paddingTop:200,}}>

        <Input placeholder='Enter your Username...' label='Username'
        onChangeText={Username=> this.setState({Username})}
        value = {this.state.Username}
        />

        <Input placeholder='Enter your email...' label='Email'
        onChangeText={Useremail=> this.setState({Useremail})}
        value = {this.state.Useremail}
        />

        <Input
        placeholder='Enter your password...' 
        label='Password'
        secureTextEntry
         onChangeText={Userpassword=> this.setState({Userpassword})}
        value = {this.state.Userpassword}
        />



    <View style={styles.container}>
    <TouchableOpacity onPress={this.userlogin} style={styles.button}>
    <Text style={styles.text}>Sign Up </Text>
    </TouchableOpacity>

     <TouchableOpacity onPress={this.gotoLogin} style={styles.button}>
    <Text style={styles.text}>Already have an account?</Text>
    </TouchableOpacity>

        </View>

      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#00aeef',
    alignItems:'center',
    width: '40%',
    height: 40
  },
    text:{
    padding:10,
    color:'white',
    fontWeight: '700',
    fontSize: 18,
  }
});