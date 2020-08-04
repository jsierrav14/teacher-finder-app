import React from 'react'
import { StyleSheet, View, Platform,Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'



const TopicItem = props =>{

    return(
        <View style={styles.container}>
           <Ionicons name={Platform.OS === 'android' ? 'md-book' : 'ios-book'} size={23} color="grey" />
           <Text>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
         flexDirection:'row',
         padding:10
     }
})

export default TopicItem;