import React, { FC } from "react"
import {
    ImageStyle,

    TextStyle,
    View,
    ViewStyle,
    ScrollView,
    Image,
  } from "react-native"

  import { NavigatorParamList } from "../../navigators"
  import { color, spacing, Negativespacing } from "../../theme"
  
  import { observer } from "mobx-react-lite"
  import { StackScreenProps } from "@react-navigation/stack"
  import {ProductCard} from "../../components/ProductCard/ProducrCard"



const MAINCONTAINER: ViewStyle = {
    backgroundColor:color.background,
  flex:1,

}
const DETAIL: ViewStyle = {
    paddingHorizontal: spacing[2],

}

const ROW: ViewStyle = {
  marginTop: spacing[8],
  marginBottom: spacing[8],
 flexDirection: "row",
 width:"100%",
 justifyContent:"space-around",
}
const ROW2: ViewStyle = {
  marginTop: spacing[0],
  marginBottom: spacing[8],
 flexDirection: "row",
 width:"100%",
 justifyContent:"space-around",
}
const ROW3: ViewStyle = {
  marginTop: spacing[0],
  marginBottom: '30%',
 flexDirection: "row",
 width:"100%",
 justifyContent:"space-around",
}

const IMG: ImageStyle={
  width: "30%"
}
export const Notification_similarAds: FC<StackScreenProps<NavigatorParamList, "notification_similarads">> = observer(
    ({ navigation }) => {
    return (
     <View style={MAINCONTAINER}>
                <ScrollView  style={{ flex:1 }}>

     <View style={{alignItems:'center',marginTop:'8%'}}>
     <Image source={require('./similar.png')} style={IMG}/>
      </View>
      <View style={DETAIL}>
            <View style={ROW}>
             <View >
              <ProductCard
                           img={require('../../../assets/images/toyotaCar.png')} 

              Head={'Clean'}
              MainTxt={'Ford Equator Three - Rows SUV Debuts with Bold color.'}
              price={'$20,025'}
              area={'Lagos, Ikeja'}
              ad={'Premium Ad'}
              
              
              />
              </View>
              <View >
              <ProductCard
                           img={require('../../../assets/images/ford.png')} 

              Head={'Clean'}
              MainTxt={'2013 Ford Focus ST | FOrd focus 1, Ford focus, Ford'}
              price={'$240,025'}
              area={'Lagos, Ikeja'}
              ad={'Premium Ad'}
              />

              </View>
          </View>

          <View style={ROW2}>
             <View >
              <ProductCard
             img={require('../../../assets/images/mazda.png')} 
             Head={'Clean'}
               MainTxt={'Mazda BT-50 Limited 4x2 3.0 Auto 2022 - Blackwell'}
               price={'$240,025'}
               area={'Lagos, Ikeja'}
               ad={'Premium Ad'}
               />
              </View>
              <View >
              <ProductCard
                           img={require('../../../assets/images/lexux.png')} 

               Head={'Salvage'}
               MainTxt={'Honda car PH issue free repair of 10,000+'}
               price={'$240,025'}
               area={'New york'}
               ad={'Premium PlusAd'}
               />

              </View>
          </View>
          
          <View style={ROW3}>
             <View >
              <ProductCard
                           img={require('../../../assets/images/mercedes.png')} 

               Head={'Clean'}
               MainTxt={'Mercedes - Benz GLA 2018'}
               price={'$1283,025'}
               area={'Lagos, Ipaja'}
               ad={'Premium Ad'}
               />
              </View>
              <View >
              <ProductCard
                           img={require('../../../assets/images/gla.png')} 

               Head={'Clean'}
               MainTxt={'Mercedes - Benz GLA 2016'}
               price={'$1283,025'}
               area={'Lagos, Ipaja'}
               ad={'Premium Ad'}
               />

              </View>
          </View>
        </View>
        </ScrollView>

      </View>
    )
    }
)



