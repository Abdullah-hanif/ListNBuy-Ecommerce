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
  TextInput,
  ScrollView,
} from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import * as Progress from "react-native-progress"
import { Toggle } from "../../utils/react-powerplug"
import { Checkbox } from "../../components"
import { Modal } from "../../components/CustomModal/Modal"
import { authService } from "../../services/api"
import { launchImageLibrary } from "react-native-image-picker"
const { width, height } = Dimensions.get("screen")

export const AddNewPost = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    Post()
    setModalVisible(!isModalVisible)
    console.log("categoryId-->", categoryId)
    console.log("title-->", title)
    console.log("description-->", description)
    console.log("price-->", price)
    console.log("isNegotiable-->", isNegotiable)
    console.log("countryId-->", countryId)
    console.log("name-->", name)
    console.log("email-->", email)
    console.log("phone-->", phone)
    console.log("isHidden-->", isHidden)
    console.log("postPackage-->", postPackage)
    console.log("Photo-->", photo)
  }

  const [categoryId, setCategoryId] = useState(null)
  const [title, SetTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)
  const [isNegotiable, setIsNegotiable] = useState(false)
  const [countryId, setCountryId] = useState(null)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [isHidden, setIsHidden] = useState(false)
  const [postPackage, setPostPackage] = useState(null)
  const [photo, setPhoto] = useState(null)

  const countries = [
    { id: 15000000, name: "Washington D.C." },
    { id: 7200, name: "Communications Hill" },
    { id: 7199, name: "James Island" },
    { id: 7198, name: "Central City" },
    { id: 7197, name: "Encanto" },
    { id: 7196, name: "Valley Glen" },
    { id: 7195, name: "Cortlandt Manor" },
    { id: 7194, name: "Stonecrest" },
    { id: 7193, name: "St. Johns" },
    { id: 7192, name: "Bay Harbor" },
  ]

  const categories = [
    { id: 1, name: "Automobile" },
    { id: 9, name: "Motor Bike" },
    { id: 14, name: "Auto Parts" },
    { id: 30, name: "Junk Vehicles" },
    { id: 37, name: "Real Estate" },
    { id: 46, name: "Gen Mart" },
    { id: 73, name: "Jobs" },
    { id: 97, name: "Handy Man" },
  ]

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response)
      }
    })
  }

  const Post = async () => {
    console.log("Post function running")
    try {
      const form = new FormData()


      form.append("category_id", categoryId)
      form.append("title", title)
      form.append("description", description)
      form.append("price", price)
      form.append("negotiable", String(isNegotiable))
      form.append("city_id", countryId)
      form.append("contact_name", name)
      form.append("email", email)
      form.append("phone", phone)
      form.append("phone_hidden", String(isHidden))
      form.append("package_id", postPackage)
      form.append("pictures[]", {
        name: photo.assets[0].filename,
        type: photo.assets[0].type,
        uri: photo.assets[0].uri
      });

      const response = await authService.addPosts(form)

      console.log("response ====>", response)
      if (response?.status === 200) {
        alert("Post Successfully Added")
        return
      }
      if (response?.response?.status) {
        alert(response?.response?.data?.message)
      } else {
        alert("something went wrong1")
      }
    } catch (err) {
      console.log(err)
      alert("something went wrong2")
    }
  }

  return (
    <>
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
              marginTop: 6,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              fontFamily: "Prompt",
              color: "#3A456E",
            }}
          >
            Post New Ad
          </Text>

          <TouchableOpacity
            onPress={() => {
              console.log("You ran clear all")
              setCategoryId(null)
              SetTitle(null)
              setDescription(null)
              setPrice(null)
              setIsNegotiable(null)
              setCountryId(null)
              setName(null)
              setEmail(null)
              setPhone(null)
              setIsHidden(null)
              setPostPackage(null)
              setPhoto(null)
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                fontFamily: "Prompt",
                color: "#EB5757",
              }}
            >
              Clear All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 7,
            height: height - 125,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Category
            </Text>

            <SelectDropdown
              data={categories?.map((value, index) => value.name)}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, categories[index].id)
                setCategoryId(categories[index].id)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Title
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              placeholder="Enter Title for product"
              onChangeText={(text) => SetTitle(text)}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Description
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              onChangeText={(text) => setDescription(text)}
              multiline={true}
              numberOfLines={6}
              placeholder="Description"
              textAlignVertical="top"
            />
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Price
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              placeholder="Price"
              onChangeText={(text) => setPrice(text)}
            />
            <Toggle initial={false}>
              {({ on, toggle }) => (
                <View>
                  <Checkbox
                    text="Negotiable"
                    textStyle={{
                      color: "black",
                    }}
                    value={on}
                    outlineStyle={{
                      borderColor: "#838EA1",
                    }}
                    fillStyle={{ backgroundColor: "#2A84F2", borderRadius: 8 }}
                    onToggle={toggle}
                  />
                  {setIsNegotiable(on)}
                </View>
              )}
            </Toggle>
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              City
            </Text>

            <SelectDropdown
              data={countries?.map((value, index) => value.name)}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, countries[index].id)
                setCountryId(countries[index].id)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Location"}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Name
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Email
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              style={{
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              placeholder="Phone Number"
              onChangeText={(text) => setPhone(text)}
            />
            <Toggle initial={false}>
              {({ on, toggle }) => (
                <View>
                  <Checkbox
                    text="Hidden"
                    textStyle={{
                      color: "black",
                    }}
                    value={on}
                    outlineStyle={{
                      borderColor: "#838EA1",
                    }}
                    fillStyle={{ backgroundColor: "#2A84F2", borderRadius: 8 }}
                    onToggle={toggle}
                  />
                  {setIsHidden(on)}
                </View>
              )}
            </Toggle>
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Add Photo
            </Text>

            <TouchableOpacity
              onPress={() => handleChoosePhoto()}
              style={{
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#2A84F2",
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 30,
              }}
            >
              <Image source={require("../../../assets/images/addPhotoIcon.png")} />
              <Text style={{ fontSize: 12, marginTop: 5 }}>
                Add Atleast 5 photo for this category
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 12, marginTop: 5, width: "72%" }}>
              Each picture must not exceed 5 Mb Supported formats are *.jpg, *.gif and *.png
            </Text>
          </View>

          {/* <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Make
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Model
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Year of manufacture
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Title Status
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Color
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Condition
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Transmission
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Mileage (km)
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Registered Car
            </Text>
            <Toggle initial={false}>
              {({ on, toggle }) => (
                <View>
                  <Checkbox
                    text="Yes"
                    textStyle={{
                      color: "black",
                    }}
                    value={on}
                    outlineStyle={{
                      borderColor: "#838EA1",
                    }}
                    fillStyle={{ backgroundColor: "blue", borderRadius: 8 }}
                    onToggle={toggle}
                  />
                </View>
              )}
            </Toggle>
            <Toggle initial={false}>
              {({ on, toggle }) => (
                <View>
                  <Checkbox
                    text="No"
                    textStyle={{
                      color: "black",
                    }}
                    value={on}
                    outlineStyle={{
                      borderColor: "#838EA1",
                    }}
                    fillStyle={{ backgroundColor: "blue", borderRadius: 8 }}
                    onToggle={toggle}
                  />
                </View>
              )}
            </Toggle>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Body
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Fuel
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Engine Size
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Drivetrain
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Description
            </Text>
            <TextInput
              style={{ backgroundColor: "#F3F4F8", borderRadius: 8 }}
              multiline={true}
              numberOfLines={6}
              placeholder="Description"
              textAlignVertical="top"
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3A456E",
                marginBottom: 10,
              }}
            >
              Price
            </Text>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={() => {
                return (
                  <Image
                    source={require("../../../assets/images/dropdown.png")}
                    style={{
                      marginTop: 6,
                    }}
                  />
                )
              }}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#F3F4F8",
                borderWidth: 1,
                borderColor: "#2A84F2",
                borderRadius: 8,
              }}
              buttonTextStyle={{
                position: "absolute",
                left: 220,
                right: 0,
              }}
              defaultButtonText={"Category"}
            />
          </View> */}

          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#FFFFFF",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "500",
                color: "#3A456E",
                marginBottom: 2,
              }}
            >
              Promote Your Ads
            </Text>

            <Text style={{ fontSize: 14, color: "#838EA1", fontWeight: "400" }}>
              To post your ad please choose one of the option
            </Text>

            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderColor: "#2A84F2",
                borderWidth: 2,
                paddingVertical: 15,
                borderRadius: 5,
                marginTop: 10,
              }}
              onPress={() => setPostPackage(3)}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  color: "#2A84F2",
                }}
              >
                Premium Plus
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderColor: "#2A84F2",
                borderWidth: 2,
                paddingVertical: 15,
                borderRadius: 5,
                marginTop: 10,
              }}
              onPress={() => setPostPackage(2)}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  color: "#2A84F2",
                }}
              >
                Premium
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderColor: "#2A84F2",
                borderWidth: 2,
                paddingVertical: 15,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  color: "#2A84F2",
                }}
                onPress={() => setPostPackage(4)}
              >
                Basic Plus
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderColor: "#2A84F2",
                borderWidth: 2,
                paddingVertical: 15,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  color: "#2A84F2",
                }}
                onPress={() => setPostPackage(1)}
              >
                Basic
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleModal}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#2A84F2",

                paddingVertical: 10,
                borderRadius: 8,
                marginTop: 10,
                marginBottom: 100,
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  color: "white",
                }}
              >
                Post Ad
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            display: "flex",
            height: 300,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
            marginLeft: 20,
            borderRadius: 5,
          }}
        >
          <Image
            source={require("../../../assets/images/done.png")}
            style={{
              marginTop: -20,
              marginBottom: 25,
            }}
          />
          <Text style={{ fontFamily: "Prompt", fontSize: 28, fontWeight: "500", color: "#2A84F2" }}>
            Success
          </Text>

          <View style={{ paddingBottom: 10 }}></View>

          <Text style={{ fontSize: 16, fontWeight: "400", color: "#2A84F2" }}>Thank you!</Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#2A84F2" }}>
            You have been enrolled for
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#2A84F2" }}>
            Premium PLuse Ad
          </Text>
        </View>
      </Modal>
    </>
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
