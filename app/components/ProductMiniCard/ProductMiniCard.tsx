import React, { FC } from "react"
import {
    TextStyle,
    View,
    ViewStyle,
    ImageStyle,
    Image,
    ScrollView
  } from "react-native"
  import {
    Button,
    Text,
  } from "../../components"
  import { color, spacing,Negativespacing } from "../../theme"

 
  

  const BOLD: TextStyle = { fontWeight: "bold" }



const TEXT3 : TextStyle = {
  ...BOLD,

  fontSize: 15,
  color: color.palette.buttonBlue,
}


const MAINCARD: ViewStyle = {
    marginTop: spacing[6],
   
//   backgroundColor: color.palette.white,
    //  borderWidth: 4,
    // borderColor: color.palette.black,
    backgroundColor: color.palette.white,
    shadowColor: color.palette.buttonBlue,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    

}
const CARD: ViewStyle = {
    marginVertical: spacing[4],
    marginHorizontal: spacing[4],
    
//   backgroundColor: color.palette.white,
    //  borderWidth: 4,
    // borderColor: color.palette.black,
    flexDirection: "row",
    backgroundColor: color.palette.white,
    justifyContent: "flex-start",

    // shadowColor: color.palette.black,
   

}
const COLOUM: ViewStyle = {
    flexDirection:"column",
    justifyContent: "space-between",
    marginLeft: spacing[5],
    
    }
    const ROW: ViewStyle = {
        flexDirection:"row",
        justifyContent:"space-between",
        // marginLeft: spacing[5],
        // borderWidth:3,
        width:"68%"
        }
        const TEXT1 : TextStyle = {
            // ...BOLD,
            fontSize: 17,
            color: color.palette.black,
          }
          const TEXT2 : TextStyle = {
            fontSize: 12,
            color: color.palette.lightGrey,
          }
          const TEXTT : TextStyle = {
            marginTop:Negativespacing[2],
          fontSize: 12,
          color: color.palette.lightGrey,
        }
        const ROW3: ViewStyle = {
            flexDirection:"row",
            justifyContent:"flex-end",
            alignItems:"center",
            width:"100%",
            
            
            
            }
            const TEXT4 : TextStyle = {
                fontSize: 10,
                alignItems:"center",

                color: color.palette.lightGrey,
                  marginLeft:"2%",
                  // marginRight:"auto"
              }
              const BOTTOMPIC : ImageStyle={
                 marginLeft: spacing[3],
                 width:10,
                 height: 10
              }
export  const ProductMiniCard =({txt1, txt2, txt3,price,loc, img, minbid, maxbid})=>{
  // console.log("img  ", img)

  return (
        <ScrollView style={{ padding: 0 }}>
    <View style={MAINCARD}>
            <View style={CARD}>
                <View>
                {/* <Image source={require('../../../assets/images/CAR.png')} /> */}
                {/* <Image source={require('../../../assets/images/car.png')} /> */}
                <Image source={{uri:img}} />
                </View>
                <View style={COLOUM}>
                <View style={ROW}> 
                  <Text style={TEXT1} text={txt1}/>
                  <Image source={require('../../../assets/images/cross.png')} />
                  </View>
                  <Text style={TEXT2} text={txt2}/>
                  <Text style={TEXTT} text={txt3}/>
                  <Text style={TEXT3} text={price}/>

                </View>
            </View> 
            <View style={ROW3}>
                  <Image source={require('../../../assets/images/location.png')} />
                  <Text style={TEXT4} text={loc}/>
                  <Image  style={BOTTOMPIC}  source={require('../../../assets/images/minbid.png')} />
                  <Text style={TEXT4} text={minbid}/>
                  <Image   style={BOTTOMPIC} source={require('../../../assets/images/minbid.png')} />
                  <Text style={TEXT4} text={maxbid}/>
                  </View>
            </View>
              </ScrollView>
             
     
    )
    
}



