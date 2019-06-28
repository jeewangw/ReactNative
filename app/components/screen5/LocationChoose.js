import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import { FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
import FunPlaces from './FunPlaces';
import ReligiousPlaces from './ReligiousPlaces';
import TrekkingPlaces from './TrekkingPlaces';
export default class LocationChoose extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#39aacc", paddingBottom:25, }} />
        <Content>
          <Card style={{ marginTop:0}}>
            <Text style={{ fontSize: 25, textAlign:'center',fontWeight:'bold'}}> Categories </Text>
            <CardItem>
              <FontAwesome active name="bell-o" size={25} />
              <Text onPress = {() => {this.props.navigation.navigate('ReligiousPlaces', {})}}>  Religious Locations</Text>
              <Right>
                <Icon
                 name="arrow-forward"
                 onPress = {() => {this.props.navigation.navigate('ReligiousPlaces', {})}}
                />
              </Right>
             </CardItem>
             <CardItem>
               <Entypo active name="emoji-happy" size={25}  />
               <Text onPress = {() => this.props.navigation.navigate('FunPlaces', {})}>  Fun Locations      </Text>
               <Right>
                 <Icon
                 name="arrow-forward"
                 onPress = {() => this.props.navigation.navigate('FunPlaces', {})}
                  />
               </Right>
              </CardItem>
              <CardItem>
                <Foundation active name="mountains" size={25} />
                <Text onPress = {() => this.props.navigation.navigate('TrekkingPlaces', {})}>  Trekking Locations</Text>
                <Right>
                  <Icon
                  name="arrow-forward"
                  onPress = {() => this.props.navigation.navigate('TrekkingPlaces', {})}
                  />
                </Right>
               </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
