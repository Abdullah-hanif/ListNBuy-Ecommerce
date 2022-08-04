  import React, { FC } from "react"
  import { TextInput,StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView} from 'react-native'
  import { NavigatorParamList } from "../../navigators"
  import { observer } from "mobx-react-lite"
  import { StackScreenProps } from "@react-navigation/stack"
  import { color } from "../../theme"
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Entypo from 'react-native-vector-icons/Entypo';
  
  export const HomePremuim: FC<StackScreenProps<NavigatorParamList, "homePremuim">> = observer(
    ({ navigation }) => {
    return (
   <View style={styles.MainContainer}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
     <Image source={require('../../../assets/images/logoListBuy.png')} style={{marginLeft:'32%',width:'30%',height:30}}/>
     <View >
     <Image source={require('../../../assets/images/bell-notification.png')} style={{marginRight:'5%'}}/>
     </View>
     </View>
     <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-around',marginTop:'5%'}}>
      <View style={{borderWidth:2,borderColor:'#EDF1FF',flexDirection:'row',alignItems:'center',width:'80%',borderRadius:25}}>
      <Image source={require('../../../assets/images/search.png')} style={{marginLeft:10}}/>
     <TextInput placeholder="Search..." style={{width:'90%',paddingLeft:20,fontSize:20}}/>
     </View>
     <TouchableOpacity onPress={()=>(navigation.navigate('filterScreen'))}>
     <Image source={require('../../../assets/images/threeLines.png')} style={{}}/>
     </TouchableOpacity>
     </View>
     <ScrollView>
     
     
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'3%'}}>
          <Text style={{paddingLeft:25,fontSize:20,fontWeight:'700'}}>Premuim Pluse Ad</Text>
          <Text style={{paddingRight:25,fontSize:20,fontWeight:'700'}}>See All</Text>
      </View>
      
          <View style={{flex:1,marginTop:'3%'}}>      
            <ScrollView horizontal style={{height:'100%'}}>
              
            <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>BMW</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>BMW BMW K1</Text>
                <Image source={require('../../../assets/images/Camera-Ios.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
              <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>BMW</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>BMW BMW K1</Text>
                <Image source={require('../../../assets/images/motorBikes.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
              <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>BMW</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>BMW BMW K1</Text>
                <Image source={require('../../../assets/images/motorBikes.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
          </ScrollView>
          </View>
  
          {/* =============premium pluse ads */}
  
      
      
          <View style={{flex:1,marginTop:'3%'}}>      
            <ScrollView horizontal style={{height:'100%'}}>
            <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>Gearbox</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>AFX Precesion Plantery GearBox</Text>
                <Image source={require('../../../assets/images/AFXR.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$94830</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
              <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>BMW</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>BMW BMW K1</Text>
                <Image source={require('../../../assets/images/motorBikes.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
              <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>BMW</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>BMW BMW K1</Text>
                <Image source={require('../../../assets/images/motorBikes.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
          </ScrollView>
          </View>
   {/* =============premium ads */}
      
       
  
          <View style={{flex:1,marginTop:'3%'}}>      
            <ScrollView horizontal style={{height:'100%'}}>
            <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>Toyota</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>2022 Toyota Highlander HighBrid</Text>
                <Image source={require('../../../assets/images/toyotaCar.png')} style={{width:160,height:120,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
              <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>BMW</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>BMW BMW K1</Text>
                <Image source={require('../../../assets/images/motorBikes.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
              <View style={{marginLeft:10,borderColor:"#2A84F2",borderWidth:1,height:335,width:230,backgroundColor:'#FEFCFF',borderRadius:15}}>
               <View style={{backgroundColor:'#FFCB47',height:17,borderBottomLeftRadius:6,borderTopRightRadius:10,width:70,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10}}>New</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                <Text style={{fontSize:18,color:'grey',fontWeight:'600'}}>BMW</Text>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
                <FontAwesome name="diamond" size={15}/>
                <Text style={{fontSize:15,paddingLeft:10}}>premium plus Ad</Text>
                </View>
               </View>
               <View style={{marginTop:'5%',height:'70%',width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{color:'#2A84F2',fontSize:18,fontWeight:'600'}}>BMW BMW K1</Text>
                <Image source={require('../../../assets/images/motorBikes.png')} style={{width:130,height:130,alignSelf:'center',marginTop:10}}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'5%'}}>
                  <Text style={{fontSize:20,color:'black'}}>$5000</Text>
                  <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}>
               <AntDesign name="upload" size={20}/>
               </View>
                  </View>
               </View>
               <View style={{ flexDirection:'row',alignItems:'center',marginTop:'3%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text>Washington,DC</Text>
                    </View>
                    <View style={{ flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Entypo name="back-in-time" size={15}/>
                      <Text> Posted 15 jan</Text>
                    </View>
                  </View>
              </View>
          </ScrollView>
          </View>
  
          
          </ScrollView>
  </View>
    )
    },
  )
  
  
  const styles = StyleSheet.create({
    MainContainer:{
  backgroundColor:color.background,
  flex:1
    }
  })