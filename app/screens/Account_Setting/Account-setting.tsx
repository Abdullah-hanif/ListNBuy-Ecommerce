import React, { FC, useState } from "react"
import {
  ImageStyle, TouchableOpacity, TextStyle, View, ViewStyle, ColorPropType, Dimensions,
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
import { authService } from "../../services/api"

import { NavigatorParamList } from "../../navigators"
import { color, spacing, Negativespacing } from "../../theme"

import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import SelectDropdown from "react-native-select-dropdown"




const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: "#FFFFFF",


}
const HALF: ViewStyle = {
  borderBottomRightRadius: 30,
  borderBottomLeftRadius: 30,
  backgroundColor: color.startButton,
  height: "14%",
  // :color.palette.black

}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[0],    // marginTop:spacing[7]

}

const IGNITE: ImageStyle = {
  position: "absolute",
  marginTop: "30%",
  width: 95,
  height: 7,
  marginLeft: spacing[5],
}
const IGNITE2: ImageStyle = {
  marginTop: spacing[4],
  marginLeft: "22%",

}

const HEADERROW: ViewStyle = {
  marginVertical: spacing[8],
  marginHorizontal: spacing[5],
  // marginBottom: spacing[5],
  flexDirection: "row",
  height: "100%",
  justifyContent: 'space-between'
}
const HEADERTITLE: TextStyle = {

  height: "100%",
  marginRight: spacing[8],
  marginTop: Negativespacing[2]

}
const HEADERBTN: TextStyle = {
  height: "100%",
  color: color.primary,
  marginTop: Negativespacing[2]

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
  // borderWidth: 5,



}
const TEXT: TextStyle = {
  color: color.palette.black,
  borderWidth: 1,
  borderColor: color.palette.buttonBlue,
  backgroundColor: "#F3F4F8",
  borderRadius: 7,

}

const DETAIL: ViewStyle = {
  marginVertical: spacing[6],
  marginHorizontal: spacing[6],
  // marginBottom: spacing[5],


}
const BOTTOM: ViewStyle = {
  marginTop: Negativespacing[4]


}
const TWOIMG: ViewStyle = {
  marginTop: Negativespacing[8],
  marginRight: spacing[2],
}

export const AccountSetting: FC<StackScreenProps<NavigatorParamList, "accountsetting">> = ({
  navigation,
}) => {
  const { height } = Dimensions.get("screen")

  const nextScreen = () => navigation.navigate("forgetpassword")
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const Sex = ["Male", "Female"]

    const [Fname, setFirstName] = useState("")
    const [Lname, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [loc, setLoc] = useState("")
    const [sex, setSex] = useState("")
    const [errors, setErros] = useState<any>({})
    const [load, setLoad] = useState(false)
  
    const Account = async () => {
    const InputData: any = {
      Fname,
        Lname,
        email,
        phone,
        loc:'karachi',
        sex:'male',
    }

    console.log("Accont ============> ", InputData)
    console.log(InputData.Fname);
    
    try {
      setLoad(true)
      const response = await authService.settings()
      console.log(response.data)
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
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>

        <View style={HALF}>
          <View style={HEADERROW}>

            <Icon icon="back" />
            <Text style={HEADERTITLE} preset="header" text="Account Settings" />
            <TouchableOpacity onPress={Account}>
              <Text style={HEADERBTN} preset="header" text="Done" />
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require("../Profile-Screen/dp.png")}
          style={IGNITE}
        />

        <Image
          source={require("./camera.png")}
          style={IGNITE2}
        />

        <View style={DETAIL}>
          <Text style={TAG} text="First Name" />
          <View  >
            <TextField style={INPUT}
              placeholder="First name"
              inputStyle={TEXT}
              value={Fname}
              error={errors.Fname}
              onChangeText={(e) => setFirstName(e)}
              onChange={handleRemoveErr}
              editable={false} 


            />

          </View>
          <Text style={TAG2} text="Last Name" />
          <View >

            <TextField style={INPUT}
              placeholder="Last name"
              inputStyle={TEXT}
              value={Lname}
              error={errors.Lname}
              onChangeText={(e) => setLastName(e)}
              onChange={handleRemoveErr}
              editable={false} 
            />

          </View>


        </View>
        <View style={BOTTOM}>

          <View style={{
            backgroundColor: "#FFFFFF",
            marginTop: 7,
            height: height
          }}>
            <View
              style={{
                // paddingHorizontal: 15,
                marginHorizontal: spacing[6],

                backgroundColor: "#FFFFFF",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  color: "#3A456E",
                  marginBottom: 10,
                }}
              >
                Location
              </Text>
              <SelectDropdown
                data={countries}
                disabled={true}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item
                }}
                dropdownIconPosition={"right"}
                renderDropdownIcon={() => {
                  return (
                    <Image
                      source={require("../../../assets/images/dropdown.png")}
                      style={{
                        marginTop: 6,
                      }}
                    />
                  )
                }}
                buttonStyle={{
                  width: "100%",
                  backgroundColor: "#F3F4F8",
                  borderWidth: 1,
                  borderColor: "#2A84F2",
                  borderRadius: 8,
                }}
                buttonTextStyle={{
                  position: "absolute",
                  left: 220,
                  right: 0,
                }}
                defaultButtonText={"Location"}
              />
            </View>
            <View
              style={{
                marginHorizontal: spacing[6],
                backgroundColor: "#FFFFFF",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  color: "#3A456E",
                  marginBottom: 10,
                }}
              >
                Sex

              </Text>
              <SelectDropdown
                data={Sex}
                disabled={true}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item
                }}
                dropdownIconPosition={"right"}
                renderDropdownIcon={() => {
                  return (
                    <Image
                      source={require("../../../assets/images/dropdown.png")}
                      style={{
                        marginTop: 6,
                      }}
                    />
                  )
                }}
                buttonStyle={{
                  width: "100%",
                  backgroundColor: "#F3F4F8",
                  borderWidth: 1,
                  borderColor: "#2A84F2",
                  borderRadius: 8,
                }}
                buttonTextStyle={{
                  position: "absolute",
                  left: 220,
                  right: 0,
                }}
                defaultButtonText={"Sex"}
              />
            </View>
            <View
              style={{
                marginHorizontal: spacing[6],
                backgroundColor: "#FFFFFF",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  color: "#3A456E",
                  marginBottom: 10,
                }}
              >
                Email

              </Text>
              <TextField style={INPUT}
                placeholder="Email"
                inputStyle={TEXT}
                value={email}
                error={errors.email}
                onChangeText={(e) => setEmail(e)}
                onChange={handleRemoveErr}
                editable={false} 
              />
            </View>
            <View
              style={{
                marginHorizontal: spacing[6],
                backgroundColor: "#FFFFFF",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  color: "#3A456E",
                  marginBottom: 10,
                }}
              >
                Phone Number

              </Text>
              <TextField style={INPUT}
            placeholder="Phone Number"
            inputStyle={TEXT}
            value={phone}
            error={errors.phone}
            onChangeText={(e) => setPhone(e)}
            onChange={handleRemoveErr}
            keyboardType={'numeric'}
            editable={false} 
            
          />
            </View>

          </View>
        </View>



      </Screen>
    </View>



  )
}
