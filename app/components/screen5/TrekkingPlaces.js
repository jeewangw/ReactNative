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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Poon Hill</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/poonhill.jpg')} style={{height:200, width:370, flex: 1}}/>
                 <Text>
                   Poon Hill trek is a short and relatively easy trek into the Annapurna region.
                   This trek is suitable for those who do not have much time to spend with a burning
                   desire to observe the beauty of snow-capped mountains.Poon Hill trek starts from
                   Nayapul after one and half hour drive from Pokhara. This trek passes beautiful
                   villages of Ulleri, Ghorepani, and Ghandruk. You will enjoy the trek in the spectacular
                   mountain scenery through delightful villages inhabited by Gurungs and Magars. Around
                   every corner is an exciting glance of the high mountains, whole horizons of which will
                   be open to you as you reach the high points of your trek. The viewpoint on Poonhill (3210m.)
                   offers the best view of mountains and sunrise
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                 textStyle={{color: '#87838B'}}
                 onPress={() => this.props.navigation.navigate('Map', {id:14})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Everest Base Camp</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/mteverest.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Everest’s daunting summit soars so high that trekking to its base camp (17,590') is still an adventure
                  of the highest sort. Join National Geographic on a 14-day Himalayan trek to Everest’s Southern Face Base
                  Camp through some of the world’s most spectacular mountain scenery. Spend two days discovering the historic
                  treasures of Kathmandu. Stay in villages set against soaring, jagged pinnacles; get to know the unique culture
                  of the Sherpas; and walk trails lined with mani stones, engraved with Tibetan Buddhist prayers. Discover remote
                  mountain monasteries and learn about the Sherpas’ spiritual perspective on the mountains they call home.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id:15})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Dhaulagiri Base Camp</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/dhaulagiri.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  The Dhaulagiri Base Camp Trek is an exhilarating and adventurous circuit trekking of the worlds 7th
                  highest mountain, Dhaulagiri, 8167 m/ and its massif which includes several soaring 7000 m peaks and
                  the trek around Dhaulagiri gets you off the beaten track and is ideal for those looking for an exciting
                  and adventure trek through remote highlands, the route passes through rugged terrain with astonishing
                  natural beauty that very few visitors have ever witnessed. The scenery is unforgettable and the challenging
                  trek crosses several mountain passes, including French pass 5360.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id:16})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Manaslu Circuit Trek</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/manaslu.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Experts consider the Manaslu Circuit Trek among the best treks in Nepal. Despite its recent rise in
                  popularity, the Manaslu Trek remains remote and off-the-beaten-path compared to the better-known teahouse
                  treks in Nepal. The trek takes you around Manaslu, the world's eighth highest mountain at 8,163 meters
                  (26,781 ft). The trailhead of the Manaslu Circuit trek is the closest to Kathmandu of the major Nepalese treks.
                  That said, it's still an adventurous 126 km (80 miles) drive from Kathmandu to Soti Khola, which takes about
                  6 hours by jeep (recommended) or 8+ hours by public bus. If road conditions are challenging (which is often
                  the case at the tail end of the monsoon in September) you may have to start walking in Arughat, which adds an extra day.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id:17})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Kanchenjunga Base Camp Trek</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/kanchenjunga.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                 Kanchenjunga Base Camp Trek is one of the great Himalayan trails, which covers the eastern part of Nepal.
                 The term “Kanchenjunga” stands for crystal clear in Nepali. Kanchenjunga (8586m) is the third highest mountain
                 in the world and is also popularly known as the “Five Treasures of the Great Snow” i.e. Gold, Silver, Precious
                 Stones, Grain, and Holy Scriptures. The famous Kanchenjunga is situated in North-East Nepal and is bordered by
                 Sikkim, India. Since the mountain partly lies in Nepal and partly in India, the view of Kanchenjunga can be seen
                 from India, Bhutan, and Tibet.
                 </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id:18})}
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
                   <Text style={{ fontWeight:'bold', fontSize:25}}>Annapurna Base Camp Trekking</Text>
                 </Body>
             </CardItem>
             <CardItem>
               <Body>
                 <Image source={require('../../../assets/annapurna.jpg')} style={{height: 200, width: 370, flex: 1}}/>
                 <Text>
                  Annapurna base camp trek is an amazing walk through diverse landscape and culture complete with rich mountain
                  vistas, terraced fields, quaint Gurung villages and a wide variety of flora and fauna. Mt. Annapurna (8091m)
                  of Nepal is the 10th highest mountain in the world and the journey to its base camp, which is at 4130m/13549ft
                  height, is one of the most popular walks on earth. Moreover, we reach our destination via Mt. Machapuchhre
                  (Fishtail) which is revered by the Nepalese for its unique beauty. Furthermore, thanks to the well-groomed
                  itinerary of the Annapurna Base Camp trekking package, it is a popular choice among diverse outdoor enthusiasts,
                  from a solo female traveler to hikers travelling in groups to Nepal.
                </Text>
               </Body>
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent
                  textStyle={{color: '#87838B'}}
                  onPress={() => this.props.navigation.navigate('Map', {id:19})}
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
