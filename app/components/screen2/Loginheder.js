import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
} from 'react-native';



export default class Loginheder extends React.Component {


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
										<Text 
											style={styles.item1Text}
										>
											{this.props.loginheader}
										</Text>
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
	    marginTop: 0,
	    marginBottom: 0,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 0,
	    paddingBottom: 0,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 73.5,
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
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	    backgroundColor: 'rgba(0,150,136,1)',
	    borderRadius: 24,
	},
	
	item1Text: {
	    color: 'rgba(235,245,251,1)',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});