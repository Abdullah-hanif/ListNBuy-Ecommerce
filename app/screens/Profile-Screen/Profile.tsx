import React, { FC, useEffect } from "react"
import { ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text, Screen, AutoImage as Image } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import useStore from "../../models/store"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StackActions } from "@react-navigation/native"

export const Profile: FC<StackScreenProps<NavigatorParamList, "profile">> = ({ navigation }) => {
  // const { token } = useStore()

  // useEffect(() => {

  //   if (token === "") {
  //     navigation.replace("signin")
  //   }
  // })

  const { removeUser } = useStore()

  const handleLogout = () => {
    try {
      console.log("loggin out...")
      removeUser()
      AsyncStorage.removeItem("token")
      navigation.dispatch(StackActions.popToTop())
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <View style={HALF}>
          <Text style={TITLE} preset="header" text="Profile" />
          <View style={BOX}>
            <View style={ROW}>
              <Image source={require("../Profile-Screen/edit.png")} style={EDIT} />
            </View>
            <Image source={require("../Profile-Screen/dp.png")} style={IGNITE} />
            <Text style={BOXTITLE} preset="header" text="James Williams" />
            <Text style={BOXTITLE2} text="@jameswilliams" />
          </View>
        </View>


        <View style={SIDE}>
          <TouchableOpacity style={ROW2} onPress={() => navigation.navigate("accountsetting")}>
              <Image source={require("../Profile-Screen/setting.png")} style={PIC} />
              <Text style={MAINHEADINACC} text="Account Settings" />
          </TouchableOpacity>

          <TouchableOpacity style={ROW2}onPress={() => navigation.navigate("activee")}>
              <Image source={require("../Profile-Screen/advice.png")} style={PIC} />
              <Text style={MAINHEADING} text="My Adverts" />
          </TouchableOpacity>

          <TouchableOpacity style={ROW2} onPress={() => navigation.navigate("notification")}>
              <Image source={require("../Profile-Screen/notification.png")} style={PIC} />
              <Text style={MAINHEADING} text="Notification" />
          </TouchableOpacity>

          <TouchableOpacity style={ROW2} onPress={() => navigation.navigate("Message")}>
              <Image source={require("../Profile-Screen/message.png")} style={PIC} />
              <Text style={MAINHEADING} text="Message" />
          </TouchableOpacity>

          <TouchableOpacity style={ROW2} onPress={() => navigation.navigate("Favourite")}>
              <Image source={require("../Profile-Screen/save.png")} style={PIC} />
              <Text style={MAINHEADING} text="My Save" />
          </TouchableOpacity>

          <TouchableOpacity style={ROW2} onPress={() => navigation.navigate("changepassword")}>
              <Image source={require("../Profile-Screen/save.png")} style={PIC} />
              <Text style={MAINHEADING} text="Change password" />
          </TouchableOpacity>

          <TouchableOpacity style={ROW2} onPress={handleLogout}>
            <Image source={require("../Profile-Screen/logout.png")} style={PIC} />
            <Text style={MAINHEADINGSIGN} text="Sign Out" />
          </TouchableOpacity>
        </View>
      </Screen>
    </View>
  )
}

const FULL: ViewStyle = {
  flex: 2,
}
const HALF: ViewStyle = {
  borderBottomRightRadius: 30,
  borderBottomLeftRadius: 30,
  backgroundColor: color.startButton,
  marginBottom: spacing[4],
  height: "30%",
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[0],
  // marginTop:spacing[7]
}
const BOX: ViewStyle = {
  backgroundColor: color.palette.white,
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 15,
  marginTop: spacing[0],
  width: "80%",
  height: "90%",
}

const IGNITE: ImageStyle = {
  marginTop: Negativespacing[7],
  marginBottom: spacing[5],
  alignSelf: "center",
  width: 100,
  height: 100,
}
const PIC: ImageStyle = {
  alignSelf: "flex-start",
  width: 30,
  height: 30,
}
const EDIT: ImageStyle = {
  marginTop: spacing[5],
  alignItems: "flex-start",
  marginRight: spacing[5],

  width: 40,
  height: 40,
}

const TITLE: TextStyle = {
  fontSize: 30,
  lineHeight: 38,
  marginTop: spacing[3],
  textAlign: "center",
  marginBottom: spacing[7],
  color: color.palette.white,
}
const BOXTITLE: TextStyle = {
  fontSize: 20,
  textAlign: "center",
  marginBottom: spacing[4],
  color: color.palette.black,
}
const BOXTITLE2: TextStyle = {
  fontSize: 15,
  textAlign: "center",
  marginBottom: spacing[4],
  color: color.palette.black,
}
const MAINHEADING: TextStyle = {
  fontSize: 20,
  textAlign: "right",
  paddingLeft: spacing[4],
  marginBottom: spacing[4],
  color: color.palette.black,
}
const MAINHEADINGSIGN: TextStyle = {
  fontSize: 20,
  textAlign: "right",
  paddingLeft: spacing[4],
  marginBottom: spacing[4],
  color: color.primary,
}
const MAINHEADINACC: TextStyle = {
  fontSize: 20,
  textAlign: "right",
  paddingLeft: spacing[4],
  marginBottom: spacing[4],
  color: color.startButton,
}
const ROW: TextStyle = {
  flexDirection: "row-reverse",
}
const ROW2: TextStyle = {
  flexDirection: "row",
  marginVertical: spacing[2],
}
const SIDE: TextStyle = {
  marginTop: spacing[8],
  flex: 3,
  paddingHorizontal: spacing[6],
  // backgroundColor:color.palette.black
}
