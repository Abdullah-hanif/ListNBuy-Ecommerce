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
export const AllCatogories = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  // const allProduct = async () => {
  //   try {
  //     const response = await authService.allPost()
  //     console.log(response.data.result.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // allProduct()

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

  // const allSubCategory = async () => {
  //   try {
  //     const response  = await authService.allSubCategory()
  //     console.log(response.data.result.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // allSubCategory()


  // const allCity = async () => {
  //   try {
  //     const response  = await authService.allCities()
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // allCity()



  // const allPkg = async () => {
  //   try {
  //     const response  = await authService.pkgsList()
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // allPkg()


  // const paymentMethod= async () => {
  //   try {
  //     const response  = await authService.paymentMethod()
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // paymentMethod()

 // const allAdverts= async () => {
  //   try {
  //     const response  = await authService.myAdverts()
  //     console.log(response.data.items.data[1])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // allAdverts()



  return (
    <View>
      <View style={styles.searchBarContaner}>
        <Image
          source={require("../../../assets/images/backarrow.png")}
          
          style={styles.searchBatImage}
        />
        <SearchBar
          searchIconComponent={<Image source={require("../../../assets/images/search.png")} />}
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
          <Text style={styles.mainContainerTopHeading}>All Catogories</Text>
          <ScrollView style={{ height: height - 230 }}>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.carImage}>
                  <Image
                   source={require("../../../assets/images/car.png")}
               
                  
                  />
                </View>

                <Text style={styles.categoryText}>{name}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.homeImage}>
                  <Image source={require("../../../assets/images/home.png")} style={{}} />
                </View>

                <Text style={styles.categoryText}>{name1}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.motorBikeImage}>
                  <Image source={require("../../../assets/images/motorbike.png")} style={{}} />
                </View>

                <Text style={styles.categoryText}>{name2}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.motorBikeImage}>
                  <Image source={require("../../../assets/images/motorbike.png")} style={{}} />
                </View>

                <Text style={styles.categoryText}>{name3}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.bagImage}>
                  <Image source={require("../../../assets/images/bag.png")} style={{}} />
                </View>

                <Text style={styles.categoryText}>{name4}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.electronicImage}>
                  <Image source={require("../../../assets/images/electronics.png")} style={{}} />
                </View>

                <Text style={styles.categoryText}>{name5}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.mobileImage}>
                  <Image source={require("../../../assets/images/mobile.png")} style={{}} />
                </View>

                <Text style={styles.categoryText}>{name6}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
            </View>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryContainerInner}>
                <View style={styles.healthImage}>
                  <Image source={require("../../../assets/images/health.png")} style={{}} />
                </View>

                <Text style={styles.categoryText}>{name7}</Text>
              </View>
              <Image source={require("../../../assets/images/rightArrow.png")} style={{}} />
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
  carImage: {
    backgroundColor: "rgba(42, 132, 242, 0.3)",
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 15,
  },
  categoryText: {
    color: "#2A84F2",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    marginLeft: 5,
  },
  homeImage: {
    backgroundColor: "rgba(42, 132, 242, 0.3)",
    borderRadius: 5,
    paddingHorizontal: 19,
    paddingVertical: 15,
  },
  motorBikeImage: {
    backgroundColor: "rgba(42, 132, 242, 0.3)",
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  bagImage: {
    backgroundColor: "rgba(42, 132, 242, 0.3)",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  electronicImage: {
    backgroundColor: "rgba(42, 132, 242, 0.3)",
    borderRadius: 5,
    paddingHorizontal: 19,
    paddingVertical: 13,
  },
  mobileImage: {
    backgroundColor: "rgba(42, 132, 242, 0.3)",
    borderRadius: 5,
    paddingHorizontal: 23,
    paddingVertical: 12,
  },
  healthImage: {
    backgroundColor: "rgba(42, 132, 242, 0.3)",
    borderRadius: 5,
    paddingHorizontal: 19,
    paddingVertical: 13,
  },
  saveButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 10,
  },
  saveButtonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
})
