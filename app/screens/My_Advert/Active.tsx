import React, { FC  } from "react"
import {

  TextStyle,
  View,
  ViewStyle,

  ScrollView,
  TouchableOpacity,
} from "react-native"
import {

  Text,
 
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"

import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import  {PopOver} from "../../components/Popover/PopOver"
import {ProductMiniCard} from "../../components/ProductMiniCard/ProductMiniCard"
import { authService } from "../../services/api"

const BOLD: TextStyle = { fontWeight: "bold" }

const FULL: ViewStyle = {
//   backgroundColor: color.palette.white,
backgroundColor: "#FFFFFF",
flex:1,
}


const DETAIL: ViewStyle = {
    paddingHorizontal: spacing[5],

}

const MYSAVE: TextStyle = {
  ...BOLD,
  fontSize: 17,
  color: color.palette.black,
}
const MYSAVEE: TextStyle = {
  ...BOLD,
  marginRight:"32%",
  fontSize: 17,
  color: color.palette.buttonBlue,
}

const POPOVER: ViewStyle = {
}
export const Activee: FC<StackScreenProps<NavigatorParamList, "activee">> = observer(
  ({ navigation }) => {
    const  handleClick = () => {
      navigation.navigate('activee')
    }
    const  handleClick2 = () => {
      navigation.navigate('reviewing')
    }
    const  handleClick3 = () => {
      navigation.navigate('decline')
    }
    const  handleClick4 = () => {
      navigation.navigate('closed')
    }

    
  const allAdverts= async () => {
    try {
      const response  = await authService.myAdverts()
      console.log(response.data.items.data)
    } catch (error) {
      console.log(error)
    }
  }
  allAdverts()



    return (
      <View style={FULL}>
          <ScrollView style={{ flex:1 }}>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: spacing[6],
            backgroundColor: "#FFFFFF",
            paddingHorizontal: spacing[6],

          }}
        >
          <Text style={MYSAVE} text="My Adverts : " />
          <Text style={MYSAVEE} text="Active (2)" />
          <View style={ POPOVER}>
         {/* <PopOver /> */}
         <TouchableOpacity>
            {/* <Entypo name="dots-three-vertical" size={20} /> */}
            <PopOver
          onPress1={handleClick}
          Text1={'Active'} 
    
          onPress2={handleClick2}
           Text2={'Reviewing'}
           onPress3={handleClick3}
           Text3={'Decline'}
           onPress4={handleClick4}
           Text4={'Closed'}
           />
          </TouchableOpacity>
        </View>
        </View>
        <View style={DETAIL}>
          <ProductMiniCard   
             img={require('../../../assets/images/headphone.png')} 
             txt1={'Headphone'}
           txt2={'Red Solo 2 Wireless'}
           txt3={''}
           price={'$3,90.00'}
           loc={'Lagos'}
           minbid={'Min Bid $20,025'}
           maxbid={'Max Bid $30,025'}
           />
           <ProductMiniCard  
             img={require('../../../assets/images/AFXR.png')} 
           txt1={'Gearbox'}
           txt2={'AFX Precision Planetary Gearbox'}
           txt3={''}
           price={'$173.41'}
           loc={'USA'}
           minbid={'Min Bid $20,025'}
           maxbid={'Max Bid $30,025'}
           />
           

        </View>
        </ScrollView>

      </View>

      
    )
  },
)


