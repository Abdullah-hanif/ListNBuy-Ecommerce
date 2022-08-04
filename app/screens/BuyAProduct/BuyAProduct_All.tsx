import React, { FC } from "react"
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { color } from "../../theme"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export const BuyAProduct: FC<StackScreenProps<NavigatorParamList, "buyAProduct">> = observer(
  ({ navigation }) => {
    // <Ionicons namme="arrow-back" size={25} style={{marginLeft:20}}/>
    //     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>

    //    <Image source={require('../../../assets/images/logoListBuy.png')} style={{marginLeft:'32%',width:'30%',height:30}}/>
    //    <View >
    //    <Image source={require('../../../assets/images/bell-notification.png')} style={{marginRight:'5%'}}/>
    //    </View>
    //    </View>
    return (
      <View style={styles.MainContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
          <TouchableOpacity onPress={()=>(navigation.goBack())}>
            <Ionicons name="arrow-back" size={25} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
          <Image source={require('../../../assets/images/logoListBuy.png')} style={{ marginLeft: '6%', width: '30%', height: 30 }} />
          <Image source={require('../../../assets/images/bell-notification.png')} style={{ marginRight: '5%' }} />
        </View>

        {/* bottom area========= */}
        <View style={{ flex: 1, marginTop: '3%' }}>
          <ScrollView style={{ height: '100%' }}>

            <View >
              <Image source={require('../../../assets/images/imageSlider.png')} />
            </View>
            <View style={{
              width: '95%',
              alignSelf: "center",
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 2,
              marginTop: '4%'
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '5%' }}>
                <Text style={{ fontSize: 18 }}>2020 Toyota HighLander</Text>
                <Text style={{ fontSize: 20, fontWeight: '800' }}>$27345</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '3%' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons name="star" size={20} color="#FFCB47" />
                  <Ionicons name="star" size={20} color="#FFCB47" />
                  <Ionicons name="star" size={20} color="#FFCB47" />
                  <Text style={{ marginLeft: 10 }}>04 Review (s)</Text>
                </View>
                <View>
                  <Image source={require('../../../assets/images/upload.png')} style={{ height: 30, width: 30 }} />
                </View>
              </View>
              <View style={{ alignItems: 'center', marginTop: '3%' }}>
                <Text style={{ fontSize: 20 }}>Current Location WashingTon,Dc</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: '#2A84F2', width: '80%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, alignSelf: 'center', marginTop: 15 }}>
                <Text style={{ color: 'white', fontWeight: '700' }}>Make An Offer</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginTop: '4%' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons name="location-outline" size={15} />
                  <Text>Washington,DC</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                  <Entypo name="back-in-time" size={15} />
                  <Text> Posted 15 jan</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                  <Feather name="eye" size={15} />
                  <Text> 0.4 Views</Text>
                </View>
              </View>
            </View>
            <View style={{ width: '95%', alignSelf: "center", flexDirection: 'row', justifyContent: 'space-around', marginTop: '6%' }}>
              <Text>VEHICLE DESCRIPTION</Text>
              <Text style={{ color: '#2A84F2', borderBottomWidth: 2, borderColor: '#2A84F2' }}>VEHICLE DETAILS</Text>
              <Text >REVIEWS</Text>
            </View>
            <View style={styles.V_Discription_Cart}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/images/fuel.png')} style={{ height: 30, width: 30 }} />
                <Text style={{ fontWeight: '600', fontSize: 15, marginTop: '2%' }}>Fuel Ecnomy</Text>
                <Text>21/29 mpg</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image source={require('../../../assets/images/used.png')} style={{ height: 30, width: 30, }} />
                <Text style={{ fontWeight: '600', fontSize: 15, marginTop: '2%' }}>Fuel Ecnomy</Text>
                <Text>21/29 mpg</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image source={require('../../../assets/images/transmition.png')} style={{ height: 30, width: 30, }} />
                <Text style={{ fontWeight: '600', fontSize: 15, marginTop: '2%' }}>Fuel Ecnomy</Text>
                <Text>21/29 mpg</Text>
              </View>
            </View>
            <View style={{
              width: '95%', alignSelf: "center", marginTop: '5%', shadowColor: '#000',
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5, flexDirection: 'row', justifyContent: 'space-around'
            }}>
              <View style={{}}>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>MILAGE</Text>
                <Text style={{ fontSize: 19 }}>12345</Text>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>ENGINE SIZE</Text>
                <Text style={{ fontSize: 18 }}>2700 cc</Text>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>BODY STYLE</Text>
                <Text style={{ fontSize: 18 }}>JEEP</Text>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>SESATS</Text>
                <Text style={{ fontSize: 18 }}>6</Text>
              </View>
              <View>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>COLOR</Text>
                <Text style={{ fontSize: 18 }}>WHITE</Text>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>YEAR OF MAUFACTURE</Text>
                <Text style={{ fontSize: 18 }}>2022</Text>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>FUEL TYPE</Text>
                <Text style={{ fontSize: 18 }}>PETEROL</Text>
                <Text style={{ fontSize: 19, color: '#3A456E' }}>MAKE</Text>
                <Text style={{ fontSize: 18 }}>TOYOTA</Text>
              </View>
            </View>
            <View style={{ marginTop: '8%', width: '95%', height: '100%', alignSelf: 'center', shadowColor: '#000', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.4, shadowRadius: 3, elevation: 1, }}>
              <View style={{ flexDirection: 'row', marginLeft: '5%', marginTop: '3%' }}>
                <Image source={require('../../../assets/images/userProfile.png')} style={{ height: 70, width: 70, }} />
                <View style={{ marginLeft: '5%' }}>
                  <Text style={{ color: '#3A456E', fontSize: 16 }}>Sold By</Text>
                  <Text style={{ fontSize: 18, color: '#3A456E' }}>William Mark</Text>
                </View>
              </View>
              <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ backgroundColor: color.ButtonInner, height: 40, width: '42%', borderRadius: 5, borderColor: '#2A84F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={()=>(navigation.navigate('sellerProfile'))}>
                  <Text>View Profile </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: color.ButtonInner, height: 40, width: '42%', borderRadius: 5, borderColor: '#2A84F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Contact Seller</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: '5%', marginTop: '5%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: '600' }}>SHARE</Text>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <Image source={require('../../../assets/images/twitter.png')} style={{ height: 35, width: 35, marginLeft: 10 }} />
                  <Image source={require('../../../assets/images/facebook.png')} style={{ height: 35, width: 35, marginLeft: 10 }} />
                  <Image source={require('../../../assets/images/whatsapp.png')} style={{ height: 35, width: 35, marginLeft: 10 }} />
                </View>
              </View>
              <View style={{  marginTop: '8%', marginLeft: '5%' }}>
                <Text>Start Chat With Seller</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity style={{ backgroundColor: color.ButtonInner, height: 40, width: '20%', borderRadius: 5, borderColor: '#2A84F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Call Me</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: color.ButtonInner, height: 40, width: '20%', borderRadius: 5, borderColor: '#2A84F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <Text>Last Price</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: color.ButtonInner, height: 40, width: '30%', borderRadius: 5, borderColor: '#2A84F2', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <Text>It is Availible</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ height: 85, marginTop: '5%', width: '75%', borderRadius: 5 }}>
                  <TextInput placeholder="Type A Message " placeholderTextColor={'grey'} style={{ borderRadius: 5, paddingLeft: 20, backgroundColor: color.ButtonInner, height: 90 }} />
                </View>
                <View style={{}}>
                  <TouchableOpacity style={{ backgroundColor: '#2A84F2', width: '80%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, alignSelf: 'center', marginTop: 15 }}>
                    <Text style={{ color: 'white', fontWeight: '700' }}>Start Chat</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={{ marginTop: '5%' }}>
                <Text style={{ paddingLeft: 25, fontSize: 20, fontWeight: '700' }}>Similar Ads</Text>
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

            </View>
          </ScrollView>
        </View>
      </View>
    )
  },
)
{/* <View style={{height:'85%',marginTop:'5%',width:'75%',borderRadius:5}}>
      <TextInput placeholder="Type A Message " placeholderTextColor={'grey'} style={{borderRadius:5,paddingLeft:20,backgroundColor:color.ButtonInner,height:90}}/>
    </View> */}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: color.background,
    flex: 1
  },
  V_Discription_Cart: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    alignSelf: "center",
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