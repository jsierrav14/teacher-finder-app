import React from 'react'
import { StyleSheet, View, FlatList, Text, ScrollView, Button } from 'react-native'
import {TEACHERS} from '../../data/data'
import TeacherItem from '../../components/teacher/TeacherItem';

const TeacherListScreen = props => {
  const teacherList = TEACHERS;

  const selectTeacherHandler =(id, title)=>{
     props.navigation.navigate('TeacherDetail',{teacherId:id,title:title})
  }
  return (

    <FlatList
      data={teacherList}
      keyExtractor={item => item.id}
      renderItem={
        itemData => <TeacherItem name={itemData.item.name} image={itemData.item.image} description={itemData.item.description} address={itemData.item.address}>
          <View>
            <Button title='Contactar'  />
          </View>
          <View>
            <Button title='Perfil' onPress={()=>selectTeacherHandler(itemData.item.id,itemData.item.name)}/>

          </View>
        </TeacherItem>
      } />


  )
}

const style = StyleSheet.create({

})

export default TeacherListScreen;
