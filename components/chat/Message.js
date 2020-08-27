import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Message = props => {

    return (
        <View style={styles.message}>
            <View style={styles.contImage}>
                <Image style={styles.image} source={props.image} />

            </View>
            <View style={styles.contMessage}>
             <Text>{props.message}</Text>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        width:'70%',
        height:60,
        margin:10,
        flexDirection: 'row',
        padding:10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
        backgroundColor: 'white',
    },
    contImage: {
        width:40,
        height:40,

    },
    contMessage:{
     margin:10
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:360
    }

})


export default Message;