import React, { FC } from "react"
import { ImageStyle, TouchableOpacity, TextStyle, View, ViewStyle } from "react-native"
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
  marginTop: spacing[7],
  textAlign: "left",
  marginBottom: spacing[1],
  color: color.palette.black,
}

const TAGLINE: TextStyle = {
  color: "#BAB6C8",
  fontSize: 17,
  marginTop: spacing[1],
  marginLeft: spacing[2],
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
export const PasswordReset: FC<StackScreenProps<NavigatorParamList, "passwordreset">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("forgetpassword")

    return (
      <View style={FULL}>
        {/* <GradientBackground colors={["#422443", "#281b34"]} /> */}
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            // headerTx="demoScreen.howTo"
            leftIcon="back"
            // onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />

          <Icon icon="check" style={IGNITE} onPress={() => navigation.navigate("forgetpassword")} />
          <Text style={TITLE} preset="header" text="Password Reset" />
          <Text style={TAGLINE} text="Your password has been successfully reset. Click below to login magically." />

          <View>
            <Button
              style={DEMO}
              textStyle={DEMO_TEXT}
              text="Continue"
              //   onPress={demoReactotron} ???????????
            />

          </View>
          <View style={ROW}>
            <TouchableOpacity onPress={() => navigation.navigate("newpassword")}>
              <Icon icon="roundkey" style={BOTTOM} />
            </TouchableOpacity>
            <Text style={TAGLINE} text="Back to Sign in" />
          </View>
        </Screen>
      </View>
    )
  },
)
