import React from "react"
import {

    View,

    Image,
    StyleSheet,
    Text,
    TouchableOpacity,

} from "react-native"







export const MessageRecieve = ({ Online, Img, TextCartName, TextCartTime, TextCartMsg, TextCartNotification }) => {

    return (

        <View>
            <TouchableOpacity style={styles.MessageCart}>
                <View style={{marginLeft:'5%'}}>
                    <View style={styles.OnlineIcon} >
                        {Online}
                    </View>


                    <Image source={{uri:Img}} style={{ width: 60, height: 60 }} />

                </View>
                <View style={{ paddingLeft: '5%' }}>
                    <View style={styles.MessageCartName}>
                        <Text style={{width:'30%'}}>{TextCartName}</Text>
                        <Text style={styles.MessageCartTime}>{TextCartTime}</Text>
                    </View>
                    <View style={styles.MessageCartMsg}>
                        <Text>{TextCartMsg}</Text>
                        <View style={styles.MessageCartMsgNotificatin}>
                            <Text>{TextCartNotification}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        </View>

    )

}




const styles = StyleSheet.create({

    MessageCart:
    {
        
        borderRadius: 15,
        alignSelf: 'center',
        width: '90%',
        height: 90,
        backgroundColor: '#ffff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%'
    },
    MessageCartName: {
        flexDirection: "row"
    },
    MessageCartMsg: {
        flexDirection: "row",
        paddingTop: '3%'
    },

    MessageCartTime: {
        marginLeft: '47%',
        fontSize: 12,
        
    },

    MessageCartMsgNotificatin: {
        width: '7%',
        height: 20,
        backgroundColor: '#FFCB47',
        borderRadius: 360,
        marginLeft: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    OnlineIcon: {
        zIndex: 1,
        width: '16%',
        height: '12%',
        backgroundColor: '#FFCB47',
        position: 'absolute',
        marginTop: 47,
        marginLeft: 45,
        borderRadius: 360
    }
})