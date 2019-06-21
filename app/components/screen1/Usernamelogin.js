import React from 'react';
import { 
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	KeyboardAvoidingView,
	ScrollView,
	ActivityIndicator,
	Alert, AsyncStorage,
} from 'react-native';

import { Header } from 'react-navigation';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcd0XU3xR-4ZYbpuHLCrEux7MTQ-OhSv8",
    authDomain: "dinder-7d5cb.firebaseapp.com",
    databaseURL: "https://dinder-7d5cb.firebaseio.com",
    projectId: "dinder-7d5cb",
    storageBucket: "dinder-7d5cb.appspot.com",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default class Usernamelogin extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
            Username: "",
            Useremail: "",
            Userpassword: "",
            isLoading: false,
        }

    }

    userlogin = () => {
    	var {Username} = this.state;
		var {Useremail} = this.state;
		var {Userpassword} = this.state;
		try{
			if(Userpassword.length < 6)
			{
				Alert.alert("Please enter atleast 6 characters");
				return;
			}

			firebase.auth().createUserWithEmailAndPassword(Useremail,Userpassword)
			AsyncStorage.setItem('username',Username);
			this.setState({ Username: "" });
		    this.setState({ Useremail: "" });
		    this.setState({ Userpassword: "" });
		    this.props.navigation.navigate('Screen2')

		}
		catch(error){
			Alert.alert(error.toString())
		}
    }

	/*userlogin = async () => {
		this.setState({
         	isLoading: true,
         });
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
		}).then((response) => response.text())
		  .then ((responseText) => {
		    this.setState({
         	isLoading: false,
         });
		   // this.props.navigation.navigate('Screen6'); takes to confirmation page
		    this.setState({ Username: "" });
		    this.setState({ Useremail: "" });
		    this.setState({ Userpassword: "" });
		  }).catch ((error) => {
		    console.error(error);
		  });
		} */


    render() {

        if (!this.props.visible) {
            return false;
        }
	        if (this.state.isLoading) {
			     return (
			       <View style={styles.loading}>
			         <ActivityIndicator  size='large' />
			       </View>
			     );
			   }
        

        return (
        		
        	<View>

	 			<View style={styles.component} >
					<TextInput 
						style={styles.item1TextInput}
						placeholder={"Enter your username"}
						underlineColorAndroid={"transparent"}
						placeholderTextColor={"#FFF"}
						onChangeText={(val) => this.setState({ Username: val })}
						value={this.state.Username}
						/>
						</View>
								<View style={styles.component} >
										<TextInput 
											style={styles.item1TextInput}
											placeholder={"Enter your email"}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#FFF"}
											onChangeText={(val) => this.setState({ Useremail: val })}
											value={this.state.Useremail}
											/>

										</View>
							
												<View style={styles.component} >
														<TextInput 
															style={styles.item1TextInput}
															secureTextEntry={true}
															placeholder={"Enter your password"}
															underlineColorAndroid={"transparent"}
															placeholderTextColor={"#FFF"}
															onChangeText={(val) => this.setState({ Userpassword: val })}
															value={this.state.Userpassword}
																/>

									</View>
					
				

										<View >

		                                <TouchableOpacity onPress={this.userlogin} 
												style={styles.item1}
											>
												
												<Text style={styles.item1TouchableOpacity}>
													Sign Up
												</Text>
											
											</TouchableOpacity>

		                			</View>
										

          				  </View>
        );

    }

}

const styles = StyleSheet.create({

		item1: {
		    backgroundColor: '#1194f6',
		    borderWidth: 0,
		    borderColor: '#eee',
		    borderStyle: 'solid',
		    borderRadius: 24,
		    padding:20,
		    marginLeft:100,
		    marginRight:100,
		    marginTop:10,
		    marginBottom:10,
		 
		},

		item1TouchableOpacity: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
    
	component: {
	    width: '89%',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7,
	    paddingBottom: 7,
	    marginLeft: 20,
	    marginBottom: 7,
	    borderWidth: 2,
		borderColor: '#eee',
		borderStyle: 'solid',
		borderRadius: 20,

	},
	item1TextInput: {
		fontSize: 20,
		color: '#FFF',
	},
	loading: {
		flex:1,
		padding:20,
  }
	
});