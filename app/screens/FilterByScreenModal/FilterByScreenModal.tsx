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
export const FilterByScreenModal = () => {
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.mainContainerTopHeading}>Model</Text>
            <Text style={{ marginLeft: 6, marginTop: 2, fontSize: 14 }}>40 Ads</Text>
          </View>

          <ScrollView style={{ height: height - 176 }}>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Escape</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Focus</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>F-130</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>C-Max</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Ecosport</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>F-230</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Five Hundred</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Flex</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Freestyle</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>Fusion</Text>
              </View>
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <Text style={styles.categoryText}>F-360</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity> */}
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
