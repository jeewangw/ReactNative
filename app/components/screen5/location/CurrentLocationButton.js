import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

 export default class  CurrentLocationButton extends React.Component {
  render(){
    const cb = this.props.cb;
    const bottom = 65;
    return (
      <View style = {[styles.container, {top : 65}]}>
        <MaterialIcons
          name = "my-location"
          color = "#000000"
          size = {25}
          onPress = {() => {cb()}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    zIndex : 9,
    position : 'absolute',
    width: 45,
    height : 45,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation : 7,
    shadowRadius : 5,
    shadowOpacity : 1.0,
    justifyContent : 'space-around',
    alignItems : 'center',
    left: WIDTH -70,
  },
});
