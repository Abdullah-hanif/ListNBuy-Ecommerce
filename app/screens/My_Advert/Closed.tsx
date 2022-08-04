import React, { FC, useState } from "react"
import {

  TextStyle,
  View,
  ViewStyle,


  ScrollView,

  ImageStyle,
  TouchableOpacity
} from "react-native"
import {

  Text,
  Icon,

} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing } from "../../theme"

import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { ProductMiniCard } from "../../components/ProductMiniCard/ProductMiniCard"
import { PopOver } from "../../components/Popover/PopOver"
import { authService } from "../../services/api"



const BOLD: TextStyle = { fontWeight: "bold" }

const FULL: ViewStyle = {
  //   backgroundColor: color.palette.white,
  backgroundColor: "#FFFFFF",
  flex: 1,
}

const DETAIL: ViewStyle = {
  paddingHorizontal: spacing[5],

}
const TITLE: ViewStyle = {
  flexDirection: "row",
  marginRight: "15%",

}
const TITLE2: ImageStyle = {
  flexDirection: "row",
  marginTop: spacing[1],

}
const POPOVER: ViewStyle = {
}

const MYSAVE: TextStyle = {
  ...BOLD,
  fontSize: 17,
  color: color.palette.black,
}
const MYSAVEE: TextStyle = {
  ...BOLD,
  // marginRight:"35%",
  fontSize: 17,
  color: color.palette.buttonBlue,
}


export const Closed: FC<StackScreenProps<NavigatorParamList, "closed">> = observer(
  ({ navigation }) => {
    const [data, setdata] = useState([])

    const handleClick = () => {
      navigation.navigate('activee')
    }
    const handleClick2 = () => {
      navigation.navigate('reviewing')
    }
    const handleClick3 = () => {
      navigation.navigate('decline')
    }
    const handleClick4 = () => {
      navigation.navigate('closed')
    }



    const Myadverts = async () => {
      try {
        const response = await authService.myAdverts()
      //  console.log("Response Data line 91",response?.data?.items?.data[0]?.category?.picture)
        //  setdata(response.data.items.data[0].category)
        setdata(response.data.items.data)
        //  data.map((e)=>console.log("204==> ",e.title))

      } catch (error) {
        console.log(error)
      }
    }
    Myadverts()




    return (
      <View style={FULL}>
        <ScrollView style={{ padding: 0 }}>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: spacing[6],
              backgroundColor: "#FFFFFF",
              paddingHorizontal: spacing[6],

            }}
          >
            <Icon icon="back" style={TITLE2} />
            <View style={TITLE}>
              <Text style={MYSAVE} text="My Adverts : " />
              <Text style={MYSAVEE} text="Closed (3)" />
            </View>
            <View style={POPOVER}>
              <TouchableOpacity >
                {/* <Entypo name="dots-three-vertical" size={20} /> */}
                <PopOver
                  onPress1={handleClick}
                  Text1={'Active'}

                  onPress2={handleClick2}
                  Text2={'Reviewing'}
                  onPress3={handleClick3}
                  Text3={'Decline'}
                  onPress4={handleClick4}
                  Text4={'Closed'}
                />



              </TouchableOpacity>
            </View>
          </View>
          {/* source={require('../../../assets/images/car.png') */}
          <View style={DETAIL}>
            <ScrollView>
              {data.map((e , index) => {
                // console.log("pictures let see =>", e.category.picture
                return (
                  <ProductMiniCard key={index}
                    // img={require('../../../assets/images/headphone.png')}
                    // img={`${e.user.photo_url}`}
                    img={e.user.photo_url}
                    txt1={`${e.category.name ? e.category.name : "Headphone"}`}
                    // txt1={`${e.title?e.title:"Headphone"}`}
                    txt2={`${e.description.slice(3, -4) ? e.description.slice(3, -4) : "AFX Precision Planetary Gearbox"}`}
                    txt3={''}
                    price={`${e.price ? e.price : "400,25"}`}
                    loc={`${e.country_code ? e.country_code : "US"}`}
                    // minbid={'Min Bid $20,025'}
                    minbid={`${e.minbid ? e.minbid : "$20,025"}`}
                    // maxbid={'Max Bid $30,025'}
                    maxbid={`${e.maxbid ? e.maxbid : "$30,025"}`}
                  />
                )
                console.log("243==> ", e.user.photo_url)
              })}






            </ScrollView>
            {/* <ProductMiniCard
              img={require('../../../assets/images/headphone.png')}
              txt1={`${e.title?e.title:"Dodge Charger"}`}
              txt2={'Red Solo 2 Wireless'}
              txt3={''}
              price={'$3,90.00'}
              loc={'Lagos'}
              minbid={'Min Bid $20,025'}
              maxbid={'Max Bid $30,025'}
            />
            <ProductMiniCard
              img={require('../../../assets/images/AFXR.png')}
              txt1={'Gearbox'}
              txt2={'AFX Precision Planetary Gearbox'}
              txt3={''}
              price={'$173.41'}
              loc={'USA'}
              minbid={'Min Bid $20,025'}
              maxbid={'Max Bid $30,025'}
            />
            <ProductMiniCard
              img={require('../../../assets/images/toyotaCar.png')}
              txt1={'Toyota LIneup'}
              txt2={'Toyota LImeup - Latest Model'}
              txt3={''}
              price={'$3970.00'}
              loc={'USA'}
              minbid={'Min Bid $20,025'}
              maxbid={'Max Bid $30,025'}
            /> */}

          </View>
        </ScrollView>
      </View>


    )
  },
)


