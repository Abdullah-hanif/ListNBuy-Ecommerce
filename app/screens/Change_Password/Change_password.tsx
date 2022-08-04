import React, { FC, useState } from "react"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Text, Screen, Icon, TextField } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"
import { authService } from "../../services/api"

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
  height: "40%",
  // :color.palette.black
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[0], // marginTop:spacing[7]
}
const HEADER: ViewStyle = {
  marginVertical: spacing[8],
  justifyContent: "space-around",

  flexDirection: "row",
}
const HEADER1: ViewStyle = {
  // marginVertical:Negativespacing[2],
  //     justifyContent:"center",
  marginTop: Negativespacing[2],
  marginRight: spacing[8],
  //  flexDirection:"row",
}
const HEADER2: TextStyle = {
  marginTop: spacing[3],
  justifyContent: "center",
  marginLeft: spacing[3],
}

const DETAIL: ViewStyle = {
  marginTop: spacing[3],
  marginHorizontal: spacing[5],
}
const TAG: TextStyle = {
  fontSize: 20,
  color: color.palette.black,
  marginTop: spacing[3],
  marginBottom: spacing[3],
  lineHeight: 22,
}
const TAG2: TextStyle = {
  fontSize: 20,
  color: color.palette.black,
  marginTop: spacing[5],
  marginBottom: spacing[3],

  lineHeight: 22,
}
const INPUT: TextStyle = {
  marginTop: Negativespacing[5],
  color: color.palette.black,
  width: "100%",
}
const ROW: TextStyle = {
  flexDirection: "row",
  borderRadius: 9,
  backgroundColor: "#F3F4F8",
}

const TEXT: TextStyle = {
  color: color.palette.black,
  width: "90%",
}

const LOCK: ImageStyle = {
  alignSelf: "flex-end",
}
const LOCKMOVE: ImageStyle = {
  width: 0,
  paddingLeft: Negativespacing[6],
  alignSelf: "center",
}

const DEMO: ViewStyle = {
  marginTop: spacing[5],
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.buttonBlue,
  borderRadius: 10,
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
export const ChangePassword: FC<StackScreenProps<NavigatorParamList, "changepassword">> = observer(
  ({ navigation }) => {
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const changepassword = async (password, passwordConfirmation) => {
      console.log("reset password calling", password, passwordConfirmation)
      const form = new FormData()
      form.append("password_confirmation", passwordConfirmation)
      form.append("password", password)
      try {
        const response = await authService.forgetpassword(form)
        console.log("response in here", response)
        if (response?.status === 200) {
          alert("password reset successfully")
          return
        }
        if (response?.status) {
          alert(response?.data?.message)
        } else {
          alert("something went wrong!")
        }
      } catch (err) {
        console.log(err)
        alert("something went wrong!")
      }
    }

    return (
      <View style={FULL}>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <View style={HALF}>
            <View style={HEADER}>
              <Icon icon="back" />
              {/* <View style={COLOUM}>  */}
              <View>
                <Text style={HEADER1} preset="header" text="Change Password" />
                <Text style={HEADER2} text="Type your new password" />
              </View>
            </View>
          </View>
          <View style={DETAIL}>
            <Text style={TAG} text="Password" />
            <View style={ROW}>
              <TextField
                style={INPUT}
                secureTextEntry={true}
                placeholder="Create password"
                inputStyle={TEXT}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={LOCKMOVE}>
                <Icon icon="lock" style={LOCK} />
              </View>
            </View>
            <Text style={TAG2} text="Confirm password" />
            <View style={ROW}>
              <TextField
                style={INPUT}
                secureTextEntry={true}
                placeholder="Create password"
                inputStyle={TEXT}
                onChangeText={(text) => setPasswordConfirmation(text)}
              />
              <View style={LOCKMOVE}>
                <Icon icon="lock" style={LOCK} />
              </View>
            </View>

            <View>
              <Button
                style={DEMO}
                textStyle={DEMO_TEXT}
                text="Continue"
                onPress={() => navigation.navigate("passwordreset")}
              />
              <Text style={HINT} />
            </View>
          </View>
        </Screen>
      </View>
    )
  },
)
