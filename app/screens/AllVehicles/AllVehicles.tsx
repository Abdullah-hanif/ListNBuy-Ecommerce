import React, { useContext, useEffect, useMemo, useState } from "react"
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Image,
  BackHandler,
} from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import SearchBar from "react-native-dynamic-search-bar"
import { ScrollView } from "react-native-gesture-handler"
import { navigationRef } from "../../navigators"
const { width, height } = Dimensions.get("screen")
export const AllVehicles = () => {
  return (
    <View>
      <View style={styles.searchBarContaner}>
        <TouchableOpacity
          onPress={() => {
            navigationRef.goBack()
          }}
        >
          <Image
            source={require("../../../assets/images/backarrow.png")}
            style={styles.searchBatImage}
          />
        </TouchableOpacity>

        <SearchBar
          searchIconComponent={
            <Image source={require("../../../assets/images/search.png")} style={{}} />
          }
          style={styles.searchBarInner}
          placeholder="Find Catogory..."
          onChangeText={(text) => console.log(text)}
          onSearchPress={() => console.log("Search Icon is pressed")}
          onClearPress={() => console.log("Clear Icon is pressed")}
          onPress={() => alert("onPress")}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerInner}>
          <Text style={styles.mainContainerTopHeading}>All Vehicles</Text>
          <ScrollView style={{ height: height - 230 }}>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Cars</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Trucks and Trailers</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Motorcycles</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Vehicles parts & Accessories</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Heavy Equipments</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Buses & Microbuses</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  searchBarContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },

  searchBatImage: {
    marginTop: 13,
  },
  searchBarInner: {
    backgroundColor: "#EDF1FF",
    borderRadius: 15,
  },
  mainContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 7,
  },
  mainContainerInner: {
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  mainContainerTopHeading: {
    fontSize: 18,
    fontWeight: "400",
    color: "#3A456E",
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#838EA1",
    paddingBottom: 8,
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  categoryContainerInner: {
    flexDirection: "row",
  },
  categoryText: {
    color: "#2A84F2",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    marginLeft: 5,
  },
  saveButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
  saveButtonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
})
