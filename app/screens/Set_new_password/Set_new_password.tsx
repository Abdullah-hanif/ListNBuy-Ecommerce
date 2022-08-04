import React, { FC, useState } from "react"
import { ImageStyle, Platform, TextStyle, View, ViewStyle } from "react-native"
import {
  BulletItem,
  Button,
  Header,
  Text,
  Screen,
  AutoImage as Image,
  GradientBackground, Icon, TextField,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"

import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { authService } from "../../services/api"

// import img from "../../components/icon/icons/key.png"
const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
  color: color.palette.black
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
  fontSize: 37,
  lineHeight: 38,
  textAlign: "left",
  marginBottom: spacing[1],
  color: color.palette.black
}

const TAGLINE: TextStyle = {
  color: "#BAB6C8",
  fontSize: 16,
  marginTop: spacing[1],
  marginLeft: spacing[2],
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
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
  
  
}
const DEMO: ViewStyle = {
  marginTop: spacing[5],
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
  backgroundColor: color.palette.white,
  borderRadius: 9,


}
const ROW2: TextStyle = {
  flexDirection: "row",

}
const TEXT: TextStyle = {
  color: color.palette.black
}

const LOCK: ImageStyle = {
  alignSelf: "flex-end",
}
const LOCKMOVE: TextStyle = {
  width: "50%",
  alignSelf: "center",

}


export const NewPassword: FC<StackScreenProps<NavigatorParamList, "newpassword">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("checkemail")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("");
    const [load, setLoad] = useState(false);
    const forgetpassword = async () => {
      try {
        setLoad(true)
        const form = new FormData()
        form.append("password", password)
        form.append("password_confirmation", confirmpassword)
        const response = await authService.forgetpassword(form)
        console.log(response?.response)
        if (response?.status === 200) {
          console.log("response ====>", response)
          alert("Password reset")
          setLoad(false)
          return
        }
        if (response?.response?.status) {
        
          alert(response?.response?.data?.message)
        } else {
          alert("something went wrong!")
        }
        setLoad(false)
      
      } catch (err) {
        setLoad(false)
        console.log(err)
        alert("something went wrong!")
      }
    }


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
          <Text style={TITLE} preset="header" text=" Set a new password?" />
          <Text style={TAGLINE} text="Your new password must be different from the previously used password" />
          <View >
            <Text style={TAG} text="Password" />
            <View  style={ROW}>
            <TextField style={INPUT}
              secureTextEntry={true}
              placeholder="Create password"
              value={password}
              onChangeText={(e) => setPassword(e)}
              inputStyle={TEXT}
            />
                        <View style={LOCKMOVE}>

            <Icon icon="lock" style={LOCK} />
            </View>
            </View>
            <Text style={TAG2} text="Confirm password" />
            <View style={ROW}>

            <TextField style={INPUT}
              secureTextEntry={true}
              value={confirmpassword}
              onChangeText={(e) => setConfirmPassword(e)}
              placeholder="Create password"
              inputStyle={TEXT}
            />
            <View style={LOCKMOVE}>
            <Icon icon="lock" style={LOCK} />
            </View>
            </View>


          </View>

          <View>
            <Button
              style={DEMO}
              textStyle={DEMO_TEXT}
              text="Reset password"
              load={load}
              onPress={forgetpassword}
              // onPress={() => navigation.navigate("passwordreset")}

            />
            <Text style={HINT} />
          </View>
          <View style={ROW2}>
            <Icon icon="roundkey" style={BOTTOM} />
            <Text style={TAGLINE} text="Back to Sign in" />
          </View>
        </Screen>

      </View>
    )
  },
)
