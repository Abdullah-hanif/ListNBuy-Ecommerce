import React from "react"
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native"
import SelectDropdown from "react-native-select-dropdown"
const { height } = Dimensions.get("screen")
export const FilterScreen = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    <View>
      <View
        style={styles.headerContaner}
      >
        <Image
          source={require("../../../assets/images/backarrow.png")}
          style={styles.backArrowImage}
        />
        <Text
          style={styles.headerTextFilter}
        >
          Filter
        </Text>
        <Text
          style={styles.headerTextClear}
        >
          Clear All
        </Text>
      </View>
      <View
        style={styles.mainContainer}
      >
        <View
          style={styles.selectCategoryContainer}
        >
          <Text
            style={styles.selectCategoryText}
          >
            Select Category
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
            buttonStyle={styles.selectCategoryButtonStyle}
            buttonTextStyle={styles.selectCategoryButtonTextStyle}
            defaultButtonText={"Category"}
          />
        </View>
        <View
          style={styles.selectCategoryContainer}
        >
          <Text
            style={styles.selectCategoryText}
          >
            Location
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
            buttonStyle={styles.selectCategoryButtonStyle}
            buttonTextStyle={styles.selectCategoryButtonTextStyle}
            defaultButtonText={"Category"}
          />
        </View>
        <View
          style={styles.selectCategoryContainer}
        >
          <Text
            style={styles.selectCategoryText}
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
            buttonStyle={styles.selectCategoryButtonStyle}
            buttonTextStyle={styles.selectCategoryButtonTextStyle}
            defaultButtonText={"Category"}
          />
        </View>
        <TouchableOpacity
          style={styles.saveButton}
        >
          <Text
            style={styles.saveButtonText}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headerContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },

  backArrowImage: {
    marginTop: 6,
  },
  headerTextFilter:{
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Prompt",
    color: "#3A456E",
  },
  headerTextClear: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Prompt",
    color: "red",
  },
  mainContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 7,
    height: height,
  },
  selectCategoryContainer:{
    
      paddingHorizontal: 15,
      backgroundColor: "#FFFFFF",
      marginTop: 10,
    
  },
  selectCategoryText:{
    fontSize: 18,
    fontWeight: "400",
    color: "#3A456E",
    marginBottom: 10,
  },
  selectCategoryButtonStyle:{
    
      width: "100%",
      backgroundColor: "#F3F4F8",
      borderWidth: 1,
      borderColor: "#2A84F2",
      borderRadius: 8,
    
  },
  selectCategoryButtonTextStyle:{
    position: "absolute",
    left: 220,
    right: 0,
  },
  saveButton:{
    
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      marginHorizontal: 20,
      paddingVertical: 17,
      borderRadius: 8,
      marginTop: 100,
    
  },
  saveButtonText:{
    textAlign: "center",
    fontSize: 18,
    color: "white",
  }
  
})
