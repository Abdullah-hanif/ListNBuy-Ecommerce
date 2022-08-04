import React, { FC } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from "react-native"
import { goBack, NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"

import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler"

export const ChatScreen: FC<StackScreenProps<NavigatorParamList, "chatScreen">> = observer(
    ({ navigation }) => {
        return (
            <View style={styles.MainContainer}>
                {/* Header===========> */}
                <View style={styles.Header}>
                    <View style={styles.InnerHeader}>
                        <TouchableOpacity  onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={25} />
                        </TouchableOpacity>
                        <View style={styles.InnerHeader_User_Txt_Img}>
                            <Image source={require('../../../assets/images/userProfile.png')} style={{ width: 35, height: 35 }} />
                            <Text style={styles.UserNameText}>Erilish Bachman</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ marginRight: 15 }}>
                        <Image source={require('../../../assets/images/Call_Icon.png')} />
                    </TouchableOpacity>
                </View>




                {/* Conversation list ================*/}
                <ScrollView style={{ flex: 1 ,marginTop:'5%'}}>

                   <View style={{marginTop:'3%'}}>
                   <View style={{width:'65%',height:120,backgroundColor:'#ADD8E6',borderTopLeftRadius:15,borderBottomRightRadius:15,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    <Text style={{width:'75%',fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus.</Text>
                   </View>
                   <View style={{paddingLeft:'5%'}}>
                   <Image source={require('../../../assets/images/user3.png')} style={{width:50,height:50}}/>
                   <Text style={{fontSize:18}}>07:01</Text>
                   </View>
                   </View>
                   <View style={{marginTop:'3%'}}>
                   <View style={{width:'65%',height:120,backgroundColor:'#EEEFF3',borderTopRightRadius:15,borderBottomLeftRadius:15,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    <Text style={{width:'75%',fontSize:15}}>Lorem ipsum dolor sit amet, consectetur </Text>
                   </View>
                   <View style={{paddingRight:'5%',justifyContent:'flex-end',flexDirection:'row'}}>
                   <Image source={require('../../../assets/images/user3.png')} style={{width:50,height:50}}/>
                   </View>
                   <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:'5%'}}>
                   <Text style={{fontSize:18}}>07:01</Text>
                   </View>
                   </View>
                   <View style={{marginTop:'3%'}}>
                   <View style={{width:'65%',height:120,backgroundColor:'#ADD8E6',borderTopLeftRadius:15,borderBottomRightRadius:15,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    <Text style={{width:'75%',fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus.</Text>
                   </View>
                   <View style={{paddingLeft:'5%'}}>
                   <Image source={require('../../../assets/images/user3.png')} style={{width:50,height:50}}/>
                   <Text style={{fontSize:18}}>07:01</Text>
                   </View>
                   </View>


                </ScrollView>
                <View style={{height:'18%',backgroundColor:'#F3F4F8'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:'3%'}}>
                        <View style={{marginLeft:8,width:100,height:38,borderWidth:1,alignItems:'center',justifyContent:'center',borderColor:'#2A84F2',borderRadius:10}}>
                            <Text>Call Me</Text>
                        </View>
                        <View style={{marginLeft:8,width:100,height:38,borderWidth:1,alignItems:'center',justifyContent:'center',borderColor:'#2A84F2',borderRadius:10}}>
                            <Text>Last Price</Text>
                        </View>
                        <View style={{marginLeft:8,width:100,height:38,borderWidth:1,alignItems:'center',justifyContent:'center',borderColor:'#2A84F2',borderRadius:10}}>
                            <Text>Its Availible</Text>
                        </View>
                        <View style={{marginLeft:8,width:100,height:38,borderWidth:1,alignItems:'center',justifyContent:'center',borderColor:'#2A84F2',borderRadius:10}}>
                            <Text>What About Condition</Text>
                        </View>
                       
                    </ScrollView>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Image source={require('../../../assets/images/userProfile.png')} style={{ width: 35, height: 35 }} />
                <TextInput placeholder="Type Your Message Here "/>
                <Image source={require('../../../assets/images/mic.png')} style={{ width: 20, height: 35 }} />
                <Image source={require('../../../assets/images/send.png')} style={{ width: 35, height: 35 }} />
                </View>
                </View>
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
    InnerHeader: {
        paddingLeft: '1%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    InnerHeader_User_Txt_Img:
    {
        paddingLeft: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    UserNameText: {
        paddingLeft: '5%',
        fontSize: 15,
        color: 'black'
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
   
})
