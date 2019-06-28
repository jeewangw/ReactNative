import React from 'react';
import {View, Text, Linking} from 'react-native';
import { Container, Header, Content, Accordion, Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";
import { Thumbnail } from 'native-base';


export default class EmergencyNumbers extends React.Component {
  render(){
    return(
      <View>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, }}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Nepal Tourist Police</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text onPress={()=>{Linking.openURL('tel:+977-1-4247041');}}>+977-1-4247041 </Text>
              <Text onPress={()=>{Linking.openURL('tel:1144');}}>Within Nepal dial 1144.</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text onPress={() => Linking.openURL('mailto:policetourist@nepalpolice.gov.np') }>policetourist@nepalpolice.gov.np</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1,}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Nepal Tourism Board</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text onPress={()=>{Linking.openURL('tel:+977-1-4256909');}}>+977-1-4256909</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text onPress={() => Linking.openURL('mailto:info@ntb.org.np') }>info@ntb.org.np</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, }}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Trekking Agencies’ Association of Nepal (TAAN)</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text onPress={()=>{Linking.openURL('tel:+977-1-4427473');}}>+977-1-4427473, 4440920, 4440921</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text onPress={() => Linking.openURL('mailto:taan@wlink.com.np') }>taan@wlink.com.np, info@taan.org.np</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, }}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Other important Contact Info</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'column',backgroundColor:'#EDEDED'}}>
          <Text style={{alignItems: 'center', justifyContent:'center', padding:10}} onPress={()=>{Linking.openURL('tel:101');}}>Dial 101 for fire.</Text>
          <Text style={{alignItems: 'center', justifyContent:'center', padding:10}} onPress={()=>{Linking.openURL('tel:102');}}>Dial 102 for ambulance service.</Text>
          <Text style={{alignItems: 'center', justifyContent:'center', padding:10}} onPress={()=>{Linking.openURL('tel:103');}}>Dial 103 for traffic control.</Text>
          <Text style={{alignItems: 'center', justifyContent:'center', padding:10}} onPress={()=>{Linking.openURL('tel:197');}}>Dial 197 for telephone inquiry.</Text>
        </CollapseBody>
      </Collapse>
    </View>
    );
  }
}
