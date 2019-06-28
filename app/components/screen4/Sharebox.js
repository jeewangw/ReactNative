import React from 'react';
import { 
	StyleSheet,
	View,
	TextInput,AsyncStorage,Alert,
} from 'react-native';

import {Permissions, Constants} from 'expo';
import * as ImagePicker from 'expo-image-picker';


import { FontAwesome } from '@expo/vector-icons';
import { Container, Header, Content, Text, Button, Toast } from "native-base";



export default class Sharebox extends React.Component {

	 constructor(props) {
    
        super(props);

        this.state = {
            state_ID__sharebox: "",
            'Username': '',
      		'Useremail': '',
      		'Userpassword': '',
        }

    }

   //componentDidMount = () => AsyncStorage.getItem('username').then((value) => this.setState({ 'Username': value }))
  // componentDidMount = () => AsyncStorage.getItem('password').then((value) => this.setState({ 'Userpassword': value }))
  // componentDidMount = () => AsyncStorage.getItem('email').then((value) => this.setState({ 'Useremail': value }))

  componentDidMount = () => AsyncStorage.multiGet(['username','useremail','password']).then(value => {this.setState({
   'Username': value[0][1],
   'Useremail': value[1][1],
   'Userpassword': value[2][1],
	})
	 });

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

	_submit = async() => {

		const {Username} = this.state;
		const  {Useremail} = this.state;
		const  {Userpassword} = this.state;
		const {state_ID__sharebox} = this.state;
		AsyncStorage.setItem('status',state_ID__sharebox);

		const formData = new FormData();
		  formData.append('name', Username);
    	  formData.append('email', Useremail);
    	  formData.append('password', Userpassword);
    	  formData.append('status',state_ID__sharebox);

		let result = await ImagePicker.launchImageLibraryAsync({
		      mediaTypes: ImagePicker.MediaTypeOptions.All,
		      allowsEditing: true,
		      aspect: [4, 3],
		    });

		    if (result.cancelled) {
		    return;
		  }

		      console.log(result);

		    if (!result.cancelled) {
		      this.setState({
		       image: result.uri 
		     });
		    }

		  let localUri = result.uri;
		  let filename = localUri.split('/').pop();

		  let match = /\.(\w+)$/.exec(filename);
		  let type = match ? `image/${match[1]}` : `image`;


		  formData.append('photo', { uri: localUri, name: filename, type });
	
		Alert.alert("Uploading....");
		var request = new XMLHttpRequest();
		request.open("POST", "http://jgyawali.000webhostapp.com/awesomeapp/ShareimageAndText.php",true);
		 request.onreadystatechange = () => {
		    if(request.readyState === 4){
		      if(request.status === 200){
		        Alert.alert("Finished Uploading\nRefresh to see latest post");
		      } else {
		        Alert.alert('ERROR UPLOADING');
		      }
		    }
		  };
		request.send(formData);

		this.setState({ state_ID__sharebox: "" });


	}



    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <View style={styles.item1}>
										<TextInput 
											style={styles.item1TextInput}
											placeholder={"Share your images, stock photos and vectors"}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#34494f"}
											onChangeText={(val) => this.setState({ state_ID__sharebox: val })}
											value={this.state.state_ID__sharebox}
										/>
										<View >
											<FontAwesome onPress={
					                                	this._submit
					                                } 
											name={"camera"}
											size={28}
											color={"black"}
										/>
										</View>
									</View>

                			</View>

                		</View>

                	</View>
                	
                </View>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
	    width: '100%',
	    flexDirection: 'row',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 90,
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    padding: 25,
	    overflow: 'hidden',
	    borderStyle: 'solid',
	    borderWidth: 1,
	    borderRadius: 37,
	    borderColor: 'rgba(159,159,159,1)',
	    flexDirection:'row',
	    flex:1,
	},
	
	item1TextInput: {
	    color: 'black',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	},
	
});