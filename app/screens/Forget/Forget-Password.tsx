import React, { FC } from "react"
import { ImageStyle, Platform, TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
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

// import img from "../../components/icon/icons/key.png"
const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
  color: color.palette.black,
  // backgroundColor: color.palette.white,
}
const HEADER_TITLE: TextStyle = {
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
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
  lineHeight: 38,
  textAlign: "left",
  marginBottom: spacing[1],
  color: color.palette.black,
}

const TAGLINE: TextStyle = {
  color: "#BAB6C8",
  fontSize: 20,
  marginTop: spacing[1],
  marginLeft: spacing[2],
  lineHeight: 26,
  marginBottom: spacing[4] + spacing[1],
}
const TAG: TextStyle = {
  fontSize: 20,
  color: color.palette.black,
  marginTop: spacing[0],
  lineHeight: 22,
}
const INPUT: TextStyle = {
  marginTop: Negativespacing[2],
  color: color.palette.black,
}
const DEMO: ViewStyle = {
  marginTop: spacing[5],
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.buttonBlue,
}
const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 20,
  letterSpacing: 2,
}
const HINT: TextStyle = {
  color: "#BAB6C8",
  fontSize: 12,
  lineHeight: 15,
  marginVertical: spacing[2],
}
const BOTTOM: ImageStyle = {
  marginTop: spacing[1],
  marginBottom: spacing[3],
  alignSelf: "flex-start",
  width: 24,
  height: 24,
}
const ROW: TextStyle = {
  flexDirection: "row",
}
const TEXT: TextStyle = {
  color: color.palette.black,
}
export const ForgetPassword: FC<StackScreenProps<NavigatorParamList, "forgetpassword">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("checkemail")

    return (
      <View style={FULL}>
        {/* <GradientBackground colors={["#422443", "#281b34"]} /> */}
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            // headerTx="demoScreen.howTo"
            leftIcon="back"
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />

          <Icon icon="forgetkey" style={IGNITE} />
          <Text style={TITLE} preset="header" text="Forget Password?" />
          <Text style={TAGLINE} text="No worries, we”ll send you reset instructions" />
          <Text style={TAG} text="Email" />

          <TextField style={INPUT} placeholder="example@gmail.com " inputStyle={TEXT} />
          <View>
            <Button
              style={DEMO}
              textStyle={DEMO_TEXT}
              text="Reset password"
              onPress={() => navigation.navigate("checkemail")}
            />
            <Text style={HINT} />
          </View>
            <TouchableOpacity style={ROW} onPress={() => navigation.navigate("signin")}>
              <Icon icon="roundkey" style={BOTTOM} />
              <Text style={TAGLINE} text="Back to Sign in" />
            </TouchableOpacity>
        </Screen>
      </View>
    )
  },
)
