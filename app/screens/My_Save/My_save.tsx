import React, { FC, useEffect, useState } from "react"
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
  FlatList,
  SafeAreaView,
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
import useStore from "../../models/store"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { authService } from "../../services/api"
import { ProductMiniCard } from "../../components/ProductMiniCard/ProductMiniCard"


const BOLD: TextStyle = { fontWeight: "bold" }

const FULL: ViewStyle = {
  //   backgroundColor: color.palette.white,
  backgroundColor: "#FFFFFF",
  flex: 1,
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
  marginTop: spacing[6],

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
  marginTop: spacing[2],

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
const MAINCARD3: ViewStyle = {
  marginTop: spacing[5],

  //   backgroundColor: color.palette.white,
  //   borderWidth: 4,
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
  flexDirection: "column",
  justifyContent: "space-between",
  marginLeft: spacing[5],
}
const ROW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  // marginLeft: spacing[5],
  // borderWidth:3,
  width: "68%",
}
const ROW1: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  // marginLeft: spacing[5],
  // borderWidth:3,
  width: "64%",
}
const ROW3: ViewStyle = {
  flexDirection: "row",
  // justifyContent:"space-between",
  // marginLeft: spacing[5],
  // borderWidth:3,
  // width:"100%",

  marginLeft: "40%",
}
const DETAIL: ViewStyle = {
  paddingHorizontal: spacing[5],
}

const MYSAVE: TextStyle = {
  ...BOLD,
  fontSize: 17,
  color: color.palette.black,
}
const TEXT1: TextStyle = {
  ...BOLD,
  fontSize: 17,
  color: color.palette.black,
}
const TEXT2: TextStyle = {
  fontSize: 12,
  color: color.palette.lightGrey,
}
const TEXTT: TextStyle = {
  marginTop: Negativespacing[2],
  fontSize: 12,
  color: color.palette.lightGrey,
}
const TEXT3: TextStyle = {
  ...BOLD,
  marginTop: spacing[1],
  fontSize: 20,
  color: color.palette.buttonBlue,
}
const TEXT4: TextStyle = {
  fontSize: 17,
  marginTop: Negativespacing[1],
  marginBottom: spacing[5],

  color: color.palette.lightGrey,
  marginLeft: "2%",
  // marginRight:"auto"
}

const CLEARALL: TextStyle = {
  color: color.palette.angry,
}

export const MySave: FC<StackScreenProps<NavigatorParamList, "mysave">> = observer(
  ({ navigation }) => {
    const { token } = useStore()

    // console.log("Mesages token----->", token)
    const [data, setdata] = useState([])

    // useEffect(() => {
    //   if (token === "") {
    //     navigation.replace("signin")
    //   }
    // })

    const mySave = async () => {
      try {
        const response = await authService.getSaveList()
        console.log("my save ====>", response.data.items.data)
        console.log(response.data.items.data[0].picture)
        setdata(response.data.items.data)
        //  data.map((e)=>console.log("204==> ",e.title))
      } catch (error) {
        console.log(error)
      }
    }
    const deleteSave = async (id:any) => {
      try {
        const response = await authService.delSaveList(id)
        console.log("delete ====>", response)
       
        //  data.map((e)=>console.log("204==> ",e.title))
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      mySave()
    }, [])

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
          <Text style={MYSAVE} text="My save" />
          <Text style={CLEARALL} text="Clear All" />
        </View>
        <View style={DETAIL}>
          <ScrollView style={{ padding: 5 }}>
            {data.map((e) => {
              return (
                <View style={MAINCARD}>
                  <View style={CARD}>
                    <View>
                      <Image source={require("./CAR.png")} />
                    </View>
                    <View style={COLOUM}>
                      <TouchableOpacity onPress={()=>{
                        deleteSave(e.id)
                      }}>
                        <View style={ROW}>
                          <Text style={TEXT1} text={`${e.title ? e.title : "Dodge Charger"}`} />
                          <Image source={require("./cross.png")} />
                        </View>
                      </TouchableOpacity>

                      <Text style={TEXT2} text={`${e.description.slice(3, 12)}`} />
                      {/* <Text style={TEXTT} text="& Discontinued Models" /> */}
                      <Text style={TEXT3} text={`$${e.price ? e.price : "400,25"}`} />
                    </View>
                  </View>
                  <View style={ROW3}>
                    <Image source={require("./location.png")} />
                    <Text style={TEXT4} text={`${e.country_code ? e.country_code : "US"}`} />
                  </View>
                </View>
              )
              // console.log("243==> ",e.title)
            })}

            {/* <View style={MAINCARD}>
              <View style={CARD}>
                <View>
                  <Image source={require("./CAR.png")} />
                </View>
                <View style={COLOUM}>
                  <View style={ROW}>
                    <Text style={TEXT1} text={`${title1?title1:"Dodge Charger"}`} />
                    <Image source={require("./cross.png")} />
                  </View>
                  <Text style={TEXT2} text={`${discript1?discript1:"Dodge Charger - SRT8 - 875X"}`}  />
              
                  <Text style={TEXT3} text={`$${price1?price1:"400,25"}`} />
                </View>
              </View>
              <View style={ROW3}>
                <Image source={require("./location.png")} />
                <Text style={TEXT4} text={`${country1?country1:"US"}`} />
              </View>
            </View> */}
            {/* <View style={MAINCARD2}>
              <View style={CARD}>
                <View>
                  <Image source={require("./CAR.png")} />
                </View>
                <View style={COLOUM}>
                  <View style={ROW}>
                    <Text style={TEXT1} text="Dodge Charger" />
                    <Image source={require("./cross.png")} />
                  </View>
                  <Text style={TEXT2} text="Dodge Charger - SRT8 - 875X " />
                  <Text style={TEXTT} text="Dodge" />
                  <Text style={TEXT3} text="$400,25" />
                </View>
              </View>
              <View style={ROW3}>
                <Image source={require("./location.png")} />
                <Text style={TEXT4} text="Iorin South" />
              </View>
            </View>
            <View style={MAINCARD3}>
              <View style={CARD}>
                <View>
                  <Image source={require("./CAR.png")} />
                </View>
                <View style={COLOUM}>
                  <View style={ROW1}>
                    <Text style={TEXT1} text="Gearbox" />
                    <Image source={require("./cross.png")} />
                  </View>
                  <Text style={TEXT2} text="AFX Precision Planetary Gearbox" />
                  <Text style={TEXT3} text="$173.41" />
                </View>
              </View>
              <View style={ROW3}>
                <Image source={require("./location.png")} />
                <Text style={TEXT4} text="USA" />
              </View>
            </View> */}
          </ScrollView>
        </View>
      </View>
    )
  },
)
