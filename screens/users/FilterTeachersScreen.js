import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import Colors from '../../constant/Colors'

const FilterTeachersScreen = props => {

    let ButtonComponet = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponet = TouchableNativeFeedback;
    }

    return (
        <View style={styles.form}>
            <View style={styles.formControl}>
                <TextInput style={styles.input} placeholder="Asignatura" />
            </View>

            <View style={styles.formControl}>
                <TextInput style={styles.textArea} placeholder="Describe tu pregunta" />
            </View>

            <ButtonComponet activeOpacity={10} >
                <View style={styles.contButton}>
                    <Button title="Buscar"  color='white' onPress={()=>props.navigation.navigate('TeacherList')}/>
                </View>
            </ButtonComponet>



        </View>
    )

}

const styles = StyleSheet.create({
    form: {
        margin: 40
    },
    formControl: {
        width: '100%',
        marginTop: 30,
        borderColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 15
    },
    label: {

    },
    input: {
        height: 40,
        paddingHorizontal: 2,
        paddingVertical: 5,


    },
    textArea: {
        height: 100,
        paddingHorizontal: 2,
        paddingVertical: 5,


    },
    contButton: {
        marginTop: 30,
        borderColor: Colors.accent,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: Colors.accent
    },
    
})

export default FilterTeachersScreen;