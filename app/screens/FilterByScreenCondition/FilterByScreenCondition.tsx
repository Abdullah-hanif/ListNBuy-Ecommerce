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
const { width, height } = Dimensions.get("screen")
export const FilterByScreenCondition = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
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
          Filter
        </Text>
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
            Region
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
            defaultButtonText={"Choose Region"}
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
            Sort Order
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
            defaultButtonText={"Newest First"}
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TextInput
              style={{
                textAlign: "left",
                borderColor: "#2A84F2",
                borderWidth: 1,
                backgroundColor: "#F3F4F8",
                width: 140,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              placeholderTextColor="#838EA1"
              placeholder="min"
            ></TextInput>
            <Text
              style={{
                color: "#2A84F2",
                fontSize: 20,
              }}
            >
              __
            </Text>
            <TextInput
              style={{
                textAlign: "left",
                borderColor: "#2A84F2",
                borderWidth: 1,
                backgroundColor: "#F3F4F8",
                width: 140,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              placeholderTextColor="#838EA1"
              placeholder="mix"
            ></TextInput>
          </View>
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
            defaultButtonText={"Choose make"}
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
            defaultButtonText={"Choose model"}
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
            defaultButtonText={"Choose title status"}
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
            defaultButtonText={"Choose condition"}
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
            defaultButtonText={"Choose fuel"}
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
            defaultButtonText={"Choose engine size"}
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
            Tranmission
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
            defaultButtonText={"Choose tranmission"}
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
            defaultButtonText={"Choose body"}
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
            defaultButtonText={"Choose color"}
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
            Mileage, km
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TextInput
              style={{
                textAlign: "left",
                borderColor: "#2A84F2",
                borderWidth: 1,
                backgroundColor: "#F3F4F8",
                width: 140,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              placeholderTextColor="#838EA1"
              placeholder="min"
            ></TextInput>
            <Text
              style={{
                color: "#2A84F2",
                fontSize: 20,
              }}
            >
              __
            </Text>
            <TextInput
              style={{
                textAlign: "left",
                borderColor: "#2A84F2",
                borderWidth: 1,
                backgroundColor: "#F3F4F8",
                width: 140,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              placeholderTextColor="#838EA1"
              placeholder="mix"
            ></TextInput>
          </View>
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
            defaultButtonText={"Choose drivetrain"}
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
            defaultButtonText={"Choose registered car"}
          />
        </View>


        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
            marginHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            marginTop: 10,
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
      </ScrollView>
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
