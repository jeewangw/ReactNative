import React from 'react';
import { 
	StyleSheet,
	View,
	TextInput,
	Text,
	TouchableOpacity,Picker,
	ActivityIndicator,
	Alert,
} from 'react-native';

import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';


export default class Foreigntxt extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
        	isLoading: false,
            convertName:"1283618",
            temp:'',
            desc:'',
            icon:'',
        }

    }

    _convert = () => {
   this.setState({ isLoading: true});
   	var {convertName} = this.state;

   	 return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.state.convertName}&APPID=33b1fab247325bd192507f554e9fe3b9`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          desc: responseJson.list[0].weather[0].description,
          icon: responseJson.list[0].weather[0].main,
        }, function(){
        	this.setState(
        		{ temp: Math.round(responseJson.list[0].main.temp - 273.15)},
        		);

        });

      })
      .catch((error) =>{
        console.error(error);
      });

    }


    render() {


	          if (this.state.isLoading) {
			     return (
			       <View style={{flex: 1, paddingTop: 20}}>
			         <ActivityIndicator size='large' />
			       </View>
			     );
			   }
			   const message1 = <Text style={styles.item1Text} >	
										
										Average Temperature: {this.state.temp} degree celcius {"\n"}{"\n"}
										Description: {this.state.desc} {"\n"}	
								</Text>
								
			   const message2 = <Text style={styles.item1Text} >	
										
										Select City and Click the Button
								</Text>

        

        return (

        <View style={{marginLeft:20,marginRight:20,marginTop:150,backgroundColor:'#d1fff0',paddingTop:20,paddingBottom:20,}}>
        	
					<Text 
						style={styles.item1Text}
					>
						Weather In Nepal
					</Text>


        		<Picker style={styles.picker} itemStyle={styles.pickerItem}
					  selectedValue={this.state.convertName}
					  onValueChange={(itemValue, itemIndex) =>
					    this.setState(
					    {convertName: itemValue},
					    )
					  }>
					  <Picker.Item label="Bhaktapur" value="1283618" />
					  <Picker.Item label="Bharatpur" value="1283613" />
					  <Picker.Item label="Biratnagar" value="1283582" />
					  <Picker.Item label="Butwal" value="1283562" />
					  <Picker.Item label="Dhanusa" value="7648379" />
					  <Picker.Item label="Kathmandu" value="1283240" />
					  <Picker.Item label="Lalitpur" value="1283154" />
					  <Picker.Item label="Pokhara" value="1282898" />
					  <Picker.Item label="Thimi" value="1282677" />
				 
				</Picker>
					<View>
		                {this.state.temp == 0 ? message2 : message1}
		                 </View>	
									


							<TouchableOpacity style={styles.item1} onPress={ this._convert } >
								<Text style={styles.item1TouchableOpacity}>
									See Climate Condition
						        </Text>
							
				           </TouchableOpacity>
			</View>
        );

    }

}

const styles = StyleSheet.create({
	

	item1TouchableOpacity: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',

	},
		item1: {
	    backgroundColor: '#1194f6',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 18,
	    width: '70%',
	    height: 50,
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	    marginLeft:70,
	},
	
	item1Text: {
	    color: 'rgba(255,152,0,1)',
	    fontSize: 18,
	    textAlign: 'center',
	    fontWeight: '300',
	    width: '100%',
	},
	 picker: {
	color: 'black',
    width: "80%",
    height: 80,
    marginBottom:20,
    fontSize:20,
  },
    pickerItem: {
    height: 44,
  },
  	icon: {
	    width: '50%',
	    height: 50,
	    alignItems: 'center',
	    marginLeft: 10,
	    marginBottom: 5,
	},
	
});