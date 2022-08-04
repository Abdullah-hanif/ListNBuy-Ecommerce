import React, { FC  } from "react"
import {

  TextStyle,
  View,
  ViewStyle,
    TouchableOpacity,
  ImageStyle,
} from "react-native"
import {
  
  Icon,
  Text,
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

const TITLE3: ViewStyle = {
  flexDirection: "row",
  marginLeft:spacing[7],
}
const TITLE2: ImageStyle = {
  flexDirection: "row",
  marginTop: spacing[1],

}
const COLOUM1: ViewStyle = {
    marginTop: spacing[8],
flexDirection:"column",
justifyContent:"center",
marginLeft: spacing[5],

}


const DETAIL: ViewStyle = {
  marginTop: spacing[8],
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


const IGNITE: ImageStyle = {
    marginTop: spacing[1],
    marginBottom: spacing[3],
    alignSelf: "center",
    width: 100,
    height: 100,
  }
  
  const TITLE: TextStyle = {
    ...BOLD,
    fontSize: 40,
    marginLeft: "auto",
    marginRight:"auto", 
       lineHeight: 38,
    marginTop: spacing[7],
    textAlign: "left",
    marginBottom: spacing[1],
    color: color.palette.black,
  }
  const TAGLINE: TextStyle = {
    color: color.palette.black,
    fontSize: 17,
    marginLeft: "auto",
    marginRight:"auto", 
    marginTop: spacing[1],
    lineHeight: 22,
    marginBottom: spacing[4] + spacing[1],
  }
  const POPOVER: ViewStyle = {
  }

export const Decline: FC<StackScreenProps<NavigatorParamList, "decline">> = observer(
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
            paddingHorizontal: spacing[6],

          }}
        >
    
          <Icon icon="back"  style={TITLE2}/>
          <View style={TITLE3}>
          <Text style={MYSAVE} text="My Adverts : " />
          <Text style={MYSAVEE} text="Decline (0)" />
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
        <View style={COLOUM1}>
        <Icon icon="check" style={IGNITE} onPress={() => navigation.navigate("forgetpassword")} />
          <Text style={TITLE} preset="header" text="Hurry" />
          <Text style={TAGLINE} text="No Advert Decline" />
          </View>
        </View>
      </View>

      
    )
  },
)


