import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';
import React, { Component } from "react";
import axios from "axios";


export default class Screen7 extends React.Component {

    state = {
        result: null,
        fromCurrency: "USD",
        toCurrency: "GBP",
        amount: 1,
        currencies: [],
    };

      // Initializes the currencies with values from the api
    componentDidMount() {
        axios
            .get("http://api.openrates.io/latest")
            .then(response => {
                // Initialized with 'EUR' because the base currency is 'EUR'
                // and it is not included in the response
                const currencyAr = ["EUR"]
                for (const key in response.data.rates) {
                    currencyAr.push(key)
                }
                this.setState({ currencies: currencyAr.sort() })
            })
            .catch(err => {
                console.log("Opps", err.message);
            });
    }

       // Event handler for the conversion
    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                .get(`http://api.openrates.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
                .then(response => {
                    const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
                    this.setState({ result: result.toFixed(5) })
                })
                .catch(err => {
                    console.log("Opps", err.message);
                });
        } else {
            this.setState({ result: "You cant convert the same currency!" })
        }
    };

     // Updates the states based on the dropdown that was changed
    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
        }
    }

   

    render() {
        return (

            
            <View style={styles.container}>

                <View style={styles.screencontainer}>

                    <View style={styles.screencontainerInner}>

                      

                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,1)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});