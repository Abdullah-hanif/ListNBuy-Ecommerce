import React, { FC } from "react"
import {
    TextStyle,
    View,
    ViewStyle,
    Image,
    ScrollView
  } from "react-native"
  import {
    Button,
    Text,
  } from "../../components"
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { color, spacing } from "../../theme"
  
 
  

  const BOLD: TextStyle = { fontWeight: "bold" }



const TEXT3 : TextStyle = {
  ...BOLD,

  fontSize: 12,
  color: color.palette.lightGrey,
}

const DEMO: ViewStyle = {
  marginTop: spacing[0],
  marginBottom: spacing[0],
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[1],
  backgroundColor: color.palette.buttonBlue,
  borderRadius: 3,
}


const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 10,
  letterSpacing: 1,
}


export  const ProductCard =({Head, MainTxt, price, area,ad,img})=>{
    return (
    

             <View style={{height:270,width:170,backgroundColor:'#F3F4F8',borderRadius:1}}>
               <View style={{backgroundColor:'#FFCB47',height:17,width:60,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',paddingBottom:1}}>
               <Text style={{fontSize:10 , color:color.palette.black}}>{Head}</Text>
               </View>
               <View style={{marginTop:'5%',height:'76%',width:'100%',alignSelf:'center',borderBottomWidth:1,borderColor:color.palette.buttonBlue}}>
                <Image source={img} style={{width:'100%',height:90,alignSelf:'center',marginTop:10}}/>
                <Text style={{ paddingLeft:5,marginTop:'15%', width: 160, color:color.palette.black, fontSize:12 }}>{MainTxt}</Text>

                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'10%'}}>

                  <Text style={{fontSize:15,color:'blue'}}>{price}</Text>
                  {/* <View style={{backgroundColor:'#FFCB47',borderRadius:360,width:'15%',height:'45%',justifyContent:'center',alignItems:'center'}}> */}
               {/* <AntDesign name="upload" size={20}/> */}
                  <Button
                  style={DEMO}
                  textStyle={DEMO_TEXT}
                  text="More Detail"
                  />
               {/* </View> */}
                  </View>
               </View>
               <View style={{ backgroundColor:'#F3F4F8' ,flexDirection:'row',alignItems:'center',marginTop:'5%',alignSelf:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="location-outline" size={15}/>
                   <Text style={TEXT3}>{area}</Text>
                    </View>
                    <View style={{ backgroundColor:'#F3F4F8', flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                    <FontAwesome name="diamond" size={12}/>
                      <Text style={TEXT3}>{ad}</Text>
                    </View>
                  </View>
              </View>
             
     
    )
    
}



