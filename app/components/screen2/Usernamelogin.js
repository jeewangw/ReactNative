import React from 'react';
import { 
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';

import { Header } from 'react-navigation';


export default class Usernamelogin extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
            Username: "",
            Useremail: "",
            Userpassword: "",
        }

    }


	userlogin = async () => {
		var {Username} = this.state;
		var {Useremail} = this.state;
		var {Userpassword} = this.state;

		  fetch("http://jgyawali.000webhostapp.com/awesomeapp/userLogin1.php",{
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


    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (
        		
        	<View>

	 			<View style={styles.component} >
					<TextInput 
						style={styles.item1TextInput}
						placeholder={"Enter your username"}
						underlineColorAndroid={"transparent"}
						placeholderTextColor={"#AFAFAF"}
						onChangeText={(val) => this.setState({ Username: val })}
						value={this.state.Username}
						/>
						</View>
								<View style={styles.component} >
										<TextInput 
											style={styles.item1TextInput}
											placeholder={"Enter your email"}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#AFAFAF"}
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
															placeholderTextColor={"#AFAFAF"}
															onChangeText={(val) => this.setState({ Userpassword: val })}
															value={this.state.Userpassword}
																/>

									</View>
					
				

										<View >

		                                <TouchableOpacity onPress={this.userlogin} 
												style={styles.item1}
											>
												
												<Text style={styles.item1TouchableOpacity}>
													Login
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
	    width: '100%',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 0,
	    paddingBottom: 0,
	    margin: 20,

	},
	item1TextInput: {
		fontSize: 14,
		color: 'black',
	}
	
});