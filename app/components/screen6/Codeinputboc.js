import React from 'react';
import { 
	StyleSheet,
	View,
	TextInput,
} from 'react-native';



export default class Codeinputboc extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
            state_ID__code: "",
        }

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
											placeholder={"4 digits code here"}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#AFAFAF"}
											onChangeText={(val) => this.setState({ state_ID__code: val })}
											value={this.state.state_ID__code}
										/>
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
	    padding: 10,
	    overflow: 'hidden',
	},
	
	item1TextInput: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	},
	
});