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
const { width, height } = Dimensions.get("screen")
export const LagosState = () => {
  return (
    <View>
      <View
        style={styles.searchBarContaner}
      >
        <Image
          source={require("../../../assets/images/backarrow.png")}
          style={styles.searchBatImage}
        />
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
      <View
        style={styles.mainContainer}
      >
        <View
          style={styles.mainContainerInner}
        >
          <Text
            style={styles.mainContainerTopHeading}
          >
            Lagos State
          </Text>
          <ScrollView style={{ height: height - 200 }}>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
                <Text
                  style={styles.categoryText}
                >
                  Ajah
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
                <Text
                  style={styles.categoryText}
                >
                  Surulere
                </Text>
              </View>
              
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
             

                <Text
                  style={styles.categoryText}
                >
                  Ikeja
                </Text>
              </View>
             
            </View>
          
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
              

                <Text
                  style={styles.categoryText}
                >
                  Ojo
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
               
                <Text
                  style={styles.categoryText}
                >
                  Abule Egba
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
               
                <Text
                  style={styles.categoryText}
                >
                  Agega
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
               
                <Text
                  style={styles.categoryText}
                >
                  Apapa
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
               
                <Text
                  style={styles.categoryText}
                >
                  Badagry
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
               
                <Text
                  style={styles.categoryText}
                >
                  Ejigbo
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
               
                <Text
                  style={styles.categoryText}
                >
                  Eko atlantic
                </Text>
              </View>
            </View>
            <View
              style={styles.categoryContainer}
            >
              <View
                style={styles.categoryContainerInner}
              >
               
                <Text
                  style={styles.categoryText}
                >
                  Epe
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
            marginHorizontal: 20,
            paddingVertical: 17,
            borderRadius: 8,
            marginTop: 100,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "white",
            }}
          >
            Save
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  searchBarContaner:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },

  searchBatImage: {
    marginTop: 13,
  },
  searchBarInner:{
    backgroundColor: "#EDF1FF",
    borderRadius: 15,
  },
  mainContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 7,
    
  },
  mainContainerInner:{
    
      paddingHorizontal: 15,
      backgroundColor: "#FFFFFF",
      marginTop: 10,
    
  },
  mainContainerTopHeading:{
    fontSize: 18,
    fontWeight: "400",
    color: "#3A456E",
    marginBottom: 10,
  },
  categoryContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#838EA1",
    paddingBottom: 8,
    alignItems: "center",
    marginTop:20,
    paddingHorizontal:10
  },
  categoryContainerInner:{
    flexDirection: "row",
  },
  categoryText:{
    color:'#2A84F2',
    fontSize:16,
    fontWeight: '400',
    marginTop:10,
    marginLeft:5
    
    
  },
  saveButton:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginHorizontal: 20,
    paddingVertical:5,
    borderRadius: 8,
    
  },
  saveButtonText:{
    textAlign: "center",
    fontSize: 18,
    color: "white",
  }
})
