import React, { FC, useState } from "react"
import {
  ImageStyle,
  TouchableOpacity,
  TextStyle,
  View,
  ViewStyle,
  ColorPropType,
  Dimensions,
  Alert,
  ScrollView,
  Image,
} from "react-native"
import {
  BulletItem,
  Button,
  Header,
  Text,
  Screen,
  GradientBackground,
  Icon,
  TextField,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"

import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"

const BOLD: TextStyle = { fontWeight: "bold" }

const FULL: ViewStyle = {
//   backgroundColor: color.palette.white,
backgroundColor: "#FFFFFF",
flex:1,
}
const CARD: ViewStyle = {
    marginVertical: spacing[4],
    marginHorizontal: spacing[4],
    
//   backgroundColor: color.palette.white,
    //  borderWidth: 4,
    // borderColor: color.palette.black,
    flexDirection: "row",
    backgroundColor: color.palette.white,
    justifyContent: "flex-start",

    // shadowColor: color.palette.black,
   

}
const MAINCARD: ViewStyle = {
    marginTop: spacing[8],
   
//   backgroundColor: color.palette.white,
    //  borderWidth: 4,
    // borderColor: color.palette.black,
    backgroundColor: color.palette.white,
    shadowColor: color.palette.buttonBlue,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    

}
const MAINCARD2: ViewStyle = {
    marginTop: spacing[5],
   
//   backgroundColor: color.palette.white,
    //  borderWidth: 4,
    // borderColor: color.palette.black,
    backgroundColor: color.palette.white,
    shadowColor: color.palette.buttonBlue,
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,

    

}

const COLOUM: ViewStyle = {
flexDirection:"column",
justifyContent: "space-between",
marginLeft: spacing[5],

}

const ROW1: ViewStyle = {
flexDirection:"row",
justifyContent:"flex-end",
marginLeft: spacing[5],
borderColor:color.palette.black,
width:"73%"
}

const DETAIL: ViewStyle = {
    paddingHorizontal: spacing[5],

}

const MYSAVE: TextStyle = {
  ...BOLD,
  fontSize: 20,
  color: color.palette.black,
}
const TEXT1 : TextStyle = {
    fontWeight:"600",
    marginTop: Negativespacing[3],
  fontSize: 17,
  lineHeight: 19,

  color: color.palette.black,
}
const TEXT2 : TextStyle = {
    fontWeight:"600",

    marginBottom: spacing[4],
  fontSize: 17,
  lineHeight: 19,

  color: color.palette.black,
}

const TEXT3 : TextStyle = {
  marginTop:spacing[1],
    fontSize: 14,
    lineHeight: 19,

  color: color.palette.lightGrey,
}


const CLEARALL: TextStyle = {
  color: color.palette.angry,
  fontSize: 17
}
const IMG : ImageStyle={
    justifyContent:"flex-end",
}
const IMG1 : ImageStyle={
    justifyContent:"flex-end",
    

}

export const Notification: FC<StackScreenProps<NavigatorParamList, "notification">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("forgetpassword")
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
          <Text style={MYSAVE} text="Notification" />
          <Text style={CLEARALL} text="Clear All" />
        </View>
        <View style={DETAIL}>
          <ScrollView style={{ padding: 5 }}>
            <View style={MAINCARD}>
            <View style={CARD}>
                <View>
                <Image source={require('./cargroup.png')} />
                </View>
                <View style={COLOUM}>
                <View style={ROW1}> 
                  <Image style={IMG1} source={require('../My_Save/cross.png')} />
                  </View>
                  <Text style={TEXT1} text="Check ads similar to  "/>
                  <Text style={TEXT2} text="your favourite"/>
                  <Text style={TEXT3} text="21/03/2021"/>

                </View>
            </View> 
          
            </View>
            <View style={MAINCARD2}>
            <View style={CARD}>
                <View>
                <Image source={require('./phoneGroup.png')} />
                </View>
                <View style={COLOUM}>
                    <View style={ROW1}> 
                  <Image style={IMG1} source={require('../My_Save/cross.png')} />
                  </View>
                  <Text style={TEXT1} text="Made a purchase from "/>
                  <Text style={TEXT2} text="any of these ads"/>
                  <Text style={TEXT3} text="Yesterday 10:35"/>

                </View>
            </View>
      
            </View>
          

          </ScrollView>
        </View>
      </View>
    )
  },
)
