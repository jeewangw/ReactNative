import React from 'react';
import { 
	StyleSheet,
	View,
	TextInput,
	Text,
	TouchableOpacity,Picker,
	ActivityIndicator,
} from 'react-native';

import { Container, Header, Content, Item, Input, Icon } from 'native-base';


export default class Foreigntxt extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
        	isLoading: false,
            foreignValue: "",
            exchangeValue: 0,
            convertName:"USD_NPR",
        }

    }

    _convert = () => {
   this.setState({ isLoading: true});
    var {foreignValue} = this.state;
	var {exchangeValue} = this.state;
	var {convertName} = this.state;
    return fetch(`https://free.currconv.com/api/v7/convert?q=${this.state.convertName}&compact=ultra&apiKey=cb2a7f25845bd91d2bdd&fbclid=IwAR3BbBArw7aK01eERVEt__reDZ3pctDAIAp07en17otWq3crbsnm2NLEPtQ`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        	this.setState({ exchangeValue: responseJson[convertName] * foreignValue});

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }


    render() {

        if (!this.props.visible) {
            return false;
        }

	          if (this.state.isLoading) {
			     return (
			       <View style={{flex: 1, paddingTop: 20}}>
			         <ActivityIndicator size='large' />
			       </View>
			     );
			   }

        

        return (

        <View style={{marginLeft:20}}>
        		<Picker style={styles.picker} itemStyle={styles.pickerItem}
					  selectedValue={this.state.convertName}
					  onValueChange={(itemValue, itemIndex) =>
					    this.setState({convertName: itemValue})
					  }>
					  <Picker.Item label="USD" value="USD_NPR" />
					  <Picker.Item label="INR" value="INR_NPR" />
					  <Picker.Item label="AUD" value="EUR_NPR" />
				</Picker>

			
				<Item>
		            <Input 
		            style={{color:'#FFF'}}
		            placeholder='Foreign Value'
		            onChangeText={(val) => this.setState({ foreignValue: val })}
		            value={this.state.foreignValue}
		            />
		            <Icon active name='swap' style={{color:'#FFF'}}/>
		          </Item>
							<Text style={styles.item1Text} >	
									
									NPR: {this.state.exchangeValue}
							</Text>

							<TouchableOpacity style={styles.item1} onPress={ this._convert } >
								<Text style={styles.item1TouchableOpacity}>
									Convert
						        </Text>
							
				           </TouchableOpacity>
			</View>
        );

    }

}

const styles = StyleSheet.create({
	
	item1TextInput: {
	    color: 'rgba(255,255,255,1)',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	    marginBottom:70,
	    width:'50%',
	    height:70,

	},
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
	    color: 'rgba(242,242,242,1)',
	    fontSize: 20,
	    textAlign: 'left',
	    width: '100%',
	    marginBottom:70,
	    marginTop:35,
	},
	 picker: {
	color: '#FFF',
    width: "25%",
    height: 80,
    marginBottom:20,
    fontSize:20,
  },
    pickerItem: {
    height: 44,
  },
	
});