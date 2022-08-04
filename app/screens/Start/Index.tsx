import React, { FC } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"
export const StartScreen: FC<StackScreenProps<NavigatorParamList, "Start">> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.MainContainer}>
        <View style={{ alignItems: "center", marginTop: "10%" }}>
          <Image source={require("../../../assets/images/logoListBuy.png")} />
          <Text style={{ fontWeight: "800", fontSize: 18 }}>Welcome To Listnbuy</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: color.startButton,
              width: "45%",
              height: "10%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
            onPress={
              ()=>{
                navigation.navigate("Geteway")
              }
            }
          >
            <Text style={{ color: color.text, fontSize: 20, fontWeight: "700" }}>POST ADS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: color.startButton,
              width: "45%",
              marginTop: "5%",
              height: "10%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
            onPress={
              ()=>{
                navigation.navigate("Geteway")
              }
            }
          >
            <Text style={{ color: color.text, fontSize: 20, fontWeight: "700" }}>SHOPS</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <Image
              source={require("../Start/stylish-young-woman.png")}
              style={{ height: "70%", width: 350 }}
            />
          </View>
        </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: color.background,
    flex: 1,
  },
})
