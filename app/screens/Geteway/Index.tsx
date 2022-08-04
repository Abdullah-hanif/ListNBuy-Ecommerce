import React, { FC } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"
import useStore from "../../models/store"

export const GetewayScreen: FC<StackScreenProps<NavigatorParamList, "Geteway">> = observer(
  ({ navigation }) => {
    const { addCat } = useStore()
    const { removeCat } = useStore()
    const { cat } = useStore()

    console.log("Intial cat value", cat)

    return (
      <View style={styles.MainContainer}>
        <View style={{ alignItems: "center", marginTop: "8%" }}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
            Welcome To Geteway!
          </Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text style={{ color: "grey", fontSize: 15 }}>Choose A Category </Text>
            <Image source={require("../../../assets/images/bell-notification.png")} style={{}} />
          </View>
        </View>
        <ScrollView style={{ flex: 1, marginTop: "5%" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "3%" }}>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../Geteway/vehicles.png")}
                  style={{ width: "100%", alignSelf: "center" }}
                />
                <Text>Automobiles</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../Geteway/bike.png")}
                  style={{ width: "100%", alignSelf: "center" }}
                />
                <Text>Motor Bike</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "3%" }}>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../../../assets/images/autoparts.png")}
                  style={{ width: "100%", alignSelf: "center",  }}
                />
                <Text>Auto Parts</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../../../assets/images/junk.png")}
                  style={{ width: "100%", alignSelf: "center" }}
                />
                <Text>Junk Vehicles</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "3%" }}>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,

                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../../../assets/images/real.png")}
                  style={{ width: "100%", alignSelf: "center" }}
                />
                <Text>Real Estate</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,

                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../../../assets/images/gen.png")}
                  style={{ width: "100%", alignSelf: "center" }}
                />
                <Text>Gen Mart</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "3%", marginBottom:"3%" }}>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,

                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  width: "100%",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../../../assets/images/jobs.png")}
                  style={{ width: "100%", alignSelf: "center" }}
                />
                <Text>Jobs</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: "#FAF9F6",
                width: "36%",
                height: "100%",
                alignItems: "center",
                borderRadius: 15,

                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("homePage")
                }}
              >
                <Image
                  source={require("../../../assets/images/handy.png")}
                  style={{ width: "100%", alignSelf: "center" }}
                />
                <Text>Handy Man</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: color.background,
    flex: 1,
  },

  shadowContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
})
