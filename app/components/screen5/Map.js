import React, { Component } from "react";
import { Platform, AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";

import * as Location from 'expo-location';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import CurrentLocationButton from './location/CurrentLocationButton';
import * as data from '../../../assets/coordinates/Coordinates.json'


export default class Map extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      latitude: 32.7333207,
      longitude: -97.1155631,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:32.7333207,
      cordLongitude:-97.1155641,
      latitudeDelta:1,
      longitudeDelta:1,
    };


  }

    componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    this.setState({   latitude: latitude,
           longitude: longitude,
           error: null, });
  };



 /* componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         }, function(){
        		alert(this.state.longitude);}
        		);

       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );


   } */




   async getDirections(startLoc, destinationLoc) {

         try {
             let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc}&mode=walking&key=AIzaSyAuj8hqmhYH49aKGNWxIufzg3DgF0AZ5_g `)
             let respJson = await resp.json();
             let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
             let coords = points.map((point, index) => {
                 return  {
                     latitude : point[0],
                     longitude : point[1]
                 }
             })
             this.setState({coords: coords})
             this.setState({x: "true"})
             return coords
         } catch(error) {
             this.setState({x: "error"})
             return error
         }
     }


     centerMap() {
       const {latitude} = this.state;
       const {longitude} = this.state;
       const {latitudeDelta} = this.state;
       const {longitudeDelta} = this.state;
       this.map.animateToRegion({
         latitude,
         longitude,
         latitudeDelta,
         longitudeDelta
       })
     }

     forDirections(id){
       let forDest = data.locations[id].coordinates.latitude + "," + data.locations[id].coordinates.longitude;
       this.getDirections(this.state.latitude+","+this.state.longitude, forDest);
     }


    render() {

      /*  if (!this.props.visible) {
            return false;
        }*/
        const {navigation} = this.props;
        const id = navigation.getParam('id', 'no-id');

        return (

            <View
                style={styles.componenta}
            >

                <View style={styles.layoutsa}>

                  <View style={styles.layout1a}>

                    <View style={styles.itemcontainer1a}>

                      <View style={styles.itemcontainer1Innera}>

                          <CurrentLocationButton cb = {() => {this.centerMap()}}/>



                         <MapView style={styles.item1} initialRegion={{
                          latitude:data.locations[id].coordinates.latitude,
                          longitude:data.locations[id].coordinates.longitude,
                          latitudeDelta: 0.0025,
                          longitudeDelta:0.0025
                        }}
                        zoomEnabled = {true}
                        ref = {(map) => {this.map = map}}>


                        {data.locations.map((marker,index) => (
                         <MapView.Marker
                             key = {index}
                             coordinate = {marker.coordinates}
                             title = {marker.title}
                             onPress = {( ) => {this.forDirections(marker.id)}}
                             pinColor = "#00ff00"
                         />
                       ))}


                        {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                           coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                           title={"Your Location"}
                         />}

                         

                         {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
                              coordinates={this.state.coords}
                              strokeWidth={2}
                              strokeColor="red"
                              lineCap = "round"/>
                          }


                          {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
                            coordinates={[
                                {latitude: this.state.latitude, longitude: this.state.longitude},
                                {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
                            ]}
                            strokeWidth={2}
                            strokeColor="red"
                            lineCap = "round"/>
                           }
                    </MapView>

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
      height: 450,
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
  },

});
