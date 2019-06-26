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
        <Header />
        <Content>
          <Card>
            <Text> Categories </Text>
            <CardItem>
              <FontAwesome active name="bell-o" size={25} />
              <Text onPress = {() => {this.props.navigation.navigate('ReligiousPlaces', {})}}>  Religious Places</Text>
              <Right>
                <Icon
                 name="arrow-forward"
                 onPress = {() => {this.props.navigation.navigate('ReligiousPlaces', {})}}
                />
              </Right>
             </CardItem>
             <CardItem>
               <Entypo active name="emoji-happy" size={25}  />
               <Text onPress = {() => this.props.navigation.navigate('FunPlaces', {})}>  Fun Places      </Text>
               <Right>
                 <Icon
                 name="arrow-forward"
                 onPress = {() => this.props.navigation.navigate('FunPlaces', {})}
                  />
               </Right>
              </CardItem>
              <CardItem>
                <Foundation active name="mountains" size={25} />
                <Text onPress = {() => this.props.navigation.navigate('TrekkingPlaces', {})}>  Trekking Places</Text>
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
