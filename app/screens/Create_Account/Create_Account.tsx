import React, { FC, useState } from "react"
import { ImageStyle, TextStyle, View, ViewStyle, Dimensions, TouchableOpacity } from "react-native"
import { Button, Text, AutoImage as Image, Icon, TextField } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"
import { ScrollView } from "react-native-gesture-handler"
import { StackScreenProps } from "@react-navigation/stack"
import { authService } from "../../services/api"
const BOLD: TextStyle = { fontWeight: "bold" }

const FULL: ViewStyle = {
  marginTop: spacing[8],
  marginBottom: 110,

  paddingHorizontal: spacing[5],

}
const TAGLINE: TextStyle = {
  ...BOLD,
  color: color.palette.black,
  fontSize: 40,
  marginTop: spacing[0],
  marginLeft: spacing[2],
  lineHeight: 40,
  marginBottom: spacing[4] + spacing[1],
}

const EMAIL: TextStyle = {
  marginTop: spacing[3],
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
  marginTop: spacing[3],
  color: color.palette.black,
  fontSize: 23,
  marginLeft: spacing[0],
  lineHeight: 30,
  marginBottom: spacing[3],
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
  marginTop: spacing[7],
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

const FOOTER: ViewStyle = {
  marginTop: Negativespacing[8],
  flexDirection: "row",
  marginBottom: spacing[8],
}
const ContainerSignup: any = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 10,
  paddingVertical: 10,
  backgroundColor: "#FFFFFF",
}
const margin19: any = {
  marginTop: 13,
}
export const CreateAccount: FC<StackScreenProps<NavigatorParamList, "createaccount">> = ({
  navigation,
}) => {
  const { height } = Dimensions.get("screen")

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErros] = useState<any>({})
  const [load, setLoad] = useState(false)
  const signup = async () => {
    const eventData: any = {
      name,
      email,
      password,
      password_confirmation: password,
      accept_terms: true,
      phone,
      country_code: 92,
    }

    // console.log("signup => ", eventData)
    try {
      setLoad(true)
      const response = await authService.signup(eventData)
      console.log(response)
      const err = response?.response?.data?.errors
      if (err) {
        setErros(err)
        setLoad(false)
        return
      }
      const data = response?.data
      if (data?.success) {
        alert(data?.message)
        navigation.navigate("signin")
      }
      setLoad(false)
      // let response = await axios
      //   .post(
      //     "https://listnbuy.com/api/auth/register",
      //     {
      //       ...eventData,
      //     },
      //     {
      //       headers: headers,
      //     },
      //   )
      //   .then((response: any) => {
      //     console.log("response from server", response)
      //   })
      //   .catch((err: any) => {
      //     console.log("error  from    server", err)
      //   })
      // console.log("line 168 res", response)
    } catch (error) {
      console.log("line 168 res", error)
    }
  }
  const handleRemoveErr = () => setErros({})

  return (
    <View>
      <View style={ContainerSignup}>
        <Image source={require("../../../assets/images/backarrow.png")} style={margin19} />
      </View>
      <ScrollView style={{ height }}>
        <View style={FULL}>
          <View>
            <Text style={TAGLINE} text="Create an account" />
          </View>
          <View>
            <Text style={EMAIL} text="Name" />
            <TextField
              style={INPUT}
              value={name}
              placeholder="Enter Your Name"
              inputStyle={TEXT}
              error={errors.name}
              onChangeText={(e) => setName(e)}
              onChange={handleRemoveErr}
            />
          </View>
          <View>
            <Text style={EMAIL} text="Phone" />
            <TextField
              onChange={handleRemoveErr}
              style={INPUT}
              value={phone}
              placeholder="Enter Your Phone"
              inputStyle={TEXT2}
              error={errors.phone}
              onChangeText={(e) => setPhone(e)}
            />
          </View>
          <View>
            <Text style={EMAIL} text="Email" />
            <TextField
              onChange={handleRemoveErr}
              style={INPUT}
              value={email}
              placeholder="Enter Your Email"
              error={errors.email}
              inputStyle={TEXT2}
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <Text style={TAG2} text="Password" />

          <View style={ROW}>
            <TextField
              onChange={handleRemoveErr}
              style={INPUT}
              secureTextEntry={true}
              placeholder="Password"
              inputStyle={TEXT2}
              // error={errors.password}
              onChangeText={(e) => setPassword(e)}
            />
            <View style={LOCKMOVE}>
              <Icon icon="lock" style={LOCK} />
            </View>
          </View>
          <View>
            <Button
              style={DEMO}
              textStyle={DEMO_TEXT}
              text="Create your account"
              onPress={signup}
              load={load}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("signin")} style={FOOTER}>
            <Text style={TAG4} text="Already a member?" />
            <Text style={TAG5} text="Sign in" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
