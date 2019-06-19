import React, { Component } from 'react';

import { AppRegistry, StyleSheet, ActivityIndicator, ListView,
 		Text, View, Alert,Image,
  	     Platform,} from 'react-native';


export default class Timeline extends React.Component {
 
 constructor(props) {
   super(props);
   this.state = {
     isLoading: true
   }
 }
 
GetItem (status) {
  
 Alert.alert(status);

 }


 componentDidMount() {

   return fetch('http://jgyawali.000webhostapp.com/awesomeapp/Timeline.php')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithRows(responseJson),
       }, function() {
         // In this block you can do something with new state.
       });
     })
     .catch((error) => {
       console.error(error);
     });
 }

 ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }


 render() {
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

   return (

     <View style={styles.MainContainer}>

       <ListView

         dataSource={this.state.dataSource}

         renderSeparator= {this.ListViewItemSeparator}
         renderRow={(rowData) =>

        <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{flex:1, flexDirection: 'column'}}>
         <Text style={styles.usertext}> {rowData.name} shared a post</Text>
         <Text onPress={this.GetItem.bind(this, rowData.status)} style={styles.textViewContainer} >{rowData.status}</Text>
         </View>
          <Image source = {{ uri: rowData.folder}} style={styles.imageViewContainer}  />

        </View>
         }
       />

     </View>
   );
 }
}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 5,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,

},

imageViewContainer: {
width: '75%',
height: 200 ,
marginLeft: 70,
borderRadius : 10,
marginBottom :20,

},

textViewContainer: {

  textAlignVertical:'center',
  width:'50%', 
  padding:20,
  color: 'rgba(255,255,255,1)',
  fontSize: 13,
  fontWeight: '600',
  width: '100%',
  flexWrap: 'wrap',
  flex:1,

},
usertext: {

  textAlignVertical:'center',
  width:'50%', 
  padding:20,
  color: 'rgba(255,255,255,1)',
  fontSize: 15,
  fontWeight: '600',
  width: '100%',
  flexWrap: 'wrap',
  flex:1,
  paddingBottom:0,
  marginBottom:0,

},

});
