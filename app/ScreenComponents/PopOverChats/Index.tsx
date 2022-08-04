import React, { useEffect, useRef, useState  } from "react"
import {
    TextStyle,
    View,
   
    Image,
    StyleSheet,

    TouchableOpacity,


  } from "react-native"
  import {
   
    Text,
  } from "../../components"
  
  import { color, spacing } from "../../theme"
  import Popover from 'react-native-popover-view';

 
  

  const BOLD: TextStyle = { fontWeight: "bold" }
  const MYSAVE: TextStyle = {
    fontSize: 17,
    width: "85%",
    marginHorizontal:spacing[4],
    color: color.palette.black,
  }
 

export  const PopOver =({Text1,Text2,Text3,onPress1,onPress2,onPress3})=>{
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