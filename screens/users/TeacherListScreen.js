import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, FlatList, Text, ScrollView, Button } from 'react-native'
import * as TeachersActions from '../../store/actions/teacher.action'
import TeacherItem from '../../components/teacher/TeacherItem';

const TeacherListScreen = props => {
  const teacherList = useSelector(state => state.teachers.teachers);
  const dispatch = useDispatch();

  const loadTeachers = useCallback(async () => {

    try {
      await dispatch(TeachersActions.getAllTeachers())
    } catch (error) {

    }
  }, [dispatch])

  useEffect(() => {
    loadTeachers()
  }, [loadTeachers])


  const selectTeacherHandler = (id, title) => {
    props.navigation.navigate('TeacherDetail', { teacherId: id, title: title })
  }
  return (

    <FlatList
      data={teacherList}
      keyExtractor={item => item.id}
      renderItem={
        itemData => <TeacherItem name={itemData.item.firstName} image={itemData.item.image} description={itemData.item.description} address={itemData.item.address}>
          <View>
            <Button title='Contactar' />
          </View>
          <View>
            <Button title='Perfil' onPress={() => selectTeacherHandler(itemData.item.id, itemData.item.name)} />

          </View>
        </TeacherItem>
      } />


  )
}

const style = StyleSheet.create({

})

export default TeacherListScreen;
