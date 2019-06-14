import * as React from 'react';
import { Button, Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {Input} from './components/input';
import {ImagePicker, Permissions, Constants} from 'expo';


export default class App extends React.Component {

state={
  Useremail:'',
  password:'',
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











userLogin = () => {

const {Useremail} = this.state;
const {Userpassword} = this.state;

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
  }).catch ((error) => {
    console.error(error);
  });
}


  render() {
    let {image} = this.state;
    return (
      <View style={{    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,}}>
        <Input
        placeholder='Enter your email...' 
        label='Email'
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
        <Button
          title="Log in"
          onPress={this.userLogin}
        />

            <Button
          title="Upload"
          onPress={this.takePhotoAndUpload}
        />

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