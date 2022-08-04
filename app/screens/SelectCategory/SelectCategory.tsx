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
import { authService } from "../../services/api"
const { width, height } = Dimensions.get("screen")
export const SelectCategory = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  
  const [name, setName] = useState("")
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [name3, setName3] = useState("")
  const [name4, setName4] = useState("")
  const [name5, setName5] = useState("")
  const [name6, setName6] = useState("")
  const [name7, setName7] = useState("")


  
  const allCategory = async () => {
    try {
      const response = await authService.allCategory()
      const name = response.data.result.data[0].name
      setName(name)
      const name1 = response.data.result.data[1].name
      setName1(name1)
      const name2 = response.data.result.data[2].name
      setName2(name2)
      const name3 = response.data.result.data[3].name
      setName3(name3)
      const name4 = response.data.result.data[4].name
      setName4(name4)
      const name5 = response.data.result.data[5].name
      setName5(name5)
      const name6 = response.data.result.data[6].name
      setName6(name6)
      const name7 = response.data.result.data[7].name
      setName7(name7)
    } catch (error) {
      console.log(error)
    }
  }
  allCategory()
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Image
          source={require("../../../assets/images/backarrow.png")}
          style={{
            marginTop: 13,
          }}
        />
        <SearchBar
          searchIconComponent={
            <Image source={require("../../../assets/images/search.png")} style={{}} />
          }
          style={{
            backgroundColor: "#EDF1FF",
            borderRadius: 15,
          }}
          placeholder="Find Catogory..."
          onChangeText={(text) => console.log(text)}
          onSearchPress={() => console.log("Search Icon is pressed")}
          onClearPress={() => console.log("Clear Icon is pressed")}
          onPress={() => alert("onPress")}
        />
        {/* <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            fontFamily: "Prompt",
            color: "#EB5757",
          }}
        >
          Clear All
        </Text> */}
      </View>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 7,
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            backgroundColor: "#FFFFFF",
            marginTop: 10,
          }}
        >
          {/* <Text
            style={{
              fontSize: 18,
              fontWeight: "400",
              color: "#3A456E",
              marginBottom: 10,
            }}
          >
            All Catogories
          </Text> */}
          <ScrollView style={{ height: height - 200 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* Location */}
                  {name}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* Lagos State */}
                  {name1}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* Abuja (FCT) State */}
                  {name2}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* Ogun State */}
                  {name3}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* Oyo State */}
                  {name4}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* River State */}
                  {name5}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* Osun State */}
                  {name6}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  {/* Abia State */}
                  {name7}
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#838EA1",
                paddingBottom: 8,
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#2A84F2",
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  Adamawa State
                </Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View> */}
          </ScrollView>
        </View>

        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    </View>
  )
}
const libraryStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: "flex-start",
    width: width,
  },

  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    //paddingVertical: 10
  },
  headerIconStyle: {
    alignSelf: "center",
    marginTop: 10,
  },
  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  HorizontalLine: {
    height: 1,
    width: width - 40,
    backgroundColor: "#6F7FBF",
    marginVertical: 10,
    alignSelf: "center",
  },
  PostCard: {
    //internal card view; prev colour: 293770 ; my rejected addon?=3450a1; new addon=45538A
    flex: 1,
    width: width - 20,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 15, //this is now useless
    padding: 4,
    position: "relative",
  },
  CommentInputStyles: {
    color: "white",
    fontSize: 12,
    fontWeight: "normal",
    marginLeft: 10,
  },
  PrimaryBackGround: {
    borderWidth: 1,
    borderColor: "#5F71B8",
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: "normal",
  },
  showMoreButton: {
    borderWidth: 1,
    borderColor: "#5F71B8",
    borderRadius: 40,
    paddingHorizontal: 13,
    paddingVertical: 10,
    fontSize: 12,
    fontWeight: "normal",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
})
