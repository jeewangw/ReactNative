import React, { Component } from "react";
import {View, Text} from "react-native";
import { Container, Header, Content, Accordion, Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";
import { Thumbnail } from 'native-base';

const dataArray = [
  { title: "USA Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "German Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "UK Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Japanese Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Indian Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Swedish Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "France Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Portugal Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Belgium Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Australian Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Swiss Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Spain Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Chinese Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "South Korean Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Russian Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "South African Embassy", content: "Lorem ipsum dolor sit amet" },
  { title: "Canada Embassy", content: "Lorem ipsum dolor sit amet" },
];
export default class EmbassyInfos extends Component {
  render(){
    return(
      <View>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>USA Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-423-4000 </Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>usembktm@state.gov</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>German Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-441-27-86 </Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>https://kathmandu.diplo.de</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>British Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-14-237100 </Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>BEKathmandu@fco.gov.uk.</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Japanese Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-4426-680 </Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>inquiry-emb@km.mofa.go.jp </Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Indian Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-44-23730 </Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>consularcons.kathmandu@mea.gov.in</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Swedish Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-422-0939 </Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>ktm@congensweden.org.np</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>French Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-144-12-332 </Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>prabinkharel@gmail.com</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Portugal Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>(+977)-1444-64-00</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>r@rkhetan.com</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Australian Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-437-1678</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>austembassy.kathmandu@dfat.gov.au</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Chinese Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-4419389</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>chinaemb_np@mfa.gov.cn</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>South Korean Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-427-0172</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>konepemb@mofa.go.kr</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Russian Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-441-1063</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>ruspos@info.com.np</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Canadian Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-4441976</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>kathmandu@international.gc.ca</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
      <Collapse style={{borderBottomWidth:1,borderTopWidth:1, top:30}}>
        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
          <View style={{width:'60%'}}>
            <Text>Spain Embassy</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>+977-1-4010529</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{flexDirection:'row'}}>
            <CollapseHeader>
              <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
              <Text>info@altavista.com.np, spanishclub4u@gmail.com</Text>
            </CollapseBody>
          </Collapse>
        </CollapseBody>
      </Collapse>
    </View>
    );
  }
}

/*
 import React from 'react';
 import { View,Text } from 'react-native';
 import {Collapse, CollapseHeader, CollapseBody} from "native-base";
 import { Thumbnail } from 'native-base';


export default class EmbassyInfos extends React.Component {
  render(){
    return(
      <View>
         <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
           <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
             <View style={{width:'25%',alignItems:'center'}}>
               <Thumbnail source={{uri: 'https://www.biography.com/.image/t_share/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg'}} />
             </View>
             <View style={{width:'60%'}}>
               <Text>Name : Mohammed Ali Kley</Text>
               <Text>Profession: Boxer</Text>
             </View>
           </CollapseHeader>
           <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED'}}>
             <Collapse style={{flexDirection:'row'}}>
               <CollapseHeader>
                 <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png'}} />
               </CollapseHeader>
               <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                 <Text>+1 310 346 0018</Text>
               </CollapseBody>
             </Collapse>
             <Collapse style={{flexDirection:'row'}}>
               <CollapseHeader>
                 <Thumbnail source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png'}} />
               </CollapseHeader>
               <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                 <Text>sample@sample.ma</Text>
               </CollapseBody>
             </Collapse>
           </CollapseBody>
         </Collapse>
       </View>
    );
  }
}
*/
