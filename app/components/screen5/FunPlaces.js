import React from 'react';
import { Image } from 'react-native';
import {Root,Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import { Font, AppLoading } from "expo";
import { FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
export default class FunPlaces extends React.Component{
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
    if(this.state.loading){
      return(
        <Root>
          <AppLoading />
        </Root>
      );
    }
   return (
     <Container>
         <Header />
         <Content>
           <Card style={{flex: 0}}>
             <CardItem>
                 <Body>
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Sauraha</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/sauraha.jpg')} style={{height:200, width:370, flex: 1}}/>
                 <Text>
                   Sauraha is a village in Chitwan District of Nepal situated close by the Rapti River and the Chitwan National Park.
                   It is the eastern gateway to Chitwan National Park and jungle safaris for budget, mid-priced and 3-4 star tourists.
                   Jungle / wildlife safaris by foot, jeep and elephant. You are for sure to see the rhinoceros. Also many types of deer,
                   monkeys, and Bengal tiger. Bird watching in and around the jungle. Especially Bish hajar Taal (20,000 lakes) wetlands
                   area approximately 10 kilometers north west from Sauraha.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                 textStyle={{color: '#87838B'}}
                 onPress={() => this.props.navigation.navigate('Map', {id : 2})}
                 >
                   <Entypo active name="direction" size={25} />
                   <Text>Get Directions</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
           <Card style={{flex: 0}}>
             <CardItem>
                 <Body>
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Bungy Nepal Adventure</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/bungyNepal.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Enjoy the thrilling bungy jump located at Pardi Bazaar, Pokhara
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id: 0})}
                >
                  <Entypo active name="direction" size={25}  />
                  <Text>Get Directions</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
           <Card style={{flex: 0}}>
             <CardItem>
                 <Body>
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Kathmandu Fun Valley</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/funvalley.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                   Kathmandu Fun Valley, a new amusement park located in Palase (Bhaktapur)
                    near the tall Shiva statue officially came into operation on 29 May 2013.
                    It is one the best Fun Spot for having Fun. There are various slides and
                    attractions to offer you thrill in Sanga water park. Fun park kathmandu is
                     the best place to beat the heat with have some exciting time in water and
                      recreational activities for weekend getaways.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id : 1})}
                  >
                 <Entypo active name="direction" size={25}  />
                 <Text>Get Directions</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
           <Card style={{flex: 0}}>
             <CardItem>
                 <Body>
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Kathmandu Fun Park</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/funpark.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Kathmandu Fun Park is Nepal's Largest Outdoor amusement park with
                  collection of rides and other entertainment attractions assembled
                   for the purpose of entertaining large group of people of all ages.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id : 3})}
                >
                  <Entypo active name="direction" size={25} />
                  <Text>Get Directions</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
           <Card style={{flex: 0}}>
             <CardItem>
                 <Body>
                   <Text style={{ fontWeight:'bold', fontSize:25}}>WhiteWater Nepal Pvt. Ltd. (Rafting)</Text>
                </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/whitewater.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Lovely little luxurious beach rafting camp. Friendly staffs, great food and a fun and thrilling rafting tour.
                   Highly recommend sleeping in the hammocks on the beach at night
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id: 4})}
                >
                  <Entypo active name="direction" size={25}  />
                  <Text>Get Directions</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
           <Card style={{flex: 0}}>
             <CardItem>
                 <Body>
                   <Text style={{ fontWeight:'bold', fontSize:25}}>GRG's Adventure Kayaking</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/grg.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  GRG’s specialises in whitewater rafting, kayaking and canyoning in adventures in Nepal.
                   Wanna try something a little different? Join GRG's Adventure Kayaking for their unique expeditions.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id:5})}
                >
                  <Entypo active name="direction" size={25} />
                  <Text>Get Directions</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
           <Card style={{flex: 0}}>
             <CardItem>
                 <Body>
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Sukute Beach Resort</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/sukute.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Located three hours away from Kathmandu, almost 20 minutes from the Dolalghat bridge lies the Sukute Beach Resort just on the bank of Sunkoshi river.
                   With the clean river flowing and the hills covering the place, it is nice escape for those who want to have a relaxing and refreshing moment.
                    The place is good for rafting, swimming, fishing and also playing beach ball. The soft sands gives the touch of the sea and
                    refreshing sound of the ever flowing river takes one away to a new world. If you want to have some revival moment and get
                     back to work being refreshed then this is the place. Take your family with you and you will see how the place rejuvenates you.
                     The place has restaurant that serves breakfast, lunch and dinner. A pool house lifts up the amenities. In overall it is a good
                     place that one must visit.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id:6})}
                >
                  <Entypo active name="direction" size={25} />
                  <Text>Get Directions</Text>
                 </Button>
               </Left>
             </CardItem>
           </Card>
         </Content>
       </Container>
     );
   }
}
