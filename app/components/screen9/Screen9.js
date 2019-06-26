import React, { Component } from 'react';
import { Container,Root, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Button } from 'native-base';
import { Font, AppLoading } from "expo";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import EmbassyInfos from './EmbassyInfos';
import EmergencyNumbers from './EmergencyNumbers';
export default class ListIconExample extends Component {
  constructor(props) {
  super(props);
  this.state = { loading: true };
  }
  async componentWillMount() {

    await Expo.Font.loadAsync({
      Roboto: require("../../../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../../../node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem icon>
            <Left>
              <Button>
                <FontAwesome active name="building" style={{flex : 1, color:'#FFF',marginLeft:10}}/>
              </Button>
            </Left>
            <Body>
              <Text onPress = {() => this.props.navigation.navigate('EmbassyInfos', {})}>Embassy Informations</Text>
            </Body>
            <Right>
              <Icon active
               name="arrow-forward"
               onPress = {() => this.props.navigation.navigate('EmbassyInfos', {})}
              />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button>
                <MaterialIcons active name="contacts" style={{flex : 1, color:'#FFF',marginLeft:10}} />
              </Button>
            </Left>
            <Body>
              <Text onPress = {() => this.props.navigation.navigate('EmergencyNumbers', {})}>Emergency Contacts</Text>
            </Body>
            <Right>
              <Icon active
               name="arrow-forward"
               onPress = {() => this.props.navigation.navigate('EmergencyNumbers', {})}
               />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
