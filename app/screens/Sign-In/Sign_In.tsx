import React, { FC, useState,useEffect } from "react"
import { ImageStyle, TouchableOpacity, TextStyle, View, ViewStyle, Dimensions } from "react-native"
import { Button, Text, AutoImage as Image, Icon, TextField } from "../../components"

import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"
import { ScrollView } from "react-native-gesture-handler"
import { StackScreenProps } from "@react-navigation/stack"
import { API, authService } from "../../services/api"
import useStore from "../../models/store"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const SignIN: FC<StackScreenProps<NavigatorParamList, "signin">> = ({ navigation }) => {
  const nextScreen = () => navigation.navigate("forgetpassword")
  const { height } = Dimensions.get("screen")
  const [email, setEmail] = useState("fasil.javed2@gmail.com")
  const [password, setPassword] = useState("12121212")
  const [load, setLoad] = useState(false)
  const { addUser } = useStore()
  const { token } = useStore()

  const login = async () => {
    console.log("login function calling")
    try {
      setLoad(true)
      const form = new FormData()
      form.append("email", email)
      form.append("password", password)
      const response = await authService.signin(form)
      console.log("response ====>", response)
      if (response?.status === 200) {
        console.log("=====>>>>>>>TOKEEN", token)
        addUser(response?.data, response?.data?.extra?.authToken)
        AsyncStorage.setItem("token", response?.data?.extra?.authToken)
        navigation.navigate("homePage")
        alert("Signed in")
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
  useEffect(()=>{
    setLoad(false)
  },[load])

  return (
    <View>
      <View style={Login}>
        <Image source={require("../../../assets/images/backarrow.png")} style={mrgin13} />
      </View>
      <ScrollView style={{ height: height - 200 }}>
        <View style={FULL}>
          <View>
            <Text style={TAGLINE} text="Sign in" />
            <Text style={TAGLINE1} text="Welcome we miss you!" />
          </View>
          <View>
            <Text style={EMAIL} text="Email" />
            <TextField
              style={INPUT}
              placeholder="Enter Your Email"
              inputStyle={TEXT}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <Text style={TAG2} text="Password" />

          <View style={ROW}>
            <TextField
              style={INPUT}
              secureTextEntry={true}
              placeholder="Password"
              inputStyle={TEXT2}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={LOCKMOVE}>
              <Icon icon="lock" style={LOCK} />
            </View>
          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate("forgetpassword")}>
            <Text style={TAG3} text="Forget Password?" />
          </TouchableOpacity>

          <View>
            <Button style={DEMO} textStyle={DEMO_TEXT} text="Sign in" onPress={login} load={load} />
          </View>
          <View style={BTNICON}>
            <TouchableOpacity style={BTN}>
              <Icon icon="google" style={ICON} />
              <Text style={DEMO_TEXT2} text="Sign in with Google" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("createaccount")} style={FOOTER}>
            <Text style={TAG4} text="Don’t have an account?" />
            <Text style={TAG5} text="Sign Up Now" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const BOLD: TextStyle = { fontWeight: "bold" }

const FULL: ViewStyle = {
  marginTop: spacing[8],
  paddingHorizontal: spacing[5],
}
const TAGLINE: TextStyle = {
  ...BOLD,
  color: color.palette.black,
  fontSize: 40,
  marginTop: spacing[0],

  lineHeight: 40,
  marginBottom: spacing[4] + spacing[1],
}
const TAGLINE1: TextStyle = {
  color: "#BAB6C8",
  fontSize: 22,
  lineHeight: 30,
  marginBottom: spacing[4] + spacing[1],
}
const EMAIL: TextStyle = {
  marginTop: spacing[5],
  color: color.palette.black,
  fontSize: 21,
  marginLeft: spacing[0],
  lineHeight: 30,
  marginBottom: spacing[3],
}

const TEXT: TextStyle = {
  color: color.palette.black,
  borderWidth: 2,
  borderColor: color.palette.buttonBlue,
  borderRadius: 8,
  paddingLeft: spacing[5],
}
const TEXT2: TextStyle = {
  paddingLeft: spacing[5],
  color: color.palette.black,
}
const INPUT: TextStyle = {
  marginTop: Negativespacing[5],
  color: color.palette.black,
}
const ROW: TextStyle = {
  flexDirection: "row",
  backgroundColor: color.palette.white,
  borderRadius: 9,
}
const LOCK: ImageStyle = {
  alignSelf: "flex-end",
  // marginRight: spacing[0],
}
const LOCKMOVE: TextStyle = {
  width: "96%",
  alignSelf: "center",
  position: "absolute",
}
const TAG2: TextStyle = {
  color: color.palette.black,
  fontSize: 23,
  marginLeft: spacing[0],
  lineHeight: 30,
  marginBottom: spacing[3],
}
const TAG3: TextStyle = {
  fontSize: 17,
  color: color.palette.buttonBlue,
  marginTop: spacing[5],
  marginBottom: spacing[3],
  paddingLeft: spacing[2],
  lineHeight: 22,
}
const TAG4: TextStyle = {
  fontSize: 15,
  color: color.palette.black,
  marginTop: spacing[5],
  marginBottom: spacing[3],
  paddingLeft: spacing[2],
  lineHeight: 22,
}
const TAG5: TextStyle = {
  fontSize: 15,
  color: color.palette.buttonBlue,
  marginTop: spacing[5],
  marginBottom: spacing[3],
  paddingLeft: spacing[2],
  lineHeight: 22,
}
const DEMO: ViewStyle = {
  marginTop: spacing[5],
  marginBottom: spacing[8],
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
const DEMO_TEXT2: TextStyle = {
  fontSize: 20,
  letterSpacing: 2,
  color: color.palette.black,
}
const FOOTER: ViewStyle = {
  marginTop: Negativespacing[0],
  flexDirection: "row",
  marginBottom: spacing[8],
}
const BTN: ViewStyle = {
  marginTop: Negativespacing[4],
  borderRadius: 9,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  borderWidth: 3,
  borderColor: color.palette.buttonBlue,
}
const BTNICON: ViewStyle = {
  marginTop: spacing[6],
  flexDirection: "row",
  height: "7%",
}
const ICON: ImageStyle = {
  marginLeft: spacing[3],
}

const Login: any = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: color.background,
}
const mrgin13: any = {
  marginTop: 13,
}
