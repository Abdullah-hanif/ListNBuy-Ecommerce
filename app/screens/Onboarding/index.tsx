import React, { FC } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"
import Onboarding from "react-native-onboarding-swiper"

export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "Onboarding">> = observer(
  ({ navigation }) => {
    return (
        <Onboarding
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <View style={{height:"50%", justifyContent:"center"}}>
                  <Image
                    source={require("../Onboarding/1.png")}
                  />
                </View>
              ),
              title: "Buy",
              subtitle: "Buy any product in your like. Get it easily and high quality product.",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View style={{height:"50%", justifyContent:"center"}}>
                  <Image
                    source={require("../Onboarding/2.png")}
                  />
                </View>
              ),
              title: "Sell",
              subtitle:
                "Sell your product with your require money at your best price and easy to post",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View style={{height:"50%", justifyContent:"center"}}>
                  <Image
                    source={require("../Onboarding/3.png")}
                  />
                </View>
              ),
              title: "Easy Connection",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec massa nunc convallis.",
            },
          ]}
        />
    )
  },
)


