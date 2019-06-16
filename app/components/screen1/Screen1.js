import React from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';

import Logo from './Logo';
import Tourinnepal from './Tourinnepal';
import Component3 from './Component3';
import Usernamelogin from './Usernamelogin';
import Component10 from './Component10';


export default class Screen1 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            LogoVisible: false,
            TourinnepalVisible: true,
            Component3Visible: true,
            UsernameloginVisible: true,
            Component10Visible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }

    render() {
        return (

            <ImageBackground 
                source={require('../../img/screen1/img2km3mk3ayyjwyodeub.png')}
                style={styles.container}
            >

            <View style={styles.container}>

                <View style={styles.screencontainer}>

                    <View style={styles.screencontainerInner}>

                        <Logo 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.LogoVisible }
                        />
                        <Tourinnepal 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.TourinnepalVisible }
                        />
                        <Component3 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component3Visible }
                            Component3text ={"Registration"}
                        />
                        <Usernamelogin 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.UsernameloginVisible }
                        />
                     
                        <View >
                            <Component10 
                                navigation={this.props.navigation}
                                toggleComponent={ (component) => this.toggleComponent(component) }
                                hideComponent={ (component) => this.hideComponent(component) }
                                showComponent={ (component) => this.showComponent(component) }
                                visible={ this.state.Component10Visible }
                            />

                        </View>

                    </View>

                </View>

            </View>
        </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,0)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});