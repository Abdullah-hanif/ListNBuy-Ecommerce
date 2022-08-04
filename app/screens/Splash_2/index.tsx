import React, { FC, useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"

export const SplashScreen2: FC<StackScreenProps<NavigatorParamList, "Splash_2">> = observer(
  ({ navigation }) => {

    useEffect(() => {
      setTimeout(() => {
        // navigation.navigate("Start")
        navigation.replace("Start")
      }, 2000);
    },[]);

    return (
      <View style={styles.MainContainer}>
        <View style={{ backgroundColor: "red" }}>
          <Image
            source={require("../../../assets/images/SplashScreen.png")}
            style={{
              backgroundColor: "white",
              resizeMode: "stretch",
              height: "100%",
              width: "100%",
              alignItems: "center",
            }}
          />
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
