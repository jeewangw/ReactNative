import * as React from 'react';
import { Button, Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {Input} from './components/input';
import {ImagePicker, Permissions, Constants} from 'expo';


export default class App extends React.Component {

state={
  Useremail:'',
  Userpassword:'',
  image: null,
}

 takePhotoAndUpload = async() =>  {

  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: false, // higher res on iOS
    aspect: [4, 3],
  });

  if (result.cancelled) {
    return;
  }

  let localUri = result.uri;
  let filename = localUri.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append('photo', { uri: localUri, name: filename, type });

  return await fetch('http://jgyawali.000webhostapp.com/awesomeapp/userlogin.php', {
    method: 'POST',
    body: formData,
    header: {
      'content-type': 'multipart/form-data',
    },
  });
}


userlogin = async () => {
var {Useremail} = this.state;
var {Userpassword} = this.state;


  fetch("http://jgyawali.000webhostapp.com/awesomeapp/userlogin.php",{
  method: 'POST',
  headers: {
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body: JSON.stringify({
    email:Useremail,
    password:Userpassword
  })
}).then((response) => response.json())
  .then ((responseJson) => {
    alert(responseJson);
    this.setState({ Useremail: "" });
    this.setState({ Userpassword: "" });
  }).catch ((error) => {
    console.error(error);
  });
}


  render() {
    let {image} = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding: 20,paddingTop:200,}}>
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

     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

    <View style={styles.container}>
    <TouchableOpacity onPress={this.userlogin} style={styles.button}>
    <Text style={styles.text}>Sign Up </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={this.takePhotoAndUpload} style={styles.button}>
    <Text style={styles.text}>Upload</Text>
    </TouchableOpacity>

        </View>

      </View>
    );
  }
  

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.cancelled) {
    return;
  }

  let localUri = result.uri;
  let filename = localUri.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append('photo', { uri: localUri, name: filename, type });

  return await fetch('http://jgyawali.000webhostapp.com/awesomeapp/userlogin.php', {
    method: 'POST',
    body: formData,
    header: {
      'content-type': 'multipart/form-data',
    },
  });

    console.log(result);

    if (!result.cancelled) {
      this.setState({
       image: result.uri 
     });
    }
  };
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