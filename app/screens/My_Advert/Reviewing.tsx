import React, { FC } from "react"
import {

  TextStyle,
  View,
  ViewStyle,

  TouchableOpacity,
  ImageStyle

} from "react-native"
import {
  Text,
  Icon
 
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing } from "../../theme"

import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import  {PopOver} from "../../components/Popover/PopOver"


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
const TITLE: ViewStyle = {
  flexDirection: "row",
  marginLeft:spacing[7],

}
const TITLE2: ImageStyle = {
  flexDirection: "row",
  marginTop: spacing[1],

}
const POPOVER: ViewStyle = {
}

export const Reviewing: FC<StackScreenProps<NavigatorParamList, "reviewing">> = observer(
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
    return (
      <View style={FULL}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: spacing[6],
            backgroundColor: "#FFFFFF",
            marginHorizontal: spacing[5],
            width:"70%",
        

          }}
        >
          
          <Icon icon="back"  style={TITLE2}/>
          <View style={TITLE}>
          <Text style={MYSAVE} text="My Adverts : " />
          <Text style={MYSAVEE} text="Reviewing (1)" />
          </View>
          <View style={ POPOVER}>
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
           




        </View>
      </View>

      
    )
  },
)


