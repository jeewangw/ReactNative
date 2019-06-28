import React from 'react';
import { Image } from 'react-native';
import {Root,Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import { Font, AppLoading } from "expo";
import { FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
export default class TrekkingPlaces extends React.Component{
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Pashupatinath Temple</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/pashupatinath.jpg')} style={{height:200, width:370, flex: 1}}/>
                 <Text>
                   Dedicated to Lord Shiva, Pashupatinath is one of the four most important religious sites in Asia
                   for devotees of Shiva. Built in the 5th century and  later renovated by Malla kings, the site
                   itself is said to have existed from the beginning of the millennium when a Shiva lingam was discovered here.
                   The temple serves as the seat of Nepal's national deity, Lord Pashupatinath.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                 textStyle={{color: '#87838B'}}
                 onPress={() => this.props.navigation.navigate('Map', {id : 7 })}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Muktinath Temple</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/muktinath.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Muktinath Temple (Chumig Gyatsa) is the symbol of the religious symbiosis between both Hindus and Buddhists.
                  The Hindu believes that Lord Vishnu got salvation from the curse of Brinda (wife of Jalandhar) here.
                  Therefore, he is worshipped as Muktinath (Lit. the lord of salvation). The temple is an amazing ritual
                  experience for the devout who purify themselves 3 times in the cow-fountains to claim their blessings.
                  It's great to watch after a hefty hike up to a respectable elevation, and why not.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id: 8})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Pathibhara Devi Temple</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/pathibhara.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                   Pathivara Devi shrine (3794m) is a popular pilgrimage destination that is believed to fulfill the long-cherished dreams of her devotees.
                   The animist deity at Pathivara is worshipped with equal reverence by both Hindus and Buddhist. The Goddess at Pathibhara is believed to
                   fulfill the long-cherished dreams of her devotees, like sons for those without sons, and wealth for the poor. The best time to visit the
                   temple is from March through out to June and September to November. Pilgrimages can also have an opportunity to visit Kanchanjungha range,
                    the waterfall at Sawa pokhari and the pond of Timbuk, during autumn and spring every year.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id : 9})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Swayambhunath Temple</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/swayambhunath.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Located at Kathmandu, Swayambhu is one of the holiest Buddhist stupas in Nepal. It is said to have evolved
                  spontaneously when the valley was created out of a primordial lake more than 2,000 years ago. This stupa is
                   the oldest of its kind in Nepal and has numerous shrines and monasteries on its premises. This shrine is
                   perhaps the best place to observe religious harmony in Nepal. The largest crowds of people are seen here on
                    Buddha's birthday which usually falls in May each year.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id : 10})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Tal Barahi Temple</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/barahi.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Tal Barahi Temple is a small 2 story pagoda-style temple devoted to the deity Tal Barahi.
                  This Hindu  temple in nepal dedicated to Ajima in the boar manifestation, represation of
                  the force of Shakti who is the Hindu Mother Goddess. As the Temple is on a  small island
                  in Fewa Lake in Pokhara, the only way to visit it is by boat. Tal barahi is one of the most famous
                  pilgrimage sites in Nepal  and countless Hindus come to worship the deity.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id: 11})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Janaki Temple</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/janaki.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                 The beautiful Janaki Mandir is a Hindu temple at the heart of Janakpur. Fully built in bright white,
                 the temple is an example of perfect artistry. Constructed in an area of 4,860 sq. feet in a mixed style
                 of Islamic and Rajput domes, the temple is 50 meters high. It is a three storied structure made entirely
                 of stone and marble. All its 60 rooms are decorated with colored glass, engravings and paintings, with
                 beautiful lattice windows and turrets. The temple was built in dedication to Goddess Sita. In 1657,
                 a golden statue of the Goddess Sita was found at the very spot, and Goddess Sita is also said to have
                 lived there. The temple stands on the exact spot where the statue was found.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id : 12})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Manakamana Temple</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/manakamana.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Situated atop a 1300-meter hill, 105 kilometers to the west of Kathmandu, the Manakamana Devi temple is
                  a highly venerated sacred place of the Hindu Goddess Bhagwati, an incarnation of Parvati. The name Manakamana
                  is derived from two words, Mana, meaning heart and Kamana, meaning wish. It is believed that the Goddess Bhagwati
                  rewards those who make the pilgrimage to her shrine by granting their wishes, and she is especially popular with Newari
                  newlyweds who pray for sons.
                </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id: 13})}
                >
                  <Entypo active name="direction" size={25}  />
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
