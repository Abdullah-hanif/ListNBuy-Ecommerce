import React, { FC,useEffect,useRef, useState  } from "react"
import {
    TextStyle,
    View,
    ViewStyle,
    Image,
    StyleSheet,

    TouchableOpacity,

    ScrollView
  } from "react-native"
  import {
    Button,
    Text,
  } from "../../components"
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { color, spacing,Negativespacing } from "../../theme"
  import Popover from 'react-native-popover-view';

 
  

  const BOLD: TextStyle = { fontWeight: "bold" }
  const MYSAVE: TextStyle = {
    fontSize: 17,
    width: "85%",
    marginHorizontal:spacing[4],
    color: color.palette.black,
  }
 

export  const PopOver =({onPress1, onPress2, onPress3, onPress4,Text1,Text2,Text3,Text4})=>{
    const touchable = useRef();
    const [showPopover, setShowPopover] = useState(false);
    
useEffect(()=>{
  setShowPopover(false)
},[showPopover])

    return (
        <View
        style={styles.selectCategoryContainer}
      >
        <TouchableOpacity ref={touchable} onPress={() => setShowPopover(true)}>
        <Image
                  source={require("../../../assets/images/dropdowndot.png")}
                  style={{
                    marginTop: 6,
                  }}
                />
      </TouchableOpacity>
      <Popover  from={touchable} isVisible={showPopover} onRequestClose={() => setShowPopover(false)}>
        <TouchableOpacity style={{marginTop:20}} onPress={onPress1} > 
        
        <Text style={MYSAVE} >{Text1}</Text>
 </TouchableOpacity>
   <TouchableOpacity style={{marginTop:20}} onPress={onPress2}> 
        <Text style={MYSAVE} >{Text2}</Text>
 </TouchableOpacity>
   <TouchableOpacity style={{marginTop:20}} onPress={onPress3}> 
        <Text style={MYSAVE} >{Text3}</Text>
 </TouchableOpacity>
   <TouchableOpacity style={{marginTop:20}} onPress={onPress4}> 
        <Text style={MYSAVE} >{Text4}</Text>
 </TouchableOpacity>



 {/* <TouchableOpacity > 

             <Text style={MYSAVE} >Active (2)</Text>
      </TouchableOpacity>
        <TouchableOpacity style={{marginTop:20}} > 
             <Text style={MYSAVE} >Reviewing (2)</Text>
      </TouchableOpacity>
        <TouchableOpacity style={{marginTop:20}}> 
             <Text style={MYSAVE} >Decline (0)</Text>
      </TouchableOpacity>
        <TouchableOpacity style={{marginTop:20}}> 
             <Text style={MYSAVE} >Closed (3)</Text>
      </TouchableOpacity> */}
       
      </Popover>
      </View>

      
     
    )
    
}




const styles = StyleSheet.create({

    selectCategoryContainer:{
      paddingHorizontal: 1,
      backgroundColor: "#FFFFFF",
      // marginTop: 10,
    
  },
  
  })