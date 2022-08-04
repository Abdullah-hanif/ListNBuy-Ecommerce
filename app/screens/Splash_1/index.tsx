import { useEffect, FC, useState } from "react"
import React from "react"

import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"


export const SplashScreen1: FC<StackScreenProps<NavigatorParamList, "Splash_1">> = observer(
  ({ navigation }) => {


    useEffect(() => {
      setTimeout(() => {
        // navigation.navigate("Splash_2")
        navigation.replace("Splash_2")
      }, 2000);
    },[]);

    return (
      <View style={styles.MainContainer}>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image source={require("../../../assets/images/logoListBuy.png")} />
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
