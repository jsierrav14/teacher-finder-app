import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView, FlatList} from 'react-native'
import { TEACHERS,TOPICS} from '../../data/data';
import TopicItem from '../../components/UI/TopicItem';

const TeacherDetailScreen = props => {

    const teacherId = props.navigation.getParam('teacherId');

    const teacher = TEACHERS.find(item => item.id === teacherId)
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contImage}>
                <Image style={styles.image} source={teacher.image} />
            </View>
            <View>
                <Text style={styles.name}>{teacher.name}</Text>

                <View style={styles.contDescription}>
                    <Text style={styles.description}>{teacher.description}</Text>
                    <Text style={styles.address}>{teacher.address}</Text>
                </View>
                <View style={styles.contAddress}>
                                    
                </View>




                <View>
                  {
                      teacher.topics.map(item=><TopicItem key={item.id} name={item.name}/>)
                  }
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    contImage: {
        width: '100%',
        height: 300
    },
    image: {
        width: '100%',
        height: 300

    },
    name: {
        fontSize: 24,
        textAlign: "center"
    },
    contDescription:{
       padding:20
    },
    description: {
        fontSize: 20,
        textAlign: "center"
    },
    address: {
        fontSize: 20,
        textAlign: "center"

    }
})

export default TeacherDetailScreen;