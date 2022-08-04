import React, { FC } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity ,ScrollView} from 'react-native'
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

export const SellerProfile: FC<StackScreenProps<NavigatorParamList, "sellerProfile">> = observer(
    ({ navigation }) => {
        return (
            <View style={styles.MainContainer}>
                
                <View style={styles.Header}>
                <TouchableOpacity onPress={()=>(navigation.goBack())}>
                        <Ionicons name="arrow-back" size={25} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                    <Image source={require('../../../assets/images/logoListBuy.png')} style={{ marginLeft: '30%', width: '30%', height: 30 }} />
                </View>
                <ScrollView  style={{flex:1}}>
            <View style={styles.profile_cart}>
           <View style={{}}>
             <Image source={require('../../../assets/images/userProfile.png')} style={{width:95,height:95}}/>
             </View>
             <View>
                <Text style={{  fontWeight:'600', fontSize:20,marginTop:"2%"}}>William Mark</Text>
                <Text style={{marginTop:"3%"}}>Joined 15 September 2021 </Text>
                <Text style={{fontWeight:'600',fontSize:18,marginTop:"2%"}}>Avg Seller Rating</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons name="star" size={20} color="#FFCB47" />
                  <Ionicons name="star" size={20} color="#FFCB47" />
                  <Ionicons name="star" size={20} color="#FFCB47" />
               </View>
               <Text style={{width:180}}>Seller Rating are gotten from buyers who rate this seller directly </Text>
             </View>
            </View>
             <View>
                <Text style={{fontSize:20,fontWeight:'600',color:'black',marginLeft:"5%",marginTop:'5%'}}>Seller's Reviews </Text>
            </View>
            <View style={{marginTop:'5%'}}>
                <Image source={require('../../../assets/images/SellerSlider.png')}/>
            </View>
            <View style={styles.Simmilar_Ads_Cart}>

<View style={{ backgroundColor: color.ButtonInner, width: '30%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
  <Image source={require('../../../assets/images/marcedees.png')} style={{ height: '50%', width: '80%' }} />
</View>
<View style={{}}>
  <Text style={{ fontWeight: '600' }}>Marcedees-Benz</Text>
  <Text style={{ marginTop: '10%' }}><Ionicons name="location-outline" size={15} /> lagos likija</Text>
  <TouchableOpacity style={{ marginTop: '5%', backgroundColor: '#2A84F24D', width: '88%', height: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
    <Text style={{ color: '#2A84F2', fontWeight: '600' ,fontSize:12}}>Forigen Used</Text>
  </TouchableOpacity>

</View>
<View style={{}}>
  <Text style={{ color: '#2A84F2', fontWeight: '600' }}>$43,8348</Text>
  <Text style={{ marginTop: '10%' }}><Entypo name="back-in-time" size={15} /> Posted 14 Jan</Text>
  <TouchableOpacity style={{ marginTop: '5%', backgroundColor: '#2A84F24D', width: '88%', height: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
    <Text style={{ color: '#2A84F2', fontWeight: '600',fontSize:12 }}>Autometic</Text>
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
        backgroundColor:'#FFFFFF',
        flex: 1
    },
    Header: {
        flexDirection: 'row', 
        alignItems: 'center',
         marginTop: '5%'

    },
    profile_cart:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'90%',
        height:'35%',
        backgroundColor:'#F3F4F8',
        alignSelf:'center',
        borderRadius:5,
        marginTop:'5%',

     
    },
    Simmilar_Ads_Cart: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 2,
        width: '95%',
        height: 110,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:'3%'
      }


})