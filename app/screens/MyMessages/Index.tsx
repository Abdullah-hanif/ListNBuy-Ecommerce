import React, { FC,useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,ScrollView } from "react-native"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"
import Entypo from "react-native-vector-icons/Entypo"
import {PopOver} from '../../ScreenComponents/PopOverChats/Index'
// import { ScrollView } from "react-native-gesture-handler"
import { authService } from "../../services/api"

import { MessageRecieve } from "../../ScreenComponents/MessagesRecieve/Index"
export const MyMessages: FC<StackScreenProps<NavigatorParamList, "myMessages">> = observer(
  ({ navigation }) => {
    const  handleClick = () => {
      navigation.navigate('archieveChats')
    }
    const  handleClick2 = () => {
      navigation.navigate('myMessages')
    }
    const  handleClick3 = () => {
      navigation.navigate('chatScreen')
    }

    const [data, setdata] = useState([])


    const GetThreads = async () => {
      try {
        const response = await authService.getThreads()
      //  console.log("Response GetThreads line 31",response.data.result.data[0].post)
          setdata(response.data.result.data)
        // setdata(response.data.items.data)
        //  data.map((e)=>console.log("204==> ",e.title))

      } catch (error) {
        console.log(error)
      }
    }
    GetThreads ()

    return (
      <View style={styles.MainContainer}>
        <View style={styles.Header}>
          <Text style={{ fontSize: 20, color: "black", marginLeft: 20 }}>My Messages</Text>
          
          <TouchableOpacity style={{ marginRight: 15 }}>
            {/* <Entypo name="dots-three-vertical" size={20} /> */}
            <PopOver
          onPress1={handleClick}
          Text1={'Archeive Chats'} 
    
          onPress2={handleClick2}
           Text2={'My Messages'}
           onPress3={handleClick3}
           Text3={'Chatting'}
           />
          </TouchableOpacity>
        </View>

        {/* SearchField=========== */}

        <View style={styles.SearchField}>
          <Image source={require("../../../assets/images/search.png")} style={{ marginLeft: 10 }} />
          <TextInput
            placeholder="Search..."
            style={{ width: "90%", height: "100%", paddingLeft: 20, fontSize: 20 }}
          />
        </View>

        {/* message list ================*/}
        <ScrollView style={{ flex: 1 }}>
          {/* <View style={{ marginTop: "2%" }}> */}
          {data.map((e) => {
                // console.log("pictures let see =>", e.category.picture)
                return (
                  <MessageRecieve
                  Online
                  // Img={require("../../../assets/images/userProfile2.png")}
                  Img={`${e.post.user_photo_url }`}

                  TextCartName={`${e.post.contact_name ? e.post.contact_name : "Ricahrd Erics"}`}
                  TextCartTime={`${e.post.created_at_formatted.slice(e.post.created_at_formatted.length - 5) ?e.post.created_at_formatted.slice(e.post.created_at_formatted.length - 5): "Today"}`}
                 
                  TextCartMsg={`${e.post.description.slice(3, -4) ? e.post.description.slice(3, -4) : "up Man How Much Last.."}`}
                  TextCartNotification={`${e.post.show_status ? e.post.show_status : "1"}`}
                  
                />
                )
                // console.log("243==> ", e.user.photo_url)
              })}
            {/* <MessageRecieve
              Online
              Img={require("../../../assets/images/userProfile2.png")}
              TextCartName={"Ricahrd Erics"}
              TextCartTime={"Today"}
              TextCartMsg={"Yup Man How Much Last.."}
              TextCartNotification={"1"}
            />
            <MessageRecieve
              Online
              Img={require("../../../assets/images/userProfile2.png")}
              TextCartName={"Ricahrd Erics"}
              TextCartTime={"Today"}
              TextCartMsg={"Yup Man How Much Last.."}
              TextCartNotification={"1"}
            />
            <MessageRecieve
              Online
              Img={require("../../../assets/images/userProfile2.png")}
              TextCartName={"Ricahrd Erics"}
              TextCartTime={"Today"}
              TextCartMsg={"Yup Man How Much Last.."}
              TextCartNotification={"1"}
            />
            <MessageRecieve
              Online
              Img={require("../../../assets/images/userProfile2.png")}
              TextCartName={"Ricahrd Erics"}
              TextCartTime={"Today"}
              TextCartMsg={"Yup Man How Much Last.."}
              TextCartNotification={"1"}
            />
            <MessageRecieve
              Online
              Img={require("../../../assets/images/userProfile2.png")}
              TextCartName={"Ricahrd Erics"}
              TextCartTime={"Today"}
              TextCartMsg={"Yup Man How Much Last.."}
              TextCartNotification={"1"}
            />
            <MessageRecieve
              Online
              Img={require("../../../assets/images/userProfile2.png")}
              TextCartName={"Ricahrd Erics"}
              TextCartTime={"Today"}
              TextCartMsg={"Yup Man How Much Last.."}
              TextCartNotification={"1"}
            /> */}
          {/* </View> */}
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
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "3%",
    alignItems: "center",
  },

  SearchField: {
    backgroundColor: "#EDF1FF",
    borderWidth: 2,
    borderColor: "#EDF1FF",
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    height: 47,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: "5%",
  },
})
