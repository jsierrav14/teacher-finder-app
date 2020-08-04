import React from 'react'
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import Colors from '../../constant/Colors';


const TeacherItem = props => {

    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.teachers}>

            <TouchableComponent>
                <View style={styles.container}>
                  <View style={styles.item}>
                  
                   <View style={styles.contImage}>
                        <Image style={styles.image} source={props.image} />

                    </View>
                    <View style={styles.contDetails}>
                        <Text style={styles.name}>{props.name}</Text>
                        <View style={styles.detail}>
                            <Text style={styles.description}>{props.description}</Text>
                            <Text tyle={styles.address}>{props.address}</Text>
                        </View>

                        <View style={styles.actions}>
                            {props.children}
                        </View>
                    </View>
                  
                  
                  </View>
                   



                </View>

            </TouchableComponent>

        </View>

    )
}

const styles = StyleSheet.create({
    teachers: {
        width: '90%'
    },
    container: {
        margin: 18,
        width: '100%',
       
        shadowColor: 'black',
        shadowOpacity: 0.26,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor: 'white',

    },
    item:{
    marginHorizontal:10,
    marginVertical:10,
     flexDirection: 'row',
        margin:20
    },
    contImage: {
        width: '30%',
        padding: 5

    },
    contDetails: {
        marginLeft:20,
        width: '70%'
    },
    detail: {
        textAlign: 'justify'
    },
    description:{
        fontSize:14,
        marginTop:10
    },
    address:{
      fontSize:14,
      marginTop:10

    },
    name: {
        fontSize: 18,
        color:Colors.accent
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 360
    },
    actions: {
        flexDirection: 'row'
    }
})
export default TeacherItem;