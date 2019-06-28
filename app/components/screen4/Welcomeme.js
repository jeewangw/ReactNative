import React from 'react';
import { 
	StyleSheet,
	View,Text,AsyncStorage,
} from 'react-native';



export default class Welcomeme extends React.Component {

	  state = {
      'name': ''
   }
   componentDidMount = () => AsyncStorage.getItem('username').then((value) => this.setState({ 'name': value }))


    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View 
                style={styles.component}
            >	
            	<Text style={styles.welcomemsg}>
            	Welcome {this.state.name},{"\n"}
            	Spend some time looking stories of other people !!!
            	</Text>

                <View style={styles.layouts}>

                	
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
	welcomemsg: {
		color: '#992e5b',
		textAlign:'center',
		fontStyle:'italic',
		fontSize:16,
		marginLeft:20,

	},
	
});