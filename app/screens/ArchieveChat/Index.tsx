import React, { FC } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from "react-native"
import { navigationRef, NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"
import {PopOver} from '../../ScreenComponents/PopOverChats/Index'
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from "react-native-gesture-handler"

export const ArchieveChats: FC<StackScreenProps<NavigatorParamList, "archieveChats">> = observer(


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
    return (
      <View style={styles.MainContainer}>
        <View style={styles.Header}>
          <Text style={{ fontSize: 20, color: 'black', marginLeft: 20 }}>My Messages</Text>
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
          <Image source={require('../../../assets/images/search.png')} style={{ marginLeft: 10 }} />
          <TextInput placeholder="Search..." style={{ width: '90%', height: '100%', paddingLeft: 20, fontSize: 20 }} />
        </View>

        {/* Archeive list ================*/}
        <ScrollView style={{ flex:1}}>
          
          <View style={styles.CenterContainer}> 
           <Image source={require('../../../assets/images/Archive.png')}/>
           <View style={styles.ArcheiveText}>
           <Text>You Haaven't Archeive Chat Yet </Text>
           <TouchableOpacity style={{marginTop:'2%'}}>
            <Text style={{color:'#FFCB47'}}>See All Message</Text>
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
  Header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: '3%',
    alignItems: "center"
  },

  SearchField: {
    backgroundColor: '#EDF1FF',
    borderWidth: 2,
    borderColor: '#EDF1FF',
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 47,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: '5%'
  },
CenterContainer:
{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column',
  alignContent:'center',
  marginTop:"40%"
},
 ArcheiveText:{
  marginTop:'5%',
  justifyContent:"center"
  ,alignItems:'center'
 }
})
