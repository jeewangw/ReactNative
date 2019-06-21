import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";


import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import CurrentLocationButton from './location/CurrentLocationButton';


export default class Map extends React.Component {
	  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:32.7333207,
      cordLongitude:-97.1155631,
      latitudeDelta:0.01,
      longitudeDelta:0.01,
      watchID : null,
      geoLoc : null,
    };

    this.mergeLot = this.mergeLot.bind(this);
    this.getLocationUpdate();

  }

  showLocation(){
    this.setState({
      latitude : position.coords.longitude,
      longitude : position.coords.latitude,
    });
    console.log("aayush");
  }
  getLocationUpdate() {
    if(navigator.geolocation){
      var options = {timeout:600};
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(() => this.showLocation(), options);
      this.setState({
        watchId : watchID,
        geoLoc : geoLoc,
      });
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );

   }

  mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       this.setState({
         concat: concatLot
       }, () => {
         this.getDirections(concatLot, "32.7333207,-97.1155631");
       });
     }

   }

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
       const latitude = this.state.latitude;
       const longitude = this.state.longitude;
       const latitudeDelta = this.state.latitudeDelta;
       const longitudeDelta = this.state.longitudeDelta;
       this.map.animateToRegion({
         latitude,
         longitude,
         latitudeDelta,
         longitudeDelta
       })
     }



    render() {

        if (!this.props.visible) {
            return false;
        }
        

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
									        latitude:32.7333207,
									        longitude:-97.1155631,
									        latitudeDelta: 0.01,
									        longitudeDelta: 0.01
									      }}
									      ref = {(map) => {this.map = map}}>

									      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
									         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
									         title={"Your Location"}
									       />}

									       {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
									          coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
									          title={"Your Destination"}
									        />}

									       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
									            coordinates={this.state.coords}
									            strokeWidth={2}
									            strokeColor="red"/>
									        }


									        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
									          coordinates={[
									              {latitude: this.state.latitude, longitude: this.state.longitude},
									              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
									          ]}
									          strokeWidth={2}
									          strokeColor="red"/>
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