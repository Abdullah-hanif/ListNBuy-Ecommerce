import React, { FC } from "react"
import {
  ImageStyle,
  TouchableOpacity,
  TextStyle,
  View,
  ViewStyle,
  ColorPropType,
  Dimensions,
} from "react-native"
import {
  BulletItem,
  Button,
  Header,
  Text,
  Screen,
  AutoImage as Image,
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
  flex: 1,

}
const HALF: ViewStyle = {
  borderBottomRightRadius: 30,
  borderBottomLeftRadius: 30,
  backgroundColor: color.startButton,
  height: "35%",
  // :color.palette.black
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[0], // marginTop:spacing[7]
}
const HEADER: ViewStyle = {
    marginVertical:spacing[8],
        justifyContent:"space-evenly",
     marginRight:spacing[8],
 flexDirection:"row",
 height:"100%"
}
const HEADER1: ViewStyle = {
    marginVertical:Negativespacing[2],

}
const DETAIL: ViewStyle = {
marginVertical:"10%",
marginHorizontal: spacing[6],
}


const IGNITE: ImageStyle = {
    marginTop: spacing[1],
    marginBottom: spacing[3],
    alignSelf: "center",
    width: 100,
    height: 100,
  }

  
  const TAGLINE: TextStyle = {
    color: "#BAB6C8",
    fontSize: 17,
    marginTop: spacing[1],
    marginLeft: spacing[2],
    lineHeight: 22,
    marginBottom: spacing[4] + spacing[1],
  }
  const TAGLINE1: TextStyle = {
    color: "#BAB6C8",
    fontSize: 17,
    marginTop: Negativespacing[3],
    marginLeft: spacing[8],
    lineHeight: 22,
    marginBottom: spacing[4] + spacing[1],
  }
  
  
  const DEMO: ViewStyle = {
    marginTop: spacing[5],
    marginBottom: spacing[8],
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: color.palette.buttonBlue,
    borderRadius: 10
  }
  const DEMO_TEXT: TextStyle = {
    ...BOLD,
    fontSize: 20,
    letterSpacing: 2,
  }

export const AccountPasswordReset: FC<StackScreenProps<NavigatorParamList, "accountpasswordreset">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("forgetpassword")

    return (
        <View style={FULL}>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <View style={HALF}>
            <View style={HEADER}>
              <Icon icon="back" />
                <Text  style={HEADER1} preset="header" text="Password Reset " />
            </View>
          </View>
          <View style={DETAIL}>
          <Icon icon="check" style={IGNITE} onPress={() => navigation.navigate("forgetpassword")} />
          <Text style={TAGLINE} text="Your password has been successfully reset." />
          <Text style={TAGLINE1} text="Click below to login magically." />

          <View>
            <Button
              style={DEMO}
              textStyle={DEMO_TEXT}
              text="Continue"
              //   onPress={demoReactotron}
            />

          </View>
          
          </View>
          </Screen>
          </View>
    )
  }
)